import { Ticket } from "./components";
import { ListTickets } from "../../ui";
import { useSelectTickets } from "./hooks";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
interface SelectTicketsProps {
  data: any;
  freeTicket: any;
  onCheckout: (tickets: any) => void;
}

export const SelectTickets = (req: SelectTicketsProps) => {
  const { freeTicket } = req;
  const {
    loading,
    ticketTypes,
    ticketsSelect,
    errorRes,
    onSelectedTicket,
    onCheckoutRes,
  } = useSelectTickets(req);

  return (
    <>
      <Toast ref={errorRes} />
      <div className="col-12 border-top-1 pt-3 contTickets">
        <div className="grid h-full">
          <div className="col-12 sm:col-7 lg:col-8 h-full">
            {!loading && (
              <Ticket
                freeTicket={freeTicket}
                data={ticketTypes}
                onSelected={onSelectedTicket}
              />
            )}
            {loading && (
              <div className="flex h-full align-items-center justify-content-center">
                <ProgressSpinner strokeWidth="6" animationDuration=".5s" />
              </div>
            )}
          </div>
          <div className="col-12 sm:col-5 lg:col-4 flex flex-column">
            <ListTickets data={ticketsSelect} />
            <Button
              label="Checkout"
              outlined
              className="w-full border-round-3xl outlinedBtn text-sm mt-auto"
              type="button"
              onClick={() => ticketsSelect.length > 0 && onCheckoutRes()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
