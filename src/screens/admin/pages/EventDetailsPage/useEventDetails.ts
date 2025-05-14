import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../../context";
import { getLocalStorage, useMoment } from "../../../../hooks";

export const useEventDetails = () => {
  const { adminDate } = useContext(AdminContext);

  const [eventData, setEventData] = useState<any>({});
  const [isOrganizer, setIsOrganizer] = useState<any>(false);

  const userData = getLocalStorage("userData");
  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventData();
    onOrganizer();
  }, []);

  const getEventData = () => {
    const { event_id } = eventShared;
    setEventData({
      ...event_id,
      location: event_id.event_locations_id.formatted_address,
      vicinity: event_id.event_locations_id.vicinity,
      startDate: useMoment(event_id.start_date).format("YYYY-MM-DD HH:mm a"),
      ticketTypes: event_id.event_tickets_ids.filter(
        (ticket: any) => !ticket.isTable
      ),
      tableTypes: event_id.event_tickets_ids.filter(
        (ticket: any) => ticket.isTable
      ),
    });
  };

  const onOrganizer = () => {
    setIsOrganizer(userData?.id == eventShared?.event_id?.users_id?.id);
  };

  return { eventData, isOrganizer };
};
