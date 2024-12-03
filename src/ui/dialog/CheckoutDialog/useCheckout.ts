import { useEffect, useState } from "react";

export const useCheckout = (data:any) => {
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data])
  

  return { isCheckout, setIsCheckout };
};
