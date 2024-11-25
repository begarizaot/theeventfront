import { useEffect, useState } from "react";
import { AllEventsIntf } from "./intfAllEvents";

export const useAllEvents = () => {
  const [page, setPage] = useState(0);
  const [listEvents, setListEvents] = useState<AllEventsIntf | undefined>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setListEvents({
      data: [1, 2, 3, 4],
      pagination: { page: 1, pageSize: 10, pageCount: 10, total: 20 },
    });
  };

  const onPageChange = (event: any) => {
    setPage(event.first);
    // fetchEvents();
  };

  return { ...listEvents, page, onPageChange };
};
