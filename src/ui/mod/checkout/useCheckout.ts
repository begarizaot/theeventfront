import { useState } from "react";

export const useCheckout = () => {
  const [view, setView] = useState("select");

  const onShowView = (view: string) => {
    setView(view);
  };

  const onHiddenAll = () => {
    setView("select");
  };

  return { view, onShowView, onHiddenAll };
};
