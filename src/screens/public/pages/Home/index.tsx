import { Link } from "react-router-dom";
import { EventCardComp } from "../../../../ui/components";
import { useHome } from "./useHome";

export const HomePage = () => {
  const { openSearch } = useHome();

  return (
    <>
      {/* info */}
      <div className="relative h-[80vh] mb-3">
        <div
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/det46rxjs/image/upload/v1732042088/background_Home_56bde4bae7.svg")',
          }}
          className="h-full w-full absolute bg-cover bg-center bg-no-repeat bgGradient"
        ></div>
        <div className="z-10 absolute h-full w-full flex flex-col justify-center items-center text-white px-10 text-center">
          <h1 className="effectPrimary text-2xl/6 sm:text-3xl font-bold">
            Your Event Journey Starts Here!
          </h1>
          <p className="text-sm/4 sm:text-base/5 sm:w-[50%] mt-2">
            From tickets to payouts, we make event management seamless and
            rewarding
          </p>

          <button
            className="bg-white h-9 justify-between w-full sm:w-[70%] xl:w-[50%] mt-2 rounded-full flex items-center px-3 cursor-pointer"
            onClick={openSearch}
          >
            <p className="text-gray-300 text-sm pointer-events-none">
              Search events by name, artist or genre
            </p>
            <span className="pi pi-search bg-black p-[5px] sm:p-[6px] rounded-full text-xs"></span>
          </button>
        </div>
      </div>
      {/* events */}
      <div className="px-10 max-w-[80rem] mx-auto">
        <div className="flex  mb-2 justify-between items-center">
          <h1 className="effectPrimary text-2xl sm:text-3xl font-bold">
            Upcoming Events
          </h1>
          <div className="ml-auto">
            <Link
              to="/events"
              className="border sm:px-3 px-2 py-1 rounded-full text-xs sm:text-sm cursor-pointer text-white"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EventCardComp />
          <EventCardComp />
          <EventCardComp />
        </div>
      </div>
    </>
  );
};
