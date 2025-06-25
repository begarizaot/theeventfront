export interface ServiceFeeRes {
  data: ServiceFeeData[];
  status: boolean;
}

export interface ServiceFeeData {
  id: number;
  fixedFee: number;
  refundable: number;
  percentageFee: number;
  desiredProfit: number;
  minRefundable: number;
}
