import { Fees, SubTotalResult } from "./types";

export const calculateTotals = (tickets: any[], fees: Fees): SubTotalResult => {
  const subTotal = tickets.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const priceToCharge =
    (subTotal * (1 + fees?.desiredProfitMargin) + fees?.fixedFee) /
    (1 - fees?.percentageFee);
  const profitMargin = subTotal * (1 + fees?.desiredProfitMargin) - subTotal;
  const stripeFixed = fees?.fixedFee + priceToCharge * fees?.percentageFee;
  const price =
    subTotal === 0 ? 0 : Number((priceToCharge - subTotal).toFixed(2));

  return {
    subTotal,
    price,
    total: subTotal + price,
    profitMargin: subTotal === 0 ? 0 : Number(profitMargin.toFixed(2)),
    stripeFixed: subTotal === 0 ? 0 : Number(stripeFixed.toFixed(2)),
  };
};