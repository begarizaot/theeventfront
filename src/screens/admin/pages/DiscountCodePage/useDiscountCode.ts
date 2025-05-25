import { message } from "antd";
import debounce from "lodash/debounce";

import { useCallback, useEffect, useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import {
  getListDiscountCode,
  putUpdateDiscountCode,
} from "../../../../store/thunks";

export const useDiscountCode = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [dataTickes, setDataTickes] = useState<any[]>([]);
  const [sizePage, setSizePage] = useState<any>({});

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    fechDataDiscountCode();
  }, [page, search]);

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 800),
    []
  );

  const fechDataDiscountCode = async () => {
    const { event_id } = eventShared;
    setLoading(true);
    try {
      const data = await getListDiscountCode(
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

  const onUpdateActive = async (data: any) => {
    try {
      setLoading(true);
      const { event_id } = eventShared;
      await putUpdateDiscountCode(event_id.id_event, data);
      setLoading(false);
      fechDataDiscountCode();
    } catch (error: any) {
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
    fechDataDiscountCode();
  };

  return {
    dataTickes,
    sizePage,
    eventDate: eventShared.event_id,
    loading,
    contextHolder,
    onPageChange,
    onRefresh,
    onUpdateActive,
    onDebouncedSearch,
  };
};
