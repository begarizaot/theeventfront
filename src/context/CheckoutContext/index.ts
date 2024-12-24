import { createContext } from "react";

interface CheckoutContextProps {
  eventData: any;
  isCheckout: any;
  showCheckout: (ev: any, free?: any) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>({
  isCheckout: false,
  eventData: {},
  showCheckout: () => {},
});
