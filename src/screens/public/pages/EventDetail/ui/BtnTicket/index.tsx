import { Button } from "primereact/button";
import { useContext } from "react";
import { CheckoutContext } from "../../../../../../context";

interface BtnTicketProps {
  data: any;
  className?: string;
}

export const BtnTicket = ({ className, data }: BtnTicketProps) => {
  const { showCheckout } = useContext(CheckoutContext);

  const active = data?.sould_out ? true : false;
  const status = data?.status_event_id;

  return (
    <Button
      label={active ? (status?.id != 1 ? status?.name : "Sold Out") : "Tickets"}
      outlined
      className={`w-full border-round-3xl outlinedBtn text-sm ${className} ${
        active ? "textPrimary bg-white" : ""
      }`}
      type="button"
      disabled={active}
      onClick={() => !active && showCheckout(data)}
    />
  );
};
