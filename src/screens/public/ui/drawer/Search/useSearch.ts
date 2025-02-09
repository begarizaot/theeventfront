import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";

export const useSearch = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onGetAllEvents();
  }, []);

  const onGetAllEvents = async () => {
    setEvents([1, 2]);
  };

  const onClearSearch = () => {
    setSearch("");
    setLoading(false);
  };

  const onChangeSearch = (e: any) => {
    const text = e.target.value;
    setLoading(true);
    setSearch(text);
    onSearchEvent(text);
  };

  const onSearchEvent = useCallback(
    debounce((event) => {
      setLoading(false);
      console.log(event);
    }, 1000),
    []
  );

  return { events, search, loading, onClearSearch, onChangeSearch };
};
