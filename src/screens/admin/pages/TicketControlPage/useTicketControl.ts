import { message } from "antd";
import debounce from "lodash/debounce";

import { useCallback, useEffect, useState } from "react";
import {
  getAllOrders,
  getAllOrdersList,
  getRefundOrder,
  getSendMail,
} from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";
import { generateExcelFromOrders } from "../MarcketingPage/utils";

export const useTeamAccess = () => {
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
    const { id_event } = eventShared;
    setLoading(true);
    try {
      const data = await getAllOrders(
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

  const onRefundOrder = async (orderId: any) => {
    try {
      setIsLoading(true);
      const { id_event } = eventShared;
      await getRefundOrder(id_event, orderId);
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

  const onRefresh = () => {
    fechDataTickes();
  };

  const downloadExcel = async () => {
    const { id_event, slug } = eventShared;
    setLoading(true);
    try {
      const data = await getAllOrdersList(id_event);
      generateExcelFromOrders(data, slug);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  return {
    dataTickes,
    sizePage,
    isLoading,
    eventDate: eventShared,
    loading,
    contextHolder,
    onPageChange,
    onRefundOrder,
    onSendMail,
    onRefresh,
    onDebouncedSearch,
    downloadExcel,
  };
};
