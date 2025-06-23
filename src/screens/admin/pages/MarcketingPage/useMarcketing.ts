import { useState } from "react";
import { getLocalStorage, useDownloadQr } from "../../../../hooks";
import { getAllOrdersList } from "../../../../store/thunks";
import { message } from "antd";
import { generateExcelFromOrders } from "./utils";

export const useMarcketing = () => {
  const { downloadQRCode } = useDownloadQr();

  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const eventShared = getLocalStorage("eventShared");

  const downloadSvgQRCode = () => {
    const { slug } = eventShared;
    downloadQRCode({ id: "myMarcketing", slug: slug });
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
    eventDate: eventShared,
    contextHolder,
    loading,
    downloadSvgQRCode,
    downloadExcel,
  };
};
