import { useState } from "react";

export const useMyTicketDetail = () => {
  const [isQr, setIsQr] = useState(false);

  const showQr = () => {
    setIsQr(!isQr);
  };

  const onTicketsQr = () => {
    setIsQr(true);
  };

  return { isQr, showQr, onTicketsQr };
};
