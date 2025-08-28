import { useNavigate } from "react-router-dom";
import { Button, QRCode, Spin } from "antd";
import {
  EventDetailsComp,
  EventImageComp,
  EventTableComp,
  EventTicketComp,
} from "./components";
import { useEventDetails } from "./useEventDetails";

const { VITE_PUBLIC_URL } = import.meta.env;

export const EventDetailsPage = () => {
  const navigate = useNavigate();

  const {
    eventData,
    isOrganizer,
    contextHolder,
    loading,
    onPublichEvent,
    downloadSvgQRCode,
  } = useEventDetails();

  return (
    <>
      {contextHolder}
      <Spin spinning={loading} fullscreen size="large" />
      <div className="px-4 sm:px-6 py-3 grid" id="myMarcketing">
        <QRCode
          type={"svg"}
          value={`${VITE_PUBLIC_URL}/event/${eventData.id_event}`}
          bgColor="#fff"
          className="hidden!"
        />
        <div className="col-span-1 grid sm:flex items-center justify-between">
          <h1 className="text-2xl font-bold bebasNeue">Event Flyer</h1>

          <div className="flex gap-3">
            <Button className="rounded-3xl! btnStyle" onClick={downloadSvgQRCode}>
              Create QR
            </Button>
            {isOrganizer && (
              <>
                <Button
                  className="rounded-3xl! btnStyle"
                  onClick={onPublichEvent}
                >
                  {eventData?.isVisible ? "Unpublish Event" : "Publish Event"}
                </Button>
                <Button
                  className="rounded-3xl! btnStyle"
                  onClick={() => {
                    navigate(`/editEvent/${eventData?.id_event}`);
                  }}
                >
                  Edit Event
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="col-span-1 my-3">
          <EventImageComp imageUrl={eventData.url_image} />
        </div>

        <div className="col-span-1 flex items-center justify-between">
          <h1 className="text-2xl font-bold bebasNeue">Event Details</h1>
        </div>

        <div className="col-span-1 my-3">
          <EventDetailsComp eventData={eventData} />
        </div>

        {(eventData?.ticketTypes ?? []).length > 0 && (
          <>
            <div className="col-span-1 flex items-center justify-between">
              <h1 className="text-2xl font-bold bebasNeue">
                Event Ticket Type(s)
              </h1>
            </div>
            <div className="col-span-1 my-3">
              <EventTicketComp eventData={eventData?.ticketTypes ?? []} />
            </div>
          </>
        )}

        {(eventData?.tableTypes ?? []).length > 0 && (
          <>
            <div className="col-span-1 flex items-center justify-between">
              <h1 className="text-2xl font-bold bebasNeue">
                Event Table Type(s)
              </h1>
            </div>
            <div className="col-span-1 my-3">
              <EventTableComp eventData={eventData?.tableTypes ?? []} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
