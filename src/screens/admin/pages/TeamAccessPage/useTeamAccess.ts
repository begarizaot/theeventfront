import { message } from "antd";
import debounce from "lodash/debounce";

import { useCallback, useEffect, useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import {
  getListTeamAccess,
  putUpdateTeamAccess,
} from "../../../../store/thunks";

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
    fechDataTeamAccess();
  }, [page, search]);

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 800),
    []
  );

  const fechDataTeamAccess = async () => {
    const { event_id } = eventShared;
    setLoading(true);
    try {
      const data = await getListTeamAccess(event_id.id_event, {
        page,
        size: 10,
      });
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
      await putUpdateTeamAccess(event_id.id_event, data);
      setLoading(false);
      fechDataTeamAccess();
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
    fechDataTeamAccess();
  };

  return {
    dataTickes,
    sizePage,
    isLoading,
    eventDate: eventShared.event_id,
    loading,
    contextHolder,
    onPageChange,
    onRefresh,
    onUpdateActive,
    onDebouncedSearch,
  };
};
