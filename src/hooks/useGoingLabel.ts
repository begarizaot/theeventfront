import { useMemo } from "react";

const formatNumber = (value: number): string => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1).replace(".0", "")}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1).replace(".0", "")}k`;
  }
  return `${value}`;
};

export const useGoingLabel = (value: number) => {
  const label = useMemo(() => {
    return `${formatNumber(value)} Going`;
  }, [value]);

  return label;
};
