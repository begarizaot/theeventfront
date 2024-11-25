import { useState } from "react";
import { SearchContext } from ".";
import { SearchSidebar } from "../../ui";

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(!isModal);
  };

  return (
    <SearchContext.Provider value={{ showModal }}>
      <SearchSidebar visible={isModal} showVisible={showModal} />
      {children}
    </SearchContext.Provider>
  );
};
