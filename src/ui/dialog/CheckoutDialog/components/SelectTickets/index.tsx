import { Ticket } from "./components";
import { ListTickets } from "../../ui";
import { useSelectTickets } from "./hooks";

import { Button } from "primereact/button";
interface SelectTicketsProps {
  data: any;
  onCheckout: (tickets: any) => void;
}

export const SelectTickets = ({ onCheckout, data }: SelectTicketsProps) => {
  const { loading, ticketTypes, onSelectedTicket, ticketsSelect } =
    useSelectTickets(data);

  return (
    <div className="col-12 border-top-1 pt-3 contTickets">
      <div className="grid h-full">
        <div className="col-12 sm:col-7 lg:col-8 h-full">
          {!loading && (
            <Ticket data={ticketTypes} onSelected={onSelectedTicket} />
          )}
        </div>
        <div className="col-12 sm:col-5 lg:col-4 flex flex-column">
          <ListTickets data={ticketsSelect} />
          <Button
            label="Checkout"
            outlined
            className="w-full border-round-3xl outlinedBtn text-sm mt-auto"
            type="button"
            onClick={() =>
              ticketsSelect.length > 0 && onCheckout(ticketsSelect)
            }
          />
        </div>
      </div>
    </div>
  );
};
