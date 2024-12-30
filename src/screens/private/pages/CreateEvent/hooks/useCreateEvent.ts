import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  postCreateEvent,
  putUpdateEventImage,
} from "../../../../../store/slices";
import { LoadingContext } from "../../../../../context";

export const useCreateEvent = () => {
  const navigate = useNavigate();
  const { showLoading, hiddenLoading } = useContext(LoadingContext);

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
    showLoading(true);
    postCreateEvent({ data, ticktes })
      .then(async (res) => {
        await putUpdateEventImage(res.data, data.image);
        navigate(`/admin/${res.data}/ticketControl`, { replace: true });
      })
      .finally(() => {
        hiddenLoading();
      });
  };

  return { ticktes, onCreateUpdateTicket, createUpdateEvent, onRemoveTicket };
};
