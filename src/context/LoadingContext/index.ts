import { createContext } from "react";

interface LoadingContextProps {
  showLoading: (ev?: any) => void;
  hiddenLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
  showLoading: () => {},
  hiddenLoading: () => {},
});
