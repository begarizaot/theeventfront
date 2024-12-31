import { useContext, useEffect, useRef, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

import { CheckoutTicktsProps } from "../types";

import { useForm } from "../../../../../../hooks";
import { postDiscountCodeEvent } from "../../../../../../store/slices";

import { theEventService } from "../services";
import { calculateTotals } from "../utils";
import { useStripeCheck } from "./useStripeCheck";
import {
  getForwardMailOrder,
  postCreateFreeOrder,
  postCreateOrder,
  postCreatePayment,
} from "../../../../../../store/slices/orders";
import { LoadingContext } from "../../../../../../context";
import { NumberFormat, RemoveCharacters } from "../../../../../../helpers";

export const useCheckoutTickets = (dataReq: CheckoutTicktsProps) => {
  const { showMessage, freeTicket } = dataReq;

  const stripe = useStripe();
  const { showLoading,hiddenLoading } = useContext(LoadingContext);

  const { paymentStripe, paymentCard, confirmCardPayment, paymentRequest } =
    useStripeCheck();

  const errorRes = useRef<any>(null);

  const [values, setValues] = useState<any>({});
  const [discount, setDiscount] = useState<any>({});
  const [msErrors, setMsErrors] = useState<any>({});

  const { formState, onInputChange, onCheckboxChange, onSetInput } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    smsCheck: false,
    codeDiscount: "",
  });

  useEffect(() => {
    !freeTicket && getServiceFee();
    onDataUser();
  }, []);

  useEffect(() => {
    if (values.total > 0) {
      onPaymentStripe();
    }
  }, [values.total > 0 && stripe]);

  const getServiceFee = async () => {
    const { data } = await theEventService.getServiceFee();
    const calculatedValues = calculateTotals(dataReq.tickets, data);
    setValues({ ...values, ...calculatedValues });
  };

  const onDataUser = () => {
    const { user } = JSON.parse(localStorage.getItem("userData") || "{}");
    user?.id &&
      onSetInput({
        firstName: user?.firstname,
        lastName: user?.lastname,
        email: user?.email,
        phone: user?.phone,
      });
  };

  const onClearErrors = (ev: any) => {
    setMsErrors({ ...msErrors, ...ev });
  };

  const onCompleteForm = async (ev: any) => {
    ev.preventDefault();
    try {
      const paymentMethod = await paymentCard();
      onCompletePurchase({ paymentMethod, type: "card" });
    } catch (error) {
      setMsErrors({ ...msErrors, payment: error });
    }
  };
  const onPaymentStripe = async () => {
    const paymentMethod = await paymentStripe(values.total);
    onCompletePurchase({ paymentMethod, type: "stripe" });
  };

  const onDiscountCode = async () => {
    try {
      const data = await postDiscountCodeEvent(dataReq.data.id_event, {
        code: formState.codeDiscount,
        total: values.subTotal,
      });

      setDiscount(data);
      setValues({ ...values, total: values.price + data.data });
    } catch (error) {
      setDiscount({ message: error, data: 0 });
      setValues({ ...values, total: values.price + values.subTotal });
    }
  };

  const onCompletePurchase = async ({ paymentMethod, type }: any) => {
    showLoading(true);
    try {
      const reqData = {
        ...formState,
        phone: RemoveCharacters(formState.phone),
        values: { ...values, total: Number(NumberFormat(values.total, 2)) },
        eventId: dataReq.data.id_event,
        tickets: dataReq.tickets.map((ticket: any) => ({
          id: ticket.id,
          quantity: ticket.quantity,
          name: ticket.name,
        })),
      };

      const createPayment = await postCreatePayment({
        ...reqData,
        payment: paymentMethod,
        type,
      });

      if (!createPayment.status) {
        onMessageError(createPayment?.message || "Error in payment");
        return;
      }

      await confirmCardPayment(createPayment?.data?.client_secret);

      const createOrder = await postCreateOrder({
        ...reqData,
        payment: createPayment?.data,
      });

      onResulCreate(createOrder);
    } catch (error: any) {
      onMessageError(error?.message || error || "");
    }
  };

  const onFreeCompleteForm = async (ev: any) => {
    ev.preventDefault();
    showLoading(true);
    const reqData = {
      ...formState,
      phone: RemoveCharacters(formState.phone),
      values,
      eventId: dataReq.data.id_event,
      tickets: dataReq.tickets.map((ticket: any) => ({
        id: ticket.id,
        quantity: ticket.quantity,
        name: ticket.name,
      })),
    };

    try {
      const createOrder = await postCreateFreeOrder(reqData);
      onResulCreate(createOrder);
    } catch (error: any) {
      onMessageError(error?.message || error || "");
    }
  };

  const onResulCreate = (req: any) => {
    if (!req.status) {
      onMessageError(req?.message || "Error in payment");
      return;
    }

    hiddenLoading();
    getForwardMailOrder(req.data);
    showMessage(req.data);
  };

  const onMessageError = (message: any) => {
    hiddenLoading();
    errorRes.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  return {
    values,
    discount,
    msErrors,
    errorRes,
    formState,
    paymentRequest,
    onInputChange,
    onClearErrors,
    onCompleteForm,
    onDiscountCode,
    onCheckboxChange,
    onFreeCompleteForm,
  };
};
