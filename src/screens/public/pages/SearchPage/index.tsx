import { Empty, Input, Pagination, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { CardEventCom } from "../../../../components";
import { useSearch } from "./useSearch";

export const SearchPage = () => {
  const {
    page,
    sizePage,
    loading,
    listEvents,
    onPageChange,
    onDebouncedSearch,
  } = useSearch();

  return (
    <div className="bgGradient">
      <div className="pt-16 min-h-screen mx-auto max-w-[80rem] z-10 relative pb-10">
        <div className="grid grid-cols-1 w-full">
          <div className="col-span-1 px-6 mt-4 ">
            <div className="border-white! border rounded-3xl flex items-center pl-3 pr-2 sm:py-[2px]">
              <span className="pi pi-search"></span>
              <Input
                placeholder="Search events, artists"
                className="rounded-full! bg-transparent! border-transparent! text-white! focus:ring-0!"
                classNames={{
                  input: "placeholder-white/20! py-[6px]!",
                }}
                inputMode="text"
                autoComplete="off"
                onChange={(e) => onDebouncedSearch(e.target.value)}
              />
            </div>
          </div>

          {/* events */}
          <div className="col-span-1 mt-6">
            {!loading && !listEvents?.length && (
              <div className="col-span-1 h-60 flex items-center justify-center">
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  classNames={{ description: "text-white!" }}
                  className="m-2!"
                  description="No events found"
                />
              </div>
            )}
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
                  <CardEventCom
                    {...event}
                    restriction={event?.event_restriction_id?.title ?? ""}
                    location={event?.event_locations_id?.vicinity ?? ""}
                    price={event?.event_tickets_ids ?? []}
                    classNameContainer="cardEventCom"
                  />
                </Link>
              ))}
            </div>
          </div>
          {listEvents?.length ? (
            <div className="col-span-1 mt-6">
              <Pagination
                align="center"
                defaultCurrent={page}
                total={sizePage.total}
                onChange={(ev) => onPageChange(ev)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
