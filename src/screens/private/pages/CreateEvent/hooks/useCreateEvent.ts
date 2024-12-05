import { useState } from "react";
import {
  postCreateEvent,
  putUpdateEventImage,
} from "../../../../../store/slices";

export const useCreateEvent = () => {
  const [ticktes, setTicktes] = useState<any>([]);

  const onCreateUpdateTicket = (ev: any) => {
    if (ev.idTicket) {
      setTicktes(
        ticktes.map((t: any) => (t.idTicket === ev.idTicket ? ev : t))
      );
      return;
    }
    setTicktes([...ticktes, { ...ev, idTicket: ticktes.length + 1 }]);
  };

  const onRemoveTicket = (id: number) => {
    setTicktes(ticktes.filter((t: any) => t.idTicket !== id));
  };

  const createUpdateEvent = async (data: any) => {
    try {
      const res = await postCreateEvent({ data, ticktes });
      await putUpdateEventImage(res.data, data.image);
    } catch (error) {
      console.log(error);
    }
  };

  return { ticktes, onCreateUpdateTicket, createUpdateEvent, onRemoveTicket };
};
