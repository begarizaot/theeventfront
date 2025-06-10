import { Link } from "react-router-dom";

import { useAllEvents } from "./useAllEvents";

import { CardEventCom, MetaDataCom } from "../../../../components";
import { Pagination, Skeleton } from "antd";

const { VITE_APITHEEVENT } = import.meta.env;

export const AllEventsPage = () => {
  const { page, sizePage, loading, listEvents, onPageChange } = useAllEvents();

  return (
    <>
      <MetaDataCom title={"All Events"} url={`${VITE_APITHEEVENT}/allEvents`} />
      <div className="bgGradient pt-16 min-h-screen">
        <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6">
            <h1 className="text-xl sm:text-3xl font-bold bebasNeue">
              All events
            </h1>
          </div>
          {/* events */}
          <div className="col-span-1 mt-6">
            {loading && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
                {[1, 2, 3].map((ind: any) => (
                  <div
                    className="col-span-1  h-[400px] sm:h-[500px] "
                    key={ind}
                  >
                    <Skeleton.Node
                      active
                      className="bg-white/20 w-full! rounded-xl h-full!"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
              {listEvents?.map((event: any) => (
                <Link
                  key={event.id}
                  to={`/event/${event.id_event}`}
                  className="col-span-1"
                >
                  <CardEventCom {...event} classNameContainer="cardEventCom" />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 mt-6">
            <Pagination
              align="center"
              defaultCurrent={page}
              total={sizePage.total}
              onChange={(ev) => onPageChange(ev)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
