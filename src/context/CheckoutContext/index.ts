import { createContext } from "react";

interface CheckoutContextProps {
  showCheckout: () => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>({
  showCheckout: () => {},
});
