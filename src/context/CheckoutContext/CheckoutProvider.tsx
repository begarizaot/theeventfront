import { useState } from "react";
import { CheckoutContext } from ".";
import { CheckoutDialog } from "../../ui";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [eventData, setEventData] = useState(false);

  const showCheckout = (ev?: any) => {
    setIsCheckout(!isCheckout);
    setEventData(ev);
  };

  return (
    <CheckoutContext.Provider value={{ showCheckout }}>
      <CheckoutDialog
        data={eventData}
        visible={isCheckout}
        showVisible={showCheckout}
      />
      {children}
    </CheckoutContext.Provider>
  );
};
