import { Button } from "primereact/button";

interface ListTicketsProps {
  newTicket: () => void;
  edictTicket: () => void;
  deleteTicket: () => void;
}

export const ListTickets = ({
  deleteTicket,
  edictTicket,
  newTicket,
}: ListTicketsProps) => {
  return (
    <div className="grid">
      <div className="col-12 pb-0">
        <div className="grid">
          <div className="col-12 pb-0 border-1 bgBorder border-round p-3">
            <div className="grid">
              <div className="col-6 sm:col-4 flex align-items-center gap-1">
                <span className="pi pi-ticket mr-1 textPrimary text-xl"></span>
                General
              </div>
              <div className="col-6 text-right sm:col-4 sm:text-center">
                $324
              </div>
              <div className="col-6 text-left sm:col-4 sm:text-right">
                max Capacity: <span className="font-bold">234</span>
              </div>
              <div className="col-6 text-right sm:text-left sm:col-4">
                <span className="bg-green-900 p-2 text-sm border-round">
                  On Sale
                </span>
              </div>
              <div className="col-12 sm:col-4 text-center">
                Nov 25, 2024 at 8:58 PM
              </div>
              <div className="col-12 sm:col-4 flex align-items-center gap-2 justify-content-end">
                <Button
                  label="Edit"
                  icon="pi pi-pen-to-square"
                  outlined
                  className="border-round-3xl outlinedBtn text-sm py-2"
                  type="button"
                  onClick={edictTicket}
                />
                <Button
                  icon="pi pi-trash"
                  outlined
                  className="border-round-3xl outlinedBtn text-sm py-2 border-none"
                  type="button"
                  onClick={deleteTicket}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 text-right mt-2 pb-0">
        <Button
          label="Add Ticket"
          outlined
          className="border-round-3xl outlinedBtn text-sm py-2"
          type="button"
          onClick={newTicket}
        />
      </div>
    </div>
  );
};
