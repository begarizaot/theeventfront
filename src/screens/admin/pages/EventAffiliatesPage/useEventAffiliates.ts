import { message } from "antd";
import debounce from "lodash/debounce";
import copy from "copy-to-clipboard";

import { useCallback, useEffect, useState } from "react";
import { getLocalStorage, useDownloadQr } from "../../../../hooks";
import {
  getListEventAffiliate,
  putUpdateEventAffiliate,
} from "../../../../store/thunks";

const { VITE_PUBLIC_URL } = import.meta.env;

export const useEventAffiliates = () => {
  const { downloadQRCode } = useDownloadQr();

  const [messageApi, contextHolder] = message.useMessage();

  const [dataTickes, setDataTickes] = useState<any[]>([]);
  const [sizePage, setSizePage] = useState<any>({});
  const [idAffiliate, setIdAffiliate] = useState("");

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    fechDataEventAffiliate();
  }, [page, search]);

  const onDebouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 800),
    []
  );

  const fechDataEventAffiliate = async () => {
    const { id_event } = eventShared;
    setLoading(true);
    try {
      const data = await getListEventAffiliate(
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

  const onUpdateActive = async (data: any) => {
    try {
      setLoading(true);
      const { id_event } = eventShared;
      await putUpdateEventAffiliate(id_event, data);
      setLoading(false);
      fechDataEventAffiliate();
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
    fechDataEventAffiliate();
  };

  const downloadSvgQRCode = (slug: any) => {
    setIdAffiliate(slug);
    setTimeout(() => {
      downloadQRCode({ id: "myAffiliate", slug: slug });
    }, 100);
  };

  const copyAffiliateLink = (slug: string) => {
    const link = `${VITE_PUBLIC_URL}/event/${eventShared.id_event}?aff=${slug}`;
    copy(link);
    messageApi.open({
      type: "success",
      content: "Affiliate link copied!",
    });
  };

  return {
    dataTickes,
    sizePage,
    eventDate: eventShared,
    loading,
    contextHolder,
    idAffiliate,
    onPageChange,
    onRefresh,
    onUpdateActive,
    onDebouncedSearch,
    downloadSvgQRCode,
    copyAffiliateLink,
  };
};
