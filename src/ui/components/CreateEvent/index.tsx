import "./styles.scss";
import { EventTickets } from "../EventTickets";
import { AboutEvent, DateLocation, EventTitle, ImageLinks } from "./components";
import { useCreateEvent } from "./hooks/useCreateEvent";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

interface CreateEventCompProps {
  dataReq?: any;
  ticktes: any[];
  edit?: boolean;
  createUpdateTicket: (ticket: any) => void;
  deleteTicket: (ticket: any) => void;
  createUpdateEvent: (event: any) => void;
  changeImage?: (img: any) => void;
}

export const CreateEventComp = (dataReq: CreateEventCompProps) => {
  const { ticktes, edit, createUpdateTicket, deleteTicket, changeImage } =
    dataReq;

  const {
    errorRes,
    formState,
    listCategories,
    listAgeRestrictions,
    onSetInput,
    onCreateEvent,
    onInputChange,
    onCheckboxChange,
    setAutocompleteOff,
  } = useCreateEvent(dataReq);

  return (
    <>
      <Toast ref={errorRes} />
      <div className="grid createEventPage pb-3">
        {!edit && (
          <div className="col-12">
            <h2 className="m-0 effectPrimary">Build Your Event Page</h2>
            <p className="m-0 text-xs sm:text-sm">
              Add all of your event details and let attendees know what to
              expect
            </p>
          </div>
        )}

        <div className="col-12 mt-2">
          <form className="grid gap-3" onSubmit={onCreateEvent}>
            <div className="col-12 contData">
              <ImageLinks
                data={formState}
                inputChange={onInputChange}
                setInput={onSetInput}
                changeImage={changeImage}
              />
            </div>
            <div className="col-12 contData">
              <EventTitle data={formState} inputChange={onInputChange} />
            </div>
            <div className="col-12 contData">
              <DateLocation
                data={formState}
                inputChange={onInputChange}
                setInput={onSetInput}
              />
            </div>
            <div className="col-12 contData">
              <AboutEvent
                listCategories={listCategories}
                listAgeRestrictions={listAgeRestrictions}
                data={formState}
                autocompleteOff={setAutocompleteOff}
                inputChange={onInputChange}
                checkboxChange={onCheckboxChange}
              />
            </div>
            <div className="col-12 contData">
              <div className="grid">
                <div className="col-12">
                  <h3 className="m-0 effectPrimary">Event Tickets</h3>
                </div>
                <div className="col-12">
                  <EventTickets
                    tickets={ticktes}
                    createUpdateTicket={createUpdateTicket}
                    deleteTicket={deleteTicket}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 text-right">
              <Button
                label={`${edit ? "Update" : "Save"} Event`}
                outlined
                className="w-full sm:w-6 border-round-3xl outlinedBtn text-sm"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
