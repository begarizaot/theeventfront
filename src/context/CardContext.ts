import { createContext } from "react";

interface CardContextProps {
  valueOrder: string;
  freeTicket: boolean;
  onFreeTicket: (open?: boolean) => void;
  onValueOrder: (value: any) => void;
  onShowSuccess: (open?: boolean) => void;
}

export const CardContext = createContext<CardContextProps>({
  onShowSuccess: () => {},
  onValueOrder: () => {},
  onFreeTicket: () => {},
  valueOrder: "",
  freeTicket: false,
});
