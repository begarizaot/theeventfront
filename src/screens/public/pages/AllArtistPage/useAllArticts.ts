import { useEffect, useState } from "react";
import { getArtistAllPage } from "../../../../store/thunks";

export const useAllArticts = () => {
  const [listArticts, setlistArticts] = useState<any>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchListArticts();
  }, [page]);

  const fetchListArticts = async () => {
    try {
      setLoading(true);
      const resEvents = await getArtistAllPage();
      setlistArticts(resEvents.data);
      setSizePage(resEvents.pagination);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return { page, sizePage, loading, listArticts, onPageChange };
};
