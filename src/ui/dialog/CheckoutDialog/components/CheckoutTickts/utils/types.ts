export interface Fees {
  fixedFee: number;
  percentageFee: number;
  desiredProfitMargin: number;
}

export interface SubTotalResult {
  subTotal: number;
  price: number;
  total: number;
  serviceFee: number;
  processingFee: number;
}
