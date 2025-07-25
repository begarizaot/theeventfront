import { useEffect, useState } from "react";
import { getEventAllPage } from "../../../../store/thunks";
import { useParams } from "react-router-dom";

export const useAllEvents = () => {
  const { category } = useParams();
  const [listEvents, setlistEvents] = useState<any>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchListEvents();
  }, [page]);

  const fetchListEvents = async () => {
    try {
      setLoading(true);
      const resEvents = await getEventAllPage(
        {
          page: page,
          size: 10,
        },
        "",
        category ? { category } : null
      );
      setlistEvents(resEvents.data);
      setSizePage(resEvents.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return { page, sizePage, loading, listEvents, onPageChange };
};
