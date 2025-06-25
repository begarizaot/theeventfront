import { useCallback, useEffect, useState } from "react";
import { getEventAllPage } from "../../../../store/thunks";
import debounce from "lodash/debounce";

export const useSearch = () => {
  const [listEvents, setlistEvents] = useState<any>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchListEvents();
  }, [search, page]);

  const fetchListEvents = async () => {
    try {
      setLoading(true);
      const resEvents = await getEventAllPage(
        {
          page: page,
          size: 10,
        },
        search
      );
      setlistEvents(resEvents.data);
      setSizePage(resEvents.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
      setPage(1);
    }, 800),
    []
  );

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return {
    page,
    sizePage,
    loading,
    listEvents,
    onPageChange,
    onDebouncedSearch,
  };
};
