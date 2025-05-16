import { useEffect, useState } from "react";
import { getLocalStorage, useMoment } from "../../../../hooks";
import { getAdminEventDetail } from "../../../../store/thunks";

export const useEventDetails = () => {
  const [eventData, setEventData] = useState<any>({});
  const [isOrganizer, setIsOrganizer] = useState<any>(false);

  const userData = getLocalStorage("userData");
  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventData();
    onOrganizer();
  }, []);

  const getEventData = async () => {
    const { event_id } = eventShared;
    onSetEventData(event_id);

    const dataEvent = await getAdminEventDetail(event_id.id_event);
    onSetEventData(dataEvent);
  };

  const onSetEventData = (data: any) => {
    setEventData({
      ...data,
      location: data.event_locations_id.formatted_address,
      vicinity: data.event_locations_id.vicinity,
      startDate: useMoment(data.start_date).format("YYYY-MM-DD HH:mm a"),
      ticketTypes: data.event_tickets_ids.filter(
        (ticket: any) => !ticket.isTable
      ),
      tableTypes: data.event_tickets_ids.filter(
        (ticket: any) => ticket.isTable
      ),
    });
  };

  const onOrganizer = () => {
    setIsOrganizer(userData?.id == eventShared?.event_id?.users_id?.id);
  };

  return { eventData, isOrganizer };
};
