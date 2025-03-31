import { Link } from "react-router-dom";
import { Button, Carousel } from "antd";

import { CardEventCom } from "../../../../../ui/components";

interface AllEventsProps {
  title: string;
  list: any;
}

export const AllEventsComp = ({ list, title }: AllEventsProps) => {
  return (
    <div className="bgGradient">
      <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
        <div className="flex justify-between items-center gap-3 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold bebasNeue">{title}</h1>

          <Link to={"/allEvents"}>
            <Button className="w-30 rounded-3xl! uppercase btnStyle btnbgPrimary">
              <span className="font-bold text-xs">View All</span>
            </Button>
          </Link>
        </div>
        {/* events */}
        <div className="col-span-1 mt-2">
          <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-6 contListEvents">
            {list?.map((event: any) => (
              <Link key={event.id} to={`/event/${event.id}`} className="col-span-1">
                <CardEventCom
                  {...event}
                  classNameContainer="h-90! hover:shadow-none!"
                  classTitle="text-xl! lg:text-xl! sourceSans font-bold! "
                  classTitleContainer="justify-end"
                />
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
                <Link key={event.id} to={`/event/${event.id}`} className="col-span-1 px-3 py-1">
                  <CardEventCom
                    {...event}
                    classNameContainer="h-90! hover:shadow-none!"
                    classTitle="text-xl! lg:text-xl! sourceSans font-bold! "
                    classTitleContainer="justify-end"
                  />
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
