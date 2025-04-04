import { useEffect, useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';

import { dataListRefundable } from "../../../../data/listRefundable";

export const useBookTickets = () => {
  // const stripe = useStripe();
  const [checkoutInit, setCheckoutInit] = useState(1);
  const [listRefundable, setListRefundable] = useState<any[]>([]);

  useEffect(() => {
    fetchListRefundable();
  }, []);

  const fetchListRefundable = async () => {
    setListRefundable(dataListRefundable);
  };

  const onCheckoutInit = (value: number) => {
    setCheckoutInit(value);
  };

  return { checkoutInit, listRefundable, onCheckoutInit };
};
