import { createContext } from "react";

interface CardContextProps {
  valueOrder: string;
  onValueOrder: (value: any) => void;
  onShowSuccess: (open?: boolean) => void;
}

export const CardContext = createContext<CardContextProps>({
  onShowSuccess: () => {},
  onValueOrder: () => {},
  valueOrder: "",
});
