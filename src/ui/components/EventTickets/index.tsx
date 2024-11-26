import { NewTickes } from "../../sidebar";
import { EmptyTicket, ListTickets } from "./components";
import { useEventTickets } from "./useEventTickets";

interface EventTicketsProps {
  tickets: any[];
}

export const EventTickets = ({ tickets }: EventTicketsProps) => {
  const { isNewTicket, showNewTicket,onDeleted } = useEventTickets();

  return (
    <>
      <NewTickes visible={isNewTicket} showVisible={showNewTicket} />
      <div className="grid">
        {tickets.length == 0 && (
          <div className="col-12">
            <EmptyTicket onClick={showNewTicket} />
          </div>
        )}
        {tickets.length > 0 && (
          <div className="col-12 pb-0">
            <ListTickets
              deleteTicket={onDeleted}
              edictTicket={() => {}}
              newTicket={showNewTicket}
            />
          </div>
        )}
      </div>
    </>
  );
};
