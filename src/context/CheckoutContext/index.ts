import { createContext } from "react";

interface CheckoutContextProps {
  showCheckout: (ev:any) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>({
  showCheckout: () => {},
});
