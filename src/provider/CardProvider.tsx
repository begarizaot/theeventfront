import { useState } from "react";
import { CardContext } from "../context/CardContext";

import { SuccessOrderModl } from "../screens/public/pages/BookTicketsPage/modals";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CardProvider = ({ children }: CheckoutProviderProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [freeTicket, setFreeTicket] = useState(false);
  const [valueOrder, setValueOrder] = useState("");

  const onShowSuccess = (open = true) => {
    setIsSuccess(open);
  };

  const onFreeTicket = (open = true) => {
    setFreeTicket(open);
  };

  const onValueOrder = (value: string) => {
    setValueOrder(value);
  };

  return (
    <CardContext.Provider
      value={{
        valueOrder,
        freeTicket,
        onShowSuccess,
        onValueOrder,
        onFreeTicket,
      }}
    >
      <SuccessOrderModl
        isOpen={isSuccess}
        onClose={() => onShowSuccess(false)}
      />
      {children}
    </CardContext.Provider>
  );
};
