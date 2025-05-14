import { Button } from "antd";
import {
  EventDetailsComp,
  EventImageComp,
  EventTableComp,
  EventTicketComp,
} from "./components";
import { useEventDetails } from "./useEventDetails";

export const EventDetailsPage = () => {
  const { eventData, isOrganizer } = useEventDetails();

  return (
    <div className="px-4 sm:px-6 py-3 grid">
      {isOrganizer && (
        <div className="col-span-1 flex items-center justify-between">
          <h1 className="text-2xl font-bold bebasNeue">Event Flyer</h1>

          <Button className="rounded-3xl! btnStyle">Unpublish</Button>
        </div>
      )}

      <div className="col-span-1 my-3">
        <EventImageComp
          isOrganizer={isOrganizer}
          imageUrl={eventData.url_image}
        />
      </div>

      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Details</h1>
      </div>

      <div className="col-span-1 my-3">
        <EventDetailsComp isOrganizer={isOrganizer} eventData={eventData} />
      </div>

      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Ticket Type(s)</h1>
      </div>
      <div className="col-span-1 my-3">
        <EventTicketComp
          isOrganizer={isOrganizer}
          eventData={eventData?.ticketTypes ?? []}
        />
      </div>

      {eventData?.url_map && (
        <>
          <div className="col-span-1 flex items-center justify-between">
            <h1 className="text-2xl font-bold bebasNeue">
              Event Table Type(s)
            </h1>
          </div>
          <div className="col-span-1 my-3">
            <EventTableComp
              isOrganizer={isOrganizer}
              eventData={eventData?.tableTypes ?? []}
            />
          </div>
        </>
      )}
    </div>
  );
};
