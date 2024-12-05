import { CreateEventComp } from "../../../../ui";
import { useCreateEvent } from "./hooks/useCreateEvent";

export const CreateEventPage = () => {
  const { onCreateUpdateTicket, createUpdateEvent, onRemoveTicket, ticktes } =
    useCreateEvent();

  return (
    <CreateEventComp
      ticktes={ticktes}
      createUpdateTicket={onCreateUpdateTicket}
      createUpdateEvent={createUpdateEvent}
      deleteTicket={onRemoveTicket}
    />
  );
};
