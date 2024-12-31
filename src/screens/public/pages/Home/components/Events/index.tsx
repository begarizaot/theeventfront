import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { EventCard } from "../../../../../../ui";
import { getEventListPage } from "../../../../../../store/slices";
import { AppDispatch, RootState } from "../../../../../../store";

import { Skeleton } from "primereact/skeleton";

export const EventsLits = () => {
  const dispatch: AppDispatch = useDispatch();
  const { events, loading } = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(getEventListPage());
  }, [dispatch]);

  return (
    <div className="max-width-80 mx-auto px-4 sm:px-6">
      <div className="grid">
        <div className="col-12 flex align-items-center justify-content-between">
          <h1 className="effectPrimary text-3xl m-0">Upcoming Events</h1>
          <Link
            to="events"
            className="no-underline text-white"
          >
            <p className="ml-2 m-0 cursor-pointer border-1 px-2 py-1 border-round-2xl">
              View All
            </p>
          </Link>
        </div>

        <div className="col-12">
          <div className="grid">
            {loading &&
              [1, 2, 3].map((val) => (
                <div className="col-12 sm:col-6 lg:col-4" key={val}>
                  <Skeleton className="h-28rem"></Skeleton>
                </div>
              ))}
            {!loading &&
              events.length > 0 &&
              events.map((item:any) => (
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
