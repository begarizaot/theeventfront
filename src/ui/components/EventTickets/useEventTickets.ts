import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const useEventTickets = () => {
  const [isNewTicket, setIsNewTicket] = useState(false);

  const showNewTicket = () => {
    setIsNewTicket(!isNewTicket);
  };

  const onDeleted = () => {
    console.log('object');
    MySwal.fire({
      title: "are you sure?",
      text: "You will not be able to recover this ticket!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) console.log("object");
    });
  };

  return { isNewTicket, showNewTicket,onDeleted };
};
