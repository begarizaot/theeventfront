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
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

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
    getEventDetailById(eventId)
      .then((res) => {
        setDataEvent({
          ...res,
          start_date: new Date(res.start_date),
          end_date: new Date(res.end_date),
          event_category: res.event_category_id.id,
          event_age_restriction: res.event_age_restriction_id.id,
          imageUrl: res?.image ? res?.image[0]?.url : "",
          mapCompl: res.map_id.labelCompl,
          map: res.map_id,
        });
      })
      .catch(() => {
        onMessageError("Error fetching event details");
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const onChangeImage = async (img: any) => {
    showLoading(true);
    putUpdateEventImage(eventId, img)
      .catch(() => {
        onMessageError("Error updating image");
      })
      .finally(() => {
        hiddenLoading();
      });
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
    postCreateTicketEvent(eventId, ev)
      .then(() => {
        fetchTicketTypes();
      })
      .catch(() => {
        onMessageError("Error create ticket");
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const onUpdateTicket = async (ev: any) => {
    showLoading(true);
    putUpdateTicketEvent(eventId, ev)
      .then(() => {
        fetchTicketTypes();
      })
      .catch(() => {
        onMessageError("Error updating ticket");
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const onDeleteTicket = async (ev: any) => {
    showLoading(true);
    deleteTicketEvent(eventId, ev)
      .then(() => {
        fetchTicketTypes();
      })
      .catch(() => {
        onMessageError("Error deleting ticket");
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  const onCreateUpdateEvent = async (ev: any) => {
    showLoading(true);
    putUpdateEvent(eventId, ev)
      .then(() => {
        fetchEventDetails();
      })
      .catch(() => {
        onMessageError("Error updating event");
      })
      .finally(() => {
        hiddenLoading();
      });
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
