import { useEffect, useState } from "react";
import { getAdminEventAnality } from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";

export const useEventAnalytics = () => {
  const [dataAnalityc, setDataAnalityc] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventAnality();
  }, []);

  const getEventAnality = async () => {
    const { event_id } = eventShared;
    setIsLoading(true);
    try {
      const data = await getAdminEventAnality(event_id.id_event);
      setDataAnalityc(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setDataAnalityc({});
    }
  };

  return { isLoading, dataAnalityc };
};
