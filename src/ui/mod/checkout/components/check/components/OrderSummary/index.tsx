import { TotalValuesComp } from "../TotalValues";
import { TermAndPrivacy } from "../TermAndPrivacy";

export const OrderSummaryComp = () => {
  return (
    <>
      <h2 className="text-lg font-bold">Order Summary</h2>
      <TotalValuesComp />
      <TermAndPrivacy />
    </>
  );
};
