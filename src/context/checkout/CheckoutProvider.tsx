import { useState } from "react";
import { CheckoutContext } from ".";
import { CheckoutModal } from "../../ui/mod";

interface CheckoutProviderProps {
  children: React.ReactNode;
}

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [isCheckout, setIsCheckout] = useState(true);

  const onShowCheckout = (status: boolean) => {
    onHiddenAll();
    setIsCheckout(status);
  };

  const onHiddenAll = () => {
    setIsCheckout(false);
  };

  return (
    <CheckoutContext.Provider value={{ onShowCheckout }}>
      <CheckoutModal
        visible={isCheckout}
        onClose={() => onShowCheckout(false)}
      />
      {children}
    </CheckoutContext.Provider>
  );
};
