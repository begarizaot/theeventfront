import { createContext } from "react";
import { CheckoutContextProps } from "./types";

export const CheckoutContext = createContext<CheckoutContextProps>({
  onShowCheckout: () => {},
});
