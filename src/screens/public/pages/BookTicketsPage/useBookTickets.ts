import { useContext, useEffect, useState } from "react";
import { Form } from "antd";

import { dataListRefundable } from "../../../../data/listRefundable";

import { EventData } from "../../../../interfaces/EventsInterface";
import { ServiceFeeData } from "../../../../interfaces/ServiceFeeInterface";

import { CardContext } from "../../../../context";
import { getLocalStorage } from "../../../../hooks";

import { useStripeComplete } from "./useStripeComplete";

import {
  getServiceFee,
  getTicketEvents,
  postEventsDiscountCode,
} from "../../../../store/thunks";

export const useBookTickets = () => {
  const { onShowSuccess } = useContext(CardContext);
  const { paymentCard } = useStripeComplete();

  const [userForm] = Form.useForm();

  const [isLoading, setIsLoading] = useState({
    seats: true,
    values: true,
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
    }
  }, [checkoutInit]);

  useEffect(() => {
    onValuesTotal(serviceFee);
  }, [serviceFee, refundable, discountCode]);

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
    } catch (error: any) {
      setDiscountCode(0);
      setIsError({ ...isError, discountCode: error });
    }
  };

  const fechCompletePurchase = async ({ paymentId, type }: any) => {
    try {
      console.log(userData);
      console.log({ paymentId, type });
      console.log(values);
      console.log(listSeats);
    } catch (error) {}
  };

  // checkouts
  const onCheckoutInit = (value: number) => {
    setCheckoutInit(value);
  };

  const onCompletePurchase = async () => {
    setIsError({ ...isError, card: "" });
    try {
      const paymentId = await paymentCard();
      fechCompletePurchase({ paymentId, type: "card" });
      // onShowSuccess();
    } catch (error: any) {
      setIsError({ ...isError, card: error });
    }
  };

  // actions
  const onValueChangeUser = (val: any) => {
    setRefundable(val?.refundable);
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
    const refundableRes = (ticket * (sFee?.refundable ?? 0)) / 10;
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
    setUserData(values);
    setCheckoutInit(3);
  };

  return {
    values,
    isError,
    userForm,
    listSeats,
    isLoading,
    eventDetail,
    checkoutInit,
    listRefundable,
    eventsDiscountCode,
    onCompletePurchase,
    onValueChangeUser,
    onCheckoutInit,
    onValuesChange,
    onSelectSeats,
  };
};
