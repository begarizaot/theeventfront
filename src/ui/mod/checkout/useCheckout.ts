import { useState } from "react";

export const useCheckout = () => {
  const [view, setView] = useState<"select" | "checkout">("select");
  const [selectTicket, setSelectTicket] = useState<any[]>([]);

  const onShowView = (view: any) => {
    setView(view);
  };

  const onHiddenAll = () => {
    setView("select");
  };

  const onCheckTicket = (ticket: any) => {
    setSelectTicket(ticket);
    setView("checkout");
  };

  return { view, selectTicket, onShowView, onHiddenAll, onCheckTicket };
};
