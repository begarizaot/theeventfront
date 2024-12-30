import "./styles.scss";
import { EventCard, NothingEvent } from "../../../../ui";
import { useMyEvents } from "./hooks/useMyEvents";

import { TabMenu } from "primereact/tabmenu";
import { Paginator } from "primereact/paginator";
import { Skeleton } from "primereact/skeleton";

export const MyEventsPage = () => {
  const {
    itemsMenu,
    events,
    loading,
    pagination,
    pages,
    itemIndex,
    onPageChange,
    onTabChange,
  } = useMyEvents();

  return (
    <div className="grid myEventsPage">
      <div className="col-12">
        <TabMenu
          className="tabMenuMyEvent"
          model={itemsMenu}
          activeIndex={itemIndex}
          onTabChange={onTabChange}
        />
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
          {!loading &&
            events.map((event:any) => (
              <div key={event.id_event} className="col-12 sm:col-6 lg:col-4">
                <EventCard
                  link="/admin"
                  sublink="ticketControl"
                  data={event}
                  manager={true}
                />
              </div>
            ))}
        </div>
      </div>

      {pagination?.total > 6 && (
        <div className="col-12">
          <Paginator
            first={pages?.first || 0}
            rows={6}
            totalRecords={pagination?.total || 0}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};
