import { Link } from "react-router-dom";

import { useAllEvents } from "./useAllEvents";

import { CardEventCom } from "../../../../components";

export const AllArtistPage = () => {
  const { listEvents } = useAllEvents();

  return (
    <div className="bgGradient pt-16 min-h-screen">
      <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6">
          <h1 className="text-xl sm:text-3xl font-bold bebasNeue">
            All artists
          </h1>
        </div>
        {/* events */}
        <div className="col-span-1 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
            {/* {listEvents?.map((event: any) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="col-span-1"
              >
                <CardEventCom {...event} classNameContainer="cardEventCom" />
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};
