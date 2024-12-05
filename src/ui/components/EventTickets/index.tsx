import { NewTickes } from "../../sidebar";
import { EmptyTicket, ListTickets } from "./components";
import { useEventTickets } from "./hooks/useEventTickets";

interface EventTicketsProps {
  tickets: any[];
  createUpdateTicket: (ticket: any) => void;
  deleteTicket: (ticket: any) => void;
}

export const EventTickets = (dataReq: EventTicketsProps) => {
  const { tickets, createUpdateTicket } = dataReq;
  const {
    ticketData,
    isNewTicket,
    showNewTicket,
    onDeleted,
    onUpdateTicket,
    onNewTicket,
  } = useEventTickets(dataReq);

  return (
    <>
      <NewTickes
        data={ticketData}
        visible={isNewTicket}
        showVisible={showNewTicket}
        submitTicket={(ev) => {
          createUpdateTicket(ev);
          showNewTicket();
        }}
      />
      <div className="grid">
        {tickets.length == 0 && (
          <div className="col-12">
            <EmptyTicket onClick={onNewTicket} />
          </div>
        )}
        {tickets.length > 0 && (
          <div className="col-12 pb-0">
            <ListTickets
              data={tickets}
              deleteTicket={onDeleted}
              edictTicket={onUpdateTicket}
              newTicket={onNewTicket}
            />
          </div>
        )}
      </div>
    </>
  );
};
