import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListTicketTypeByEvent } from "../../../../../../store/slices";
import { AppDispatch, RootState } from "../../../../../../store";

export const useSelectTickets = (req: any) => {
  const dispatch: AppDispatch = useDispatch();
  const { ticketTypes, loading } = useSelector(
    (state: RootState) => state.ticketType
  );

  const [ticketsSelect, setTicketsSelect] = useState<any>([]);

  useEffect(() => {
    dispatch(getListTicketTypeByEvent(req.id_event) as any);
  }, [dispatch, req.id_event]);

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

  return { ticketTypes, loading, ticketsSelect, onSelectedTicket };
};
