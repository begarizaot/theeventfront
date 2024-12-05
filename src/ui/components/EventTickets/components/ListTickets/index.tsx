import { Button } from "primereact/button";
import { memo } from "react";
import { NumberFormat } from "../../../../../helpers";
import moment from "moment";

interface ListTicketsProps {
  data: any;
  newTicket: () => void;
  edictTicket: (data: any) => void;
  deleteTicket: (data: any) => void;
}

export const ListTickets = memo(
  ({ data, deleteTicket, edictTicket, newTicket }: ListTicketsProps) => {
    return (
      <div className="grid">
        <div className="col-12 pb-0">
          <div className="grid gap-2">
            {data.map((ticket: any, index: any) => (
              <div
                className="col-12 pb-0 border-1 bgBorder border-round p-3"
                key={index}
              >
                <div className="grid">
                  <div className="col-6 sm:col-4 flex align-items-center gap-1">
                    <span className="pi pi-ticket mr-1 textPrimary text-xl"></span>
                    {ticket.name}
                  </div>
                  <div className="col-6 text-right sm:col-4 sm:text-center">
                    ${NumberFormat(ticket.price)}
                  </div>
                  <div className="col-6 text-left sm:col-4 sm:text-right">
                    max Capacity:{" "}
                    <span className="font-bold">
                      {NumberFormat(ticket.max_capacity)}
                    </span>
                  </div>
                  <div className="col-6 text-right sm:text-left sm:col-4">
                    <span className="bg-green-900 p-2 text-sm border-round">
                      {ticket.available ? "On" : "Off"} Sale
                    </span>
                  </div>
                  <div className="col-12 sm:col-4 text-center">
                    {moment(ticket.start_date).format("MMM DD, YYYY, hh:mm A")}
                  </div>
                  <div className="col-12 sm:col-4 flex align-items-center gap-2 justify-content-end">
                    <Button
                      label="Edit"
                      icon="pi pi-pen-to-square"
                      outlined
                      className="border-round-3xl outlinedBtn text-sm py-2"
                      type="button"
                      onClick={() => edictTicket(ticket)}
                    />
                    <Button
                      icon="pi pi-trash"
                      outlined
                      className="border-round-3xl outlinedBtn text-sm py-2 border-none"
                      type="button"
                      onClick={() => deleteTicket(ticket)}
                    />
                  </div>
                </div>
              </div>
            ))}
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
  }
);
