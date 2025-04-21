import { useMemo } from "react";

export function usePriceRangeText(tickets: any[]) {
  const rangeText = useMemo(() => {
    if (!tickets.length) return "$0";

    const prices = tickets.map((ticket) => ticket.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return min === max ? `$${min}` : `$${min} - ${max}`;
  }, [tickets]);

  return rangeText;
}
