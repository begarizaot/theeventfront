import { Link } from "react-router-dom";

import { useEventsListPages } from "../../../../../../hooks";

import { EventCard } from "../../../../../../ui";

import { Skeleton } from "primereact/skeleton";
import { useEffect } from "react";

export const EventsLits = () => {
  const { fetchEvents, events, isLoading } = useEventsListPages();

  useEffect(() => {
    fetchEvents({ size: 3 });
  }, []);

  if (!isLoading && events.length == 0) {
    return null;
  }

  return (
    <div className="max-width-80 mx-auto px-4 sm:px-6">
      <div className="grid">
        <div className="col-12 flex align-items-center justify-content-between">
          <h1 className="effectPrimary text-xl sm:text-4xl">Upcoming Events</h1>
          <Link
            to="events"
            className="text-white no-underline border-1 px-2 sm:px-3 py-1 sm:py-2 border-round-2xl"
          >
            <span className="pointer-events-none text-xs sm:text-sm">
              View All
            </span>
          </Link>
        </div>

        <div className="col-12">
          <div className="grid">
            {isLoading &&
              [1, 2, 3].map((val) => (
                <div className="col-12 sm:col-6 lg:col-4" key={val}>
                  <Skeleton className="h-28rem"></Skeleton>
                </div>
              ))}
            {!isLoading &&
              events.length > 0 &&
              events.map((item: any) => (
                <div className="col-12 sm:col-6 lg:col-4" key={item.id_event}>
                  <EventCard link="event" data={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
