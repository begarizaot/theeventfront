import { useState } from "react";
import { LoadingContext } from ".";
import { LoadingDialog } from "../../ui";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = (ev:any) => {
    setIsLoading(ev);
  };

  return (
    <LoadingContext.Provider value={{ showLoading }}>
      <LoadingDialog visible={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
};
