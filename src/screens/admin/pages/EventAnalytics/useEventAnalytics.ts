import { useEffect, useState } from "react";
import { getAdminEventAnality } from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";

export const useEventAnalytics = () => {
  const [dataAnalityc, setDataAnalityc] = useState<any>({});

  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventAnality();
  }, []);

  const getEventAnality = async () => {
    const { event_id } = eventShared;
    const data = await getAdminEventAnality(event_id.id_event);
    console.log(data);
    setDataAnalityc(data);
  };

  return { dataAnalityc };
};
