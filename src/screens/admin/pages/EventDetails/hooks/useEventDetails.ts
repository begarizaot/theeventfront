import { useContext, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useEventId } from "../../../hooks";

import { AppDispatch, RootState } from "../../../../../store";
import {
  deleteTicketEvent,
  getEventDetailById,
  getListTicketTypeByEvent,
  postCreateTicketEvent,
  putUpdateEvent,
  putUpdateEventImage,
  putUpdateTicketEvent,
} from "../../../../../store/slices";
import { LoadingContext } from "../../../../../context";

export const useEventDetails = () => {
  const { showLoading } = useContext(LoadingContext);

  const { eventId } = useEventId();

  const errorRes = useRef<any>(null);

  const [dataEvent, setDataEvent] = useState({});

  const dispatch: AppDispatch = useDispatch();
  const { ticketTypes } = useSelector((state: RootState) => state.ticketType);

  useEffect(() => {
    eventId && fetchTicketTypes();
  }, [dispatch, eventId]);

  useEffect(() => {
    eventId && fetchEventDetails();
  }, [eventId]);

  const fetchTicketTypes = async () => {
    dispatch(getListTicketTypeByEvent(eventId));
  };

  const fetchEventDetails = async () => {
    showLoading(true);
    try {
      const res = await getEventDetailById(eventId);
      setDataEvent({
        ...res,
        start_date: new Date(res.start_date),
        end_date: new Date(res.end_date),
        event_category: res.event_category_id.id,
        event_age_restriction: res.event_age_restriction_id.id,
        imageUrl: res.image[0].url,
        mapCompl: res.map_id.labelCompl,
        map: res.map_id,
      });
      showLoading(false);
    } catch (error) {
      showLoading(false);
      onMessageError("Error fetching event details");
    }
  };

  const onChangeImage = async (img: any) => {
    showLoading(true);
    try {
      await putUpdateEventImage(eventId, img);
      showLoading(false);
    } catch (error) {
      onMessageError("Error updating image");
      showLoading(false);
    }
  };

  const onMessageError = (msg: string) => {
    errorRes.current.show({
      severity: "error",
      summary: "Error Message",
      detail: msg,
      life: 3000,
    });
  };

  const onCreateUpdateTicket = (ev: any) => {
    if (ev?.id) {
      onUpdateTicket(ev);
      return;
    }
    onCreateTicket(ev);
  };

  const onCreateTicket = async (ev: any) => {
    showLoading(true);
    try {
      await postCreateTicketEvent(eventId, ev);
      fetchTicketTypes();
      showLoading(false);
    } catch (error) {
      onMessageError("Error create ticket");
      showLoading(false);
    }
  };

  const onUpdateTicket = async (ev: any) => {
    showLoading(true);
    try {
      await putUpdateTicketEvent(eventId, ev);
      fetchTicketTypes();
      showLoading(false);
    } catch (error) {
      onMessageError("Error updating ticket");
      showLoading(false);
    }
  };

  const onDeleteTicket = async (ev: any) => {
    showLoading(true);
    try {
      await deleteTicketEvent(eventId, ev);
      fetchTicketTypes();
      showLoading(false);
    } catch (error) {
      onMessageError("Error deleting ticket");
      showLoading(false);
    }
  };

  const onCreateUpdateEvent = async (ev: any) => {
    showLoading(true);
    try {
      await putUpdateEvent(eventId, ev);
      fetchEventDetails();
      showLoading(false);
    } catch (error) {
      onMessageError("Error updating event");
      showLoading(false);
    }
  };

  return {
    dataEvent,
    ticktes: ticketTypes,
    errorRes,
    onCreateUpdateTicket,
    onDeleteTicket,
    onCreateUpdateEvent,
    onChangeImage,
  };
};
