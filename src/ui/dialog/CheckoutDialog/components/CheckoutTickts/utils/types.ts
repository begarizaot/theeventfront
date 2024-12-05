export interface Fees {
  fixedFee: number;
  percentageFee: number;
  desiredProfitMargin: number;
}

export interface SubTotalResult {
  subTotal: number;
  price: number;
  total: number;
  profitMargin: number;
  stripeFixed: number;
}
