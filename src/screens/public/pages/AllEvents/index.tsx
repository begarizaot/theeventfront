import { EventCard, NothingEvent } from "../../../../ui";

import { useAllEvents } from "./useAllEvents";

import { Paginator } from "primereact/paginator";
import { Skeleton } from "primereact/skeleton";

export const AllEventsPage = () => {
  const { onPageChange, events, loading, pages, pagination } = useAllEvents();

  return (
    <div className="allEventsPage grid max-width-80 mx-auto px-4 sm:px-6 pt-8">
      <div className="col-12 text-center">
        <h1 className="effectPrimary m-0">All Events</h1>
      </div>

      {!loading && events.length == 0 && <NothingEvent />}

      {loading &&
        [1, 2, 3].map((val) => (
          <div className="col-12 sm:col-6 lg:col-4" key={val}>
            <Skeleton className="h-28rem"></Skeleton>
          </div>
        ))}

      <div className="col-12">
        <div className="grid">
          {!loading && events.length > 0 && (
            <div className="col-12">
              <div className="grid">
                {events?.map((item: any) => (
                  <div className="col-12 sm:col-6 lg:col-4" key={item.id_event}>
                    <EventCard link="/event" data={item} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {pagination?.total > 6 && (
            <div className="col-12 mt-3">
              <Paginator
                first={pages?.first || 0}
                rows={6}
                totalRecords={10}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
