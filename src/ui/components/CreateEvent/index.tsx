import "./styles.scss";
import { EventTickets } from "../EventTickets";
import { AboutEvent, DateLocation, EventTitle, ImageLinks } from "./components";

import { Button } from "primereact/button";

interface CreateEventCompProps {
  edit?: boolean;
}

export const CreateEventComp = ({ edit }: CreateEventCompProps) => {
  return (
    <div className="grid createEventPage pb-3">
      {!edit && (
        <div className="col-12">
          <h2 className="m-0 effectPrimary">Build Your Event Page</h2>
          <p className="m-0 text-xs sm:text-sm">
            Add all of your event details and let attendees know what to expect
          </p>
        </div>
      )}

      <div className="col-12 mt-2">
        <form className="grid gap-3">
          <div className="col-12 contData">
            <ImageLinks />
          </div>
          <div className="col-12 contData">
            <EventTitle />
          </div>
          <div className="col-12 contData">
            <DateLocation />
          </div>
          <div className="col-12 contData">
            <AboutEvent />
          </div>
          <div className="col-12 contData">
            <div className="grid">
              <div className="col-12">
                <h3 className="m-0 effectPrimary">Event Tickets</h3>
              </div>
              <div className="col-12">
                <EventTickets tickets={[{}]} />
              </div>
            </div>
          </div>
          <div className="col-12 text-right">
            <Button
              label={`${edit ? "Update" : "Save"} Event`}
              outlined
              className="w-full sm:w-6 border-round-3xl outlinedBtn text-sm"
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
