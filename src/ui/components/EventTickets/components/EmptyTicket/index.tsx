import { Button } from "primereact/button";

interface EmptyTicketProps {
  onClick: () => void;
}

export const EmptyTicket = ({ onClick }: EmptyTicketProps) => {
  return (
    <div className="grid">
      <div className="col-12 text-center">
        <span className="pi pi-ticket textPrimary text-5xl"></span>
        <p className="m-0 text-sm">
          You currently do not have any tickets configured. Add ticket to
          continue with the process
        </p>
      </div>
      <div className="col-12 text-center">
        <Button
          label="Add Ticket"
          outlined
          className="w-6 border-round-3xl outlinedBtn text-sm"
          type="button"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
