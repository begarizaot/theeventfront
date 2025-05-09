import { useCallback } from "react";

export const useCapitalize = () => {
  const FirstLetter = useCallback((text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }, []);
  return { FirstLetter };
};
