import { Button } from "antd";

import allEventsImg from "../../../../assets/allevents/allEvents.jpeg";
import { useAllEvents } from "./useAllEvents";
import { AllEventsComp, HottestEventsComp, ListCategoriesComp } from "./components";

export const AllEventsPage = () => {
  const { allcategories, listEvents } = useAllEvents();

  return (
    <div className="grid grid-cols-1 mb-6">
      <div
        className="absolute left-0 top-0 bg-cover inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${allEventsImg})`,
        }}
      ></div>
      <div className="col-span-1 h-screen mx-auto max-w-[80rem] relative">
        <div className="flex flex-col items-center justify-end sm:justify-center h-full sm:w-110 gap-4 px-6 sm:px-0 pb-20 sm:pb-0 z-10 relative">
          <h1 className="text-4xl text-center bebasNeue">
            Explore <span className="bebasNeue text-primary">All Events</span> -
            Find What Excites You!
          </h1>
          <p className="text-xs text-center">
            Discover a variety of events, from local gatherings to major
            festivals. Whether you're into music, business networking, or family
            fun, we’ve got something for everyone.
          </p>
          <Button className="w-full rounded-3xl! uppercase btnStyle sm:w-40">
            <span className="font-bold text-xs">Starts from $99</span>
          </Button>
        </div>
      </div>
      {/* categories */}
      <ListCategoriesComp list={allcategories} />

      {/* popular events */}
      <AllEventsComp title="Popular Events" list={listEvents} />
      <div className="my-3">
        <AllEventsComp title="Cumbia" list={listEvents} />
      </div>

      <HottestEventsComp list={listEvents} />
    </div>
  );
};
