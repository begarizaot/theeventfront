import { createContext } from "react";

interface LoadingContextProps {
  showLoading: (ev?: any) => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
  showLoading: () => {},
});
