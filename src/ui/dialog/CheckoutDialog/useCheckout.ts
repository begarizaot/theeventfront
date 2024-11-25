import { useState } from "react";

export const useCheckout = () => {
  const [isCheckout, setIsCheckout] = useState(false);

  return { isCheckout, setIsCheckout };
};
