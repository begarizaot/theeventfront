import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const useEventTickets = (dataReq: any) => {
  const [ticketData, setTicketData] = useState({});
  const [isNewTicket, setIsNewTicket] = useState(false);

  const showNewTicket = () => {
    setIsNewTicket(!isNewTicket);
  };

  const onNewTicket = () => {
    setTicketData({});
    showNewTicket();
  };

  const onUpdateTicket = (ev: any) => {
    setTicketData({
      ...ev,
      start_date: new Date(ev.start_date),
      end_date: new Date(ev.end_date),
    });
    showNewTicket();
  };

  const onDeleted = (ev: any) => {
    MySwal.fire({
      title: "are you sure?",
      text: "You will not be able to recover this ticket!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) dataReq.deleteTicket(ev.idTicket || ev.id);
    });
  };

  return {
    isNewTicket,
    ticketData,
    showNewTicket,
    onDeleted,
    onUpdateTicket,
    onNewTicket,
  };
};
