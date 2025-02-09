import { useState } from "react";
import { SearchContext } from "./SearchContex";
import { SearchDrawer } from "../../ui/drawer";

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [isModal, setIsModal] = useState(false);

  const openSearch = () => {
    setIsModal(true);
  };

  const hideSearch = () => {
    setIsModal(false);
  };

  return (
    <SearchContext.Provider value={{ openSearch, hideSearch }}>
      <SearchDrawer visible={isModal} onClose={hideSearch} />
      {children}
    </SearchContext.Provider>
  );
};
