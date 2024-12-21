import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postCreateEvent,
  putUpdateEventImage,
} from "../../../../../store/slices";
import { LoadingContext } from "../../../../../context";

export const useCreateEvent = () => {
  const navigate = useNavigate();
  const { showLoading } = useContext(LoadingContext);

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
      showLoading(true);
      const res = await postCreateEvent({ data, ticktes });
      await putUpdateEventImage(res.data, data.image);
      showLoading(false);
      navigate(`/admin/${res.data}/analytics`, { replace: true });
    } catch (error) {
      showLoading(false);
    }
  };

  return { ticktes, onCreateUpdateTicket, createUpdateEvent, onRemoveTicket };
};
