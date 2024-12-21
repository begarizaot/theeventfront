import { Link } from "react-router-dom";
import { useMessageTickets } from "./hooks/useMessageTickets";
import { Button } from "primereact/button";

interface MessageTicketsProps {
  idOrder: any;
  onHidden?: () => void;
}

export const MessageTickets = (data: MessageTicketsProps) => {
  const { onDownloadOrdersTickets } = useMessageTickets(data);

  return (
    <div className="flex flex-column h-full justify-content-center text-white w-full text-center">
      <div className="col-12 text-2xl font-bold">
        <span className="effectPrimary">Success!</span> Your purchase is
        complete
      </div>
      <div className="col-12 text-sm">
        Thank you for your order. You tickets will arrive shortly, to the email
        you provided.
      </div>
      <div className="col-12 text-2xl font-bold">
        Please allow up to 5 minutes for delivery!
      </div>
      <div className="col-12 text-center text-sm sm:text-base">
        If you experience any issues, please send us a message
        <Link to="/contact-us" className=" textPrimary mx-1" target="_blank">
          here
        </Link>
        and one of our team members will make sure to quickly respond.
      </div>

      <div className="col-12 text-center">
        <Button
          label="Download Tickets"
          outlined
          className="w-full border-round-3xl outlinedBtn text-sm sm:w-6"
          type="button"
          onClick={onDownloadOrdersTickets}
        />
      </div>
    </div>
  );
};
