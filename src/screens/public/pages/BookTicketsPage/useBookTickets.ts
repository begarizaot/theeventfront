import { useContext, useEffect, useState } from "react";

import { dataListRefundable } from "../../../../data/listRefundable";
import { CardContext } from "../../../../context";

export const useBookTickets = () => {
  const { onShowSuccess } = useContext(CardContext);

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

  const onCheckOut = async () => {
    onShowSuccess();
  };

  return { checkoutInit, listRefundable, onCheckoutInit, onCheckOut };
};
