import { memo } from "react";
import { NumberFormat } from "../../../../../../helpers";

interface FromProps {
  min: any;
  max: any;
}

export const FromUi = memo(({ max = 0, min = 0 }: FromProps) => {
  return (
    <div className="flex align-items-center gap-2 text-xl">
      <span className="text-sm lg:text-base">From</span>
      <span className="sm:text-lg lg:text-base">
        ${NumberFormat(min)} {max > 0 && <span> - ${NumberFormat(max)}</span>}
      </span>
    </div>
  );
});
