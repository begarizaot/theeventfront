import { useState } from "react";
import { LoadingContext } from ".";
import { LoadingDialog } from "../../ui";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = (ev: any) => {
    setIsLoading(ev);
  };

  const hiddenLoading = () => {
    setTimeout(() => {
      showLoading(false);
    }, 10);
  };

  return (
    <LoadingContext.Provider value={{ showLoading, hiddenLoading }}>
      <LoadingDialog visible={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
};
