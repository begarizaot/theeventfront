import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingContext } from "../../../../../../context";

import {
  getListTicketTypeByEvent,
  postValidateTicketEvent,
} from "../../../../../../store/slices";
import { AppDispatch, RootState } from "../../../../../../store";

export const useSelectTickets = ({ data, onCheckout, freeTicket }: any) => {
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

  const errorRes = useRef<any>(null);

  const dispatch: AppDispatch = useDispatch();
  const { ticketTypes, loading } = useSelector(
    (state: RootState) => state.ticketType
  );

  const [ticketsSelect, setTicketsSelect] = useState<any>([]);

  useEffect(() => {
    fetchTicketTypes();
  }, [dispatch, data.id_event]);

  const fetchTicketTypes = async () => {
    dispatch(getListTicketTypeByEvent(data.id_event));
  };

  const onSelectedTicket = (ev: any) => {
    const index = ticketsSelect.findIndex((t: any) => t.id === ev.id);
    if (index === -1) {
      setTicketsSelect([...ticketsSelect, ev]);
    } else {
      ev.quantity == 0
        ? setTicketsSelect([
            ...ticketsSelect.filter((t: any) => t.id !== ev.id),
          ])
        : setTicketsSelect([
            ...ticketsSelect.map((t: any) =>
              t.id === ev.id ? { ...t, quantity: ev.quantity } : t
            ),
          ]);
    }
  };

  const onCheckoutRes = async () => {
    if (freeTicket) {
      onCheckout(ticketsSelect);
      return;
    }

    showLoading(true);
    try {
      await postValidateTicketEvent(data.id_event, ticketsSelect);
      hiddenLoading();
      onCheckout(ticketsSelect);
    } catch (error) {
      hiddenLoading();
      fetchTicketTypes();
      errorRes.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
        life: 3000,
      });
    }
  };

  return {
    ticketTypes,
    loading,
    ticketsSelect,
    errorRes,
    onSelectedTicket,
    onCheckoutRes,
  };
};
