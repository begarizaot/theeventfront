import { useState } from "react";
import { CardContext } from "../context/CardContext";

import { SuccessOrderModl } from "../screens/public/pages/BookTicketsPage/modals";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CardProvider = ({ children }: CheckoutProviderProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const onShowSuccess = (open = true) => {
    setIsSuccess(open);
  };

  return (
    <CardContext.Provider value={{ onShowSuccess }}>
      <SuccessOrderModl
        isOpen={isSuccess}
        onClose={() => onShowSuccess(false)}
      />
      {children}
    </CardContext.Provider>
  );
};
