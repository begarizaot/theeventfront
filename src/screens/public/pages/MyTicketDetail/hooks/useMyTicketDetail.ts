import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { getTicketDetail } from "../../../../../store/slices";

export const useMyTicketDetail = () => {
  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const { selectedTicket, loading } = useSelector(
    (state: RootState) => state.ticket
  );

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, [dispatch, id]);

  const [isQr, setIsQr] = useState(false);
  const [dataQr, setDataQr] = useState([]);

  const showQr = () => {
    setIsQr(!isQr);
  };

  const onTicketsQr = (ev: any) => {
    const res = selectedTicket?.listTickets?.filter(
      (item: any) => item.ticket_type_id.id === ev.id
    );
    setDataQr(res);
    setIsQr(true);
  };

  return { isQr, dataQr, selectedTicket, loading, showQr, onTicketsQr };
};
