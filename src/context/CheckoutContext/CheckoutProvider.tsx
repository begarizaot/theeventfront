import { useState } from "react";
import { CheckoutContext } from ".";
import { CheckoutDialog } from "../../ui";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const showCheckout = () => {
    setIsCheckout(!isCheckout);
  };

  return (
    <CheckoutContext.Provider value={{ showCheckout }}>
      <CheckoutDialog visible={isCheckout} showVisible={showCheckout} />
      {children}
    </CheckoutContext.Provider>
  );
};
