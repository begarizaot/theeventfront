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
  onInitializePixel,
  pixelAddToCart,
  pixelInitiateCheckout,
  pixelPurchase,
  pixelPurchaseMeta,
  pixielAddToCartMeta,
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

  const { onShowSuccess, onValueOrder, freeTicket, onFreeTicket } =
    useContext(CardContext);
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
  const [freeCode, setFreeCode] = useState(false);

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
      freeCode && onFreeTicket(false);
    }
  }, [checkoutInit]);

  useEffect(() => {
    onValuesTotal(serviceFee);
  }, [serviceFee, refundable, discountCode]);

  useEffect(() => {
    values?.total && checkoutInit == 3 && onPaymentStripe();
  }, [values, checkoutInit]);

  useEffect(() => {
    setRefundable(userData.refundable);
  }, [userData.refundable]);
  

  const fechEventDetail = async () => {
    const event = getLocalStorage(freeTicket ? "eventShared" : "event");
    setEventDetail(event);
    setListSeats(event.event_tickets_ids ?? []);
    fechTicketEvents(event?.id_event);
    // -- Pixel TikTok --
    const { pixel_tiktok_id } = eventDetail?.pixel_id;
    pixel_tiktok_id && onInitializePixel(pixel_tiktok_id);
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
      if (discountCode.freeTicket) {
        setFreeCode(true);
        onFreeTicket(true);
        return;
      }

      Number(values?.subTotal ?? 0) <= discountCode.data
        ? setDiscountCode(0)
        : setDiscountCode(discountCode.data);

      setUserData({ ...userData, discountCode: code });
      setFreeCode(false);
    } catch (error: any) {
      setDiscountCode(0);
      setIsError({ ...isError, discountCode: error });
      if (freeCode) {
        onFreeTicket(false);
        setFreeCode(false);
      }
    }
  };

  const fechCompletePurchase = async ({ paymentId, type }: any) => {
    try {
      setIsLoading({ ...isLoading, complete: true });
      const data = {
        eventId: eventDetail?.id_event,
        tickets: (listSeats ?? []).filter((item) => item.select > 0),
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
      const { selectedItems } = onFilterPixelSeats();
      const dataMeta = {
        contens: selectedItems,
        value: Number(values?.total) || 0,
      };
      pixelPurchaseMeta(dataMeta);
      pixelPurchase(dataMeta);
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
        tickets: (listSeats ?? []).filter((item) => item.select > 0),
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
    const newList = (listSeats ?? []).map((item) => {
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
    setUserData({ ...userData, ...val });
  };

  const onSelectSeats = (val: any) => {
    const newList = (listSeats ?? []).map((item) => {
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
    const ticket = listSeats?.reduce((acc, item) => {
      if (item.select) {
        return acc + item.price * item.select;
      }
      return acc;
    }, 0);

    const ticketCount = listSeats?.reduce((acc, item) => {
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

  const onValuesChange = (data: any) => {
    setUserData({ ...userData, ...data });
    setCheckoutInit(3);
    scrollToId("containerCheckout");

    const { selectedItems } = onFilterPixelSeats();
    pixelInitiateCheckout({
      contens: selectedItems,
      value: Number(values?.total) || 0,
    });
  };

  const onSelectMap = (val: any) => {
    const newList = (listSeats ?? []).map((item: any) => {
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
    if (val.numFree) {
      const newList = (listSeats ?? []).map((item: any) => {
        if (item.order == val.category.key) {
          return {
            ...item,
            select: item.select-- - 1,
            seatId: (item.seatId ?? [])?.filter((e: any) => e != val.seatId),
          };
        }
        return item;
      });
      setListSeats(newList);
      return;
    }
    const newList = (listSeats ?? []).map((item: any) => {
      if (item.order == val.category.key) {
        return {
          ...item,
          select: item.select ? item.select - 1 : 0,
          seatId: (item.seatId ?? [])?.filter((e: any) => e != val.seatId),
        };
      }
      return item;
    });
    setListSeats(newList);
  };

  const onCheckOut = async () => {
    onCheckoutInit(2);

    const { selectedItems, totalPrice } = onFilterPixelSeats();
    const dataMeta = {
      contens: selectedItems,
      value: totalPrice,
    };
    pixielAddToCartMeta(dataMeta);
    pixelAddToCart(dataMeta);
  };

  const onFilterPixelSeats = () => {
    const selectedItems = listSeats
      .filter((item) => item.select)
      .flatMap((item) =>
        Array.from({ length: item.select }, () => ({
          content_id: item.id,
          content_name: item.title,
          price: item.price,
        }))
      );

    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);
    return { selectedItems, totalPrice };
  };

  const onDeleteDiscountCode = () => {
    setDiscountCode(0);
    setUserData({ ...userData, discountCode: "" });
    setIsError({ ...isError, discountCode: "" });
    onFreeTicket(false);
    setFreeCode(false);
  };

  return {
    values,
    isError,
    freeCode,
    userForm,
    listSeats,
    isLoading,
    freeTicket,
    eventDetail,
    checkoutInit,
    contextHolder,
    listRefundable,
    paymentRequest,
    onDeleteDiscountCode,
    eventsDiscountCode,
    onCompletePurchase,
    onValueChangeUser,
    onCheckoutInit,
    onValuesChange,
    onSelectSeats,
    onRmSelectMap,
    onSelectMap,
    onCheckOut,
  };
};
