import { Ticket } from "./components";
import { ListTickets } from "../../ui";
import { Button } from "primereact/button";

interface SelectTicketsProps {
  onCheckout: () => void;
}

export const SelectTickets = ({ onCheckout }: SelectTicketsProps) => {
  return (
    <div className="col-12 border-top-1 pt-3 contTickets">
      <div className="grid h-full">
        <div className="col-12 sm:col-7 lg:col-8 h-full">
          <Ticket />
        </div>
        <div className="col-12 sm:col-5 lg:col-4 flex flex-column">
          <ListTickets />
          <Button
            label="Checkout"
            outlined
            className="w-full border-round-3xl outlinedBtn text-sm mt-auto"
            type="button"
            onClick={onCheckout}
          />
        </div>
      </div>
    </div>
  );
};
