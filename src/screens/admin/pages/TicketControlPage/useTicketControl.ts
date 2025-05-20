import { message } from "antd";
import debounce from "lodash/debounce";

import { useCallback, useEffect, useState } from "react";
import {
  getAllOrders,
  getRefundOrder,
  getSendMail,
} from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";

export const useTicketControl = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [dataTickes, setDataTickes] = useState<any[]>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [isLoading, setIsLoading] = useState(false);

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
    const { event_id } = eventShared;
    setLoading(true);
    try {
      const data = await getAllOrders(
        event_id.id_event,
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

  const onRefundOrder = async (orderId: any) => {
    try {
      setIsLoading(true);
      const { event_id } = eventShared;
      await getRefundOrder(event_id.id_event, orderId);
      setIsLoading(false);
      fechDataTickes();
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onSendMail = async (orderId: any) => {
    try {
      setIsLoading(true);
      await getSendMail(orderId);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return {
    dataTickes,
    sizePage,
    isLoading,
    eventDate: eventShared.event_id,
    loading,
    contextHolder,
    onPageChange,
    onRefundOrder,
    onSendMail,
    onDebouncedSearch,
  };
};
