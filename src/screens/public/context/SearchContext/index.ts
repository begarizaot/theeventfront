import { createContext } from "react";

interface SearchContextProps {
  showModal?: () => void;
}

export const SearchContext = createContext<SearchContextProps>({});
