import { Carousel } from "antd";
import { Link } from "react-router-dom";

import { useAllEvents } from "./useAllEvents";

import { CardEventCom } from "../../../../ui/components";

export const AllEventsPage = () => {
  const { listEvents } = useAllEvents();

  return (
    <div className="bgGradient pt-16">
      <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6">
          <h1 className="text-xl sm:text-3xl font-bold bebasNeue">
            All events
          </h1>
        </div>
        {/* events */}
        <div className="col-span-1 mt-6">
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
            {listEvents?.map((event: any) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="col-span-1"
              >
                <CardEventCom {...event} classNameContainer="cardEventCom" />
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <Carousel
              slidesToShow={1.8}
              dots={false}
              infinite={false}
              responsive={[
                {
                  breakpoint: 640, // Para dispositivos móviles
                  settings: {
                    slidesToShow: 1.1,
                  },
                },
              ]}
            >
              {listEvents?.map((event: any) => (
                <Link
                  key={event.id}
                  to={`/event/${event.id}`}
                  className="col-span-1 px-3 py-1"
                >
                  <CardEventCom {...event} />
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
