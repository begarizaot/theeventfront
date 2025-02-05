import { EventCardComp, MetaComp } from "../../../../../ui/components";
import { useAll } from "./useAll";

import { Pagination } from "antd";

export const EventAllPage = () => {
  const { events } = useAll();

  return (
    <>
      <MetaComp title="All Events" />
      <div
        className={`px-10 max-w-[80rem] mx-auto pt-16 pb-8 ${
          events.length == 0 ? "h-[80vh]" : ""
        } `}
      >
        <div className="text-center mb-3">
          <h1 className="effectPrimary m-0 text-3xl font-bold">All Events</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {events.map((event: any, index: any) => (
            <EventCardComp key={index} />
          ))}
        </div>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={events.length}
          pageSize={6}
          className="paginationClass items-center"
        />
      </div>
    </>
  );
};
