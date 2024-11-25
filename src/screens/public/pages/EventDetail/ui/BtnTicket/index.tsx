import { Button } from "primereact/button";
import { useContext } from "react";
import { CheckoutContext } from "../../../../../../context";

interface BtnTicketProps {
  className?: string;
}

export const BtnTicket = ({ className }: BtnTicketProps) => {
  const { showCheckout } = useContext(CheckoutContext);

  return (
    <Button
      label="Tickets"
      outlined
      className={`w-full border-round-3xl outlinedBtn text-sm ${className}`}
      type="button"
      onClick={showCheckout}
    />
  );
};
