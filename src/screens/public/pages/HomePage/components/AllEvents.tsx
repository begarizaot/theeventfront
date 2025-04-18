import { Link } from "react-router-dom";
import { Button, Carousel } from "antd";

import { CardEventCom } from "../../../../../ui/components";

interface AllEventsProps {
  list: any;
}

export const AllEventsComp = ({ list }: AllEventsProps) => {
  return (
    <div className="bgGradient">
      <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6">
          <div className="flex flex-col gap-3">
            {/* <div className="flex">
              <TitleComp title="events" />
            </div> */}
            <h1 className="text-xl sm:text-3xl font-bold bebasNeue">
              Browsing events in <span className="uppercase bebasNeue text-primary">Barranquilla</span>
            </h1>
          </div>

          {/* <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 overflow-hidden">
            <ListCategoriesComp />
          </div> */}
        </div>
        {/* events */}
        <div className="col-span-1 mt-6">
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
            {list?.map((event: any) => (
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
              {list?.map((event: any) => (
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
        {/* btn */}
        <div className="px-4 sm:px-6 mt-6 sm:mt-10 text-center">
          <Link to={"/allEvents"}>
            <Button className="w-full sm:w-68 rounded-3xl! uppercase btnStyle btnbordPrimary">
              <span className="font-bold text-xs">View All</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
