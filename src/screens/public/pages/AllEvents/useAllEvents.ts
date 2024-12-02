import { useEffect, useState } from "react";
import { useEventsListPages } from "../../../../hooks";

export const useAllEvents = () => {
  const { fetchEvents, events, isLoading, pagination } = useEventsListPages();
  const [pages, setPages] = useState<any>({});

  useEffect(() => {
    fetchEvents({ size: 6, page: (pages?.page || 0) + 1 });
  }, [pages.page]);

  const onPageChange = (event: any) => {
    setPages(event);
  };

  return { onPageChange, events, isLoading, pagination, pages };
};
