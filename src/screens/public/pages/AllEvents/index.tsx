import "./style.scss";

import { EventCard } from "../../../../ui";

import { useAllEvents } from "./useAllEvents";
import { Paginator } from "primereact/paginator";

export const AllEventsPage = () => {
  const { data, pagination, page, onPageChange } = useAllEvents();

  return (
    <div className="allEventsPage grid max-width-80 mx-auto px-4 sm:px-6 pt-8">
      <div className="col-12 text-center">
        <h1 className="effectPrimary m-0">All Events</h1>
      </div>

      {!pagination?.total && (
        <div className="col-12 text-white nothingEvent flex align-items-center justify-content-center">
          <div className="grid">
            <div className="col-6"></div>
            <div className="col-6">
              <h1 className="m-0 w-5">Sorry! Nothing was found</h1>
            </div>
            <div className="col-12 text-center mt-3">
              Try to search for another event or check the filters you have
              applied
            </div>
          </div>
        </div>
      )}

      {pagination?.total && (
        <div className="col-12">
          <div className="grid">
            <div className="col-12">
              <div className="grid">
                {data?.map((item: any) => (
                  <div className="col-12 sm:col-6 lg:col-4" key={item?.id}>
                    <EventCard link="/event" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 mt-3">
              <Paginator
                first={page}
                rows={pagination?.pageCount}
                totalRecords={pagination?.total}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
