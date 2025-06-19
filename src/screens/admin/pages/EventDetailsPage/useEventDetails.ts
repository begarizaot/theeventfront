import { message } from "antd";
import { useEffect, useState } from "react";
import { getLocalStorage, useMoment } from "../../../../hooks";
import {
  getAdminEventDetail,
  getTeamAccess,
  putUpdateEvent,
} from "../../../../store/thunks";

export const useEventDetails = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [eventData, setEventData] = useState<any>({});
  const [isOrganizer, setIsOrganizer] = useState<any>(false);
  const [loading, setLoading] = useState(false);

  const userData = getLocalStorage("userData");
  const eventShared = getLocalStorage("eventShared");

  useEffect(() => {
    getEventData();
    onOrganizer();
  }, []);

  const getEventData = async () => {
    const { id_event } = eventShared;
    onSetEventData(eventShared);

    const dataEvent = await getAdminEventDetail(id_event);
    onSetEventData(dataEvent);
  };

  const onSetEventData = (data: any) => {
    setEventData({
      ...data,
      location: data?.event_locations_id?.formatted_address,
      vicinity: data?.event_locations_id?.vicinity,
      startDate: useMoment(data?.start_date).format("YYYY-MM-DD hh:mm a"),
      ticketTypes: data?.event_tickets_ids?.filter(
        (ticket: any) => !ticket.isTable
      ),
      tableTypes: data?.event_tickets_ids?.filter(
        (ticket: any) => ticket.isTable
      ),
    });
  };

  const onOrganizer = async () => {
    setIsOrganizer(userData?.id == eventShared?.users_id?.id);
    const res = await getTeamAccess(eventShared?.id_event);
    setIsOrganizer(res);
  };

  const onPublichEvent = async () => {
    const { id_event } = eventShared;
    setLoading(true);
    try {
      await putUpdateEvent(id_event, {
        isVisible: !eventData.isVisible,
      });
      getEventData();
      messageApi.open({
        type: "success",
        content: `Event ${
          !eventData.isVisible ? "published" : "unpublished"
        } successfully`,
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error,
      });
    }
  };

  return { eventData, isOrganizer, contextHolder, loading, onPublichEvent };
};
