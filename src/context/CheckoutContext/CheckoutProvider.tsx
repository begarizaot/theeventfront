import { useState } from "react";
import { CheckoutContext } from ".";
import { CheckoutDialog } from "../../ui";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [eventData, setEventData] = useState(null);

  const showCheckout = (ev?: any, free?: any) => {
    setIsCheckout(!isCheckout);
    ev?.id && setEventData(ev);
    setIsFree(free);
  };

  return (
    <CheckoutContext.Provider value={{ showCheckout, eventData, isCheckout }}>
      <CheckoutDialog
        freeTicket={isFree}
        visible={isCheckout}
        showVisible={showCheckout}
      />
      {children}
    </CheckoutContext.Provider>
  );
};
