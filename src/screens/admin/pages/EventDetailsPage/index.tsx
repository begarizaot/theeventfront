import { Button } from "antd";
import { EventDetailsComp, EventImageComp } from "./components";

export const EventDetailsPage = () => {
  return (
    <div className="px-4 sm:px-6 py-3 grid">
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Flyer</h1>

        <Button className="rounded-3xl! btnStyle">Unpublish</Button>
      </div>

      <div className="col-span-1 my-3">
        <EventImageComp />
      </div>

      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">Event Details</h1>
      </div>

      <div className="col-span-1 my-3">
        <EventDetailsComp />
      </div>
    </div>
  );
};
