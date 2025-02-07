import { createContext } from "react";

interface SearchContextProps {
  openSearch?: () => void;
  hideSearch?: () => void;
}

export const SearchContext = createContext<SearchContextProps>({});
