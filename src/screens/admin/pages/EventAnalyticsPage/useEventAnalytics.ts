import { useEffect, useState } from "react";
import { getAdminEventAnality } from "../../../../store/thunks";
import { getLocalStorage, useExportPdf } from "../../../../hooks";

export const useEventAnalytics = () => {
  const { handleDownloadPDF } = useExportPdf();
  const [dataAnalityc, setDataAnalityc] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventAnality();
  }, []);

  const getEventAnality = async () => {
    const { id_event } = eventShared;
    setIsLoading(true);
    try {
      const data = await getAdminEventAnality(id_event);
      setDataAnalityc(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setDataAnalityc({});
    }
  };

  return { isLoading, dataAnalityc, eventShared, handleDownloadPDF };
};
