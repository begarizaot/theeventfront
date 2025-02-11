import { ButtonComp } from "../../../../components";
import { ListSelectsComp, ListTicketsComp } from "./components";
import { useSelect } from "./useSelect";

export const SelectComp = () => {
  const { ticketSelect, listTicket } = useSelect();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-full text-white gap-4 pt-3">
      <div className="col-span-1 lg:col-span-2">
        <ListTicketsComp data={listTicket} />
      </div>
      <div className="col-span-1 pt-2 lg:pt-0 flex flex-col justify-end sticky bottom-0 bgBody">
        <p className="text-lg font-bold flex items-center gap-1">
          <span className="pi pi-shopping-cart textPrimary"></span>Selected
          Tickets
        </p>
        {ticketSelect.length == 0 ? (
          <div className="text-xs mt-1">
            <h1 className="font-bold"> NO TICKETS SELECTED</h1>
            <p>Please select tickets to begin your order</p>
          </div>
        ) : (
          <div className="mt-2">
            <ListSelectsComp data={ticketSelect} />
          </div>
        )}

        <div className="mt-2 lg:mt-auto">
          <ButtonComp lable="Checkout" disabled={ticketSelect.length == 0} />
        </div>
      </div>
    </div>
  );
};
