import { Toast } from "primereact/toast";
import { CreateEventComp } from "../../../../ui";
import { useEventDetails } from "./hooks/useEventDetails";

export const EventDetails = () => {
  const {
    ticktes,
    dataEvent,
    errorRes,
    onCreateUpdateEvent,
    onCreateUpdateTicket,
    onDeleteTicket,
    onChangeImage,
  } = useEventDetails();

  return (
    <div className="col-12">
      <Toast ref={errorRes} />
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
  );
};
