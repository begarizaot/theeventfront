import { useContext, useEffect, useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";

import { dataListRefundable } from "../../../../data/listRefundable";

import { EventData } from "../../../../interfaces/EventsInterface";
import { ServiceFeeData } from "../../../../interfaces/ServiceFeeInterface";

import { CardContext } from "../../../../context";
import { getLocalStorage, useParseNumbers, useQuery } from "../../../../hooks";

import { useStripeComplete } from "./useStripeComplete";

import {
  getServiceFee,
  getTicketEvents,
  postCreateOrder,
  postCreateOrderFree,
  postCreatePayment,
  postCreatePaymentFree,
  postEventsDiscountCode,
  postSendMail,
} from "../../../../store/thunks";
import { scrollToId } from "../../../../helpers";

export const useBookTickets = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const query = useQuery();

  const navigate = useNavigate();

  const { onShowSuccess, onValueOrder, freeTicket } = useContext(CardContext);
  const {
    // payment
    paymentRequest,
    abortPayment,
    paymentStripe,
    clearPaymentRequest,
    // cardElement,
    paymentCard,
    confirmCardPayment,
  } = useStripeComplete();

  const [userForm] = Form.useForm();

  const [isLoading, setIsLoading] = useState({
    seats: true,
    values: true,
    complete: false,
  });
  const [isError, setIsError] = useState({
    discountCode: "",
    card: "",
  });

  const [checkoutInit, setCheckoutInit] = useState(1);
  const [eventDetail, setEventDetail] = useState<EventData>();
  const [listSeats, setListSeats] = useState<any[]>([]);
  const [values, setValues] = useState<any>({});
  const [userData, setUserData] = useState<any>({});

  const [serviceFee, setServiceFee] = useState<ServiceFeeData>();
  const [refundable, setRefundable] = useState(false);
  const [discountCode, setDiscountCode] = useState(0);

  const [listRefundable, setListRefundable] = useState<any[]>([]);

  useEffect(() => {
    fechEventDetail();
    fetchListRefundable();
  }, []);

  useEffect(() => {
    checkoutInit == 2 && fechServiceFee();
    if (checkoutInit == 1) {
      setIsError({ ...isError, discountCode: "" });
      eventDetail?.url_map && onRemoveSelected();
    }
  }, [checkoutInit]);

  useEffect(() => {
    onValuesTotal(serviceFee);
  }, [serviceFee, refundable, discountCode]);

  useEffect(() => {
    values?.total && checkoutInit == 3 && onPaymentStripe();
  }, [values, checkoutInit]);

  const fechEventDetail = () => {
    const event = getLocalStorage("event");
    setEventDetail(event);
    setListSeats(event.event_tickets_ids ?? []);
    fechTicketEvents(event?.id_event);
  };

  const fechTicketEvents = async (id_event?: any) => {
    const tickets = await getTicketEvents(id_event);
    setListSeats(tickets);
    setIsLoading((prev) => ({ ...prev, seats: false }));
  };

  const fechServiceFee = async () => {
    setIsLoading({ ...isLoading, values: true });
    const serviceFee = await getServiceFee();
    setServiceFee(serviceFee);
    setIsLoading({ ...isLoading, values: false });
  };

  const fetchListRefundable = async () => {
    setListRefundable(dataListRefundable);
  };

  const eventsDiscountCode = async (code: any) => {
    if (!code) {
      setDiscountCode(0);
      return;
    }
    setIsError({ ...isError, discountCode: "" });
    try {
      const discountCode = await postEventsDiscountCode(eventDetail?.id_event, {
        code,
        value: Number(values?.subTotal ?? 0),
      });
      Number(values?.subTotal ?? 0) <= discountCode
        ? setDiscountCode(0)
        : setDiscountCode(discountCode);

      setUserData({ ...userData, discountCode: code });
    } catch (error: any) {
      setDiscountCode(0);
      setIsError({ ...isError, discountCode: error });
    }
  };

  const fechCompletePurchase = async ({ paymentId, type }: any) => {
    try {
      setIsLoading({ ...isLoading, complete: true });
      const data = {
        eventId: eventDetail?.id_event,
        tickets: listSeats.filter((item) => item.select > 0),
        userData,
        values: useParseNumbers(values),
        paymentId,
        type,
        aff: query.get("aff") || "",
      };
      const resPayment = await postCreatePayment(data);
      await confirmCardPayment(resPayment?.client_secret || "");
      const order = await postCreateOrder({ ...data, payment: resPayment });
      postSendMail(order, userData);
      onValueOrder(order);
      onShowSuccess();
      navigate(`/event/${eventDetail?.id_event}`, { replace: true });
    } catch (error: any) {
      setIsLoading({ ...isLoading, complete: false });
      abortPayment();
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const fechCompletePurchaseFree = async () => {
    try {
      setIsLoading({ ...isLoading, complete: true });
      const data = {
        eventId: eventDetail?.id_event,
        tickets: listSeats.filter((item) => item.select > 0),
        userData,
        values: useParseNumbers(values),
      };
      await postCreatePaymentFree(data);
      const order = await postCreateOrderFree(data);
      postSendMail(order, userData);
      onValueOrder(order);
      onShowSuccess();
      navigate(`/admin/freeTickets/${eventDetail?.id_event}`, {
        replace: true,
      });
    } catch (error: any) {
      setIsLoading({ ...isLoading, complete: false });
      abortPayment();
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  // checkouts
  const onCheckoutInit = (value: number) => {
    setCheckoutInit(value);
    scrollToId("containerCheckout");
  };

  const onPaymentStripe = async () => {
    console.log("onPaymentStripe")
    await clearPaymentRequest();
    const paymentId = await paymentStripe(Number(values.total));
    fechCompletePurchase({ paymentId, type: "stripe" });
  };

  const onCompletePurchase = async () => {
    if (freeTicket) {
      fechCompletePurchaseFree();
      return;
    }
    setIsError({ ...isError, card: "" });
    try {
      const paymentId = await paymentCard();
      fechCompletePurchase({ paymentId, type: "card" });
    } catch (error: any) {
      setIsError({ ...isError, card: error });
    }
  };

  const onRemoveSelected = () => {
    const newList = listSeats.map((item) => {
      return {
        ...item,
        select: 0,
        seatId: [],
      };
    });
    setListSeats(newList);
  };

  // actions
  const onValueChangeUser = (val: any) => {
    setRefundable(val?.refundable);
    freeTicket && setUserData({ ...userData, ...val });
  };

  const onSelectSeats = (val: any) => {
    const newList = listSeats.map((item) => {
      if (item.id == val.id) {
        return {
          ...item,
          select: val.value,
        };
      }
      return item;
    });
    setListSeats(newList);
  };

  const onValuesTotal = (sFee?: ServiceFeeData) => {
    const ticket = listSeats.reduce((acc, item) => {
      if (item.select) {
        return acc + item.price * item.select;
      }
      return acc;
    }, 0);

    const ticketCount = listSeats.reduce((acc, item) => {
      if (item.select) {
        return acc + item.select;
      }
      return acc;
    }, 0);

    const serviceFee =
      ticket * (sFee?.desiredProfit ?? 0) + (sFee?.fixedFee ?? 0);
    const subtotal = (discountCode ? discountCode : ticket) + serviceFee;
    const processingFee = subtotal * (sFee?.percentageFee ?? 0);
    const refundableRes =
      (sFee?.minRefundable ?? 0) + (ticket * (sFee?.refundable ?? 0)) / 10;
    const totalRefundable = refundable ? refundableRes * ticketCount : 0;
    const total = subtotal + processingFee + totalRefundable;

    setValues({
      ...values,
      subTotal: ticket.toFixed(2),
      serviceFee: serviceFee.toFixed(2),
      processingFee: processingFee.toFixed(2),
      total: total.toFixed(2),
      refundable: refundableRes.toFixed(2),
      totalRefundable: totalRefundable.toFixed(2),
      discountCode: discountCode ? discountCode.toFixed(2) : null,
    });
  };

  const onValuesChange = (values: any) => {
    setUserData({ ...userData, ...values });
    setCheckoutInit(3);
    scrollToId("containerCheckout");
  };

  const onSelectMap = (val: any) => {
    const newList = listSeats.map((item: any) => {
      if (item.order == val.category.key) {
        return {
          ...item,
          select: item.select
            ? item.select + (val.numSelected || 1)
            : val.numSelected || 1,
          seatId: [...(item.seatId || ""), val.seatId],
        };
      }
      return item;
    });
    setListSeats(newList);
  };

  const onRmSelectMap = (val: any) => {
    const newList = listSeats.map((item: any) => {
      if (item.order == val.category.key) {
        return {
          ...item,
          select: item.select ? item.select - 1 : 0,
          seatId: item.seatId?.filter((e: any) => e != val.seatId),
        };
      }
      return item;
    });
    setListSeats(newList);
  };

  return {
    values,
    isError,
    userForm,
    listSeats,
    isLoading,
    freeTicket,
    eventDetail,
    checkoutInit,
    contextHolder,
    listRefundable,
    paymentRequest,
    eventsDiscountCode,
    onCompletePurchase,
    onValueChangeUser,
    onCheckoutInit,
    onValuesChange,
    onSelectSeats,
    onRmSelectMap,
    onSelectMap,
  };
};
