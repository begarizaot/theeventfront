import { useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import { getAllOrdersList } from "../../../../store/thunks";
import { message } from "antd";
import { generateExcelFromOrders } from "./utils";

export const useMarcketing = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const eventShared = getLocalStorage("eventShared");

  const doDownload = (url: string, fileName: string) => {
    const a = document.createElement("a");
    a.download = fileName;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadSvgQRCode = () => {
    const { slug } = eventShared.event_id;
    const svg = document
      .getElementById("myMarcketing")
      ?.querySelector<SVGElement>("svg");
    const svgData = new XMLSerializer().serializeToString(svg!);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    doDownload(url, `${slug}-qrcode.svg`);
  };

  const downloadExcel = async () => {
    const { id_event, slug } = eventShared.event_id;
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
    eventDate: eventShared.event_id,
    contextHolder,
    loading,
    downloadSvgQRCode,
    downloadExcel,
  };
};
