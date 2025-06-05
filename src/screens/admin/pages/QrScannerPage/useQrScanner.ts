import { message } from "antd";
import { useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import {
  getScannerTicket,
  getTicketData,
} from "../../../../store/thunks/TicketsThunks";

export const useQrScanner = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [stopScanner, setStopScanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setorderData] = useState<any>({});

  const eventShared = getLocalStorage("eventShared");

  const onScannerOrder = async (result: string) => {
    const { id_event } = eventShared;
    setIsLoading(true);
    setStopScanner(true);
    try {
      const dataRes = await getTicketData(id_event, result);
      setorderData(dataRes);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
        duration: 6,
      });
    }
  };

  const onContinueOrder = async () => {
    const { id_event } = eventShared;
    setIsLoading(true);
    try {
      const dataRes = await getScannerTicket(id_event, orderData.id_ticket);
      setIsLoading(false);
      messageApi.open({
        type: "success",
        content: dataRes,
      });
      onClearOrder();
    } catch (error: any) {
      setIsLoading(false);
      messageApi.open({
        type: "error",
        content: error,
        duration: 6,
      });
    }
  };

  const onClearOrder = () => {
    setorderData({});
    setStopScanner(false);
  };

  return {
    isLoading,
    orderData,
    stopScanner,
    contextHolder,
    eventDate: eventShared,
    onContinueOrder,
    onScannerOrder,
    onClearOrder,
  };
};
