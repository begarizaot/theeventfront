import { useContext } from "react";
import { SearchContext } from "../../context/Search";

export const useHome = () => {
  const { openSearch } = useContext(SearchContext);

  return { openSearch };
};
