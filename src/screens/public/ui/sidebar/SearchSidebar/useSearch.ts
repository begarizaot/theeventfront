import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { AppDispatch, RootState } from "../../../../../store";
import { getEventSearch, searchEventsClear } from "../../../../../store/slices";

export const useSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const { searchLoading, searchResults } = useSelector(
    (state: RootState) => state.events
  );

  const [search, setSearch] = useState("");

  const onChange = (e: any) => {
    setSearch(e.target.value);
    onSearchEvent(e.target.value);
  };

  const onClearSearch = () => {
    setSearch("");
    dispatch(searchEventsClear());
  };

  const onSearchEvent = useCallback(
    debounce((event) => {
      event.length > 2
        ? dispatch(getEventSearch(event))
        : dispatch(searchEventsClear());
    }, 500),
    []
  );

  return {
    search,
    loading: searchLoading,
    events: searchResults,
    onChange,
    onClearSearch,
  };
};
