import { Toast } from "primereact/toast";
import { CreateEventComp } from "../../../../ui";
import { useEventDetails } from "./hooks/useEventDetails";
import { Button } from "primereact/button";

export const EventDetails = () => {
  const {
    ticktes,
    dataEvent,
    errorRes,
    onChangeImage,
    onDeleteTicket,
    onPublishEvent,
    onCreateUpdateEvent,
    onCreateUpdateTicket,
  } = useEventDetails();

  return (
    <div className="col-12">
      <Toast ref={errorRes} />

      <div className="grid">
        <div className="col-12 text-right">
          <Button
            label={
              dataEvent?.status_event_id?.id == 1 ? `Unpublish` : "Publish"
            }
            outlined
            className="w-full sm:w-6 border-round-3xl outlinedBtn text-sm"
            type="button"
            onClick={onPublishEvent}
          />
        </div>
        <div className="col-12">
          <CreateEventComp
            dataReq={dataEvent}
            ticktes={ticktes}
            createUpdateEvent={onCreateUpdateEvent}
            createUpdateTicket={onCreateUpdateTicket}
            deleteTicket={onDeleteTicket}
            changeImage={onChangeImage}
            edit={true}
          />
        </div>
      </div>
    </div>
  );
};
