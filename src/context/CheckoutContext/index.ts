import { createContext } from "react";

interface CheckoutContextProps {
  eventData: any;
  showCheckout: (ev: any) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>({
  eventData: {},
  showCheckout: () => {},
});
