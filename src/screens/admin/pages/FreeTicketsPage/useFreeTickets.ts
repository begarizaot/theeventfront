import { message } from "antd";
import debounce from "lodash/debounce";

import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllOrdersFree } from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";
import { CardContext } from "../../../../context";

export const useFreeTickets = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { onFreeTicket } = useContext(CardContext);

  const [dataTickes, setDataTickes] = useState<any[]>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    fechDataTickes();
  }, [page, search]);

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 800),
    []
  );

  const fechDataTickes = async () => {
    const { id_event } = eventShared;
    setLoading(true);
    try {
      const data = await getAllOrdersFree(
        id_event,
        {
          page,
          size: 10,
        },
        search
      );
      setDataTickes(data.data);
      setSizePage(data.pagination);
      setLoading(false);
    } catch (error: any) {
      setDataTickes([]);
      setSizePage({});
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const onRefresh = () => {
    fechDataTickes();
  };

  const onCreateFreeTicket = async () => {
    const { id_event } = eventShared;
    onFreeTicket(true);
    navigate(`/book-tickets/${id_event}`);
  };

  return {
    dataTickes,
    sizePage,
    eventDate: eventShared,
    loading,
    contextHolder,
    onPageChange,
    onRefresh,
    onDebouncedSearch,
    onCreateFreeTicket,
  };
};
