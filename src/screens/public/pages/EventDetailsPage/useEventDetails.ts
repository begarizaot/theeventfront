import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";

export const useEventDetails = () => {
  const { id } = useParams();
  const [eventDatail, setEventDatail] = useState<any>({});
  const [listOtherEvent, setlistOtherEvent] = useState<any>([]);

  const defaultProps = {
    center: {
      lat: 4.710989,
      lng: -74.072092,
    },
    zoom: 11,
  };

  useEffect(() => {
    setEventDatail(dataListEvents[0]);
    fetchListEvents();
  }, []);

  const fetchListEvents = async () => {
    setlistOtherEvent(dataListEvents);
  };

  return { eventDatail, defaultProps, listOtherEvent };
};
