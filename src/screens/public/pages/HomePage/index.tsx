import { Carousel } from "antd";

import { CardEventsCarousel } from "../../../../ui/components";
import { useHome } from "./useHome";

export const HomePage = () => {
  const { carousel, settings, bgImage, currentSlide } = useHome();

  return (
    <>
      {/* info events here  */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 h-svh bg-cover"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${bgImage})` }}
      >
        <div className="col-span-1 flex sm:items-center items-end pl-6 sm:pl-10 lg:pl-20">
          <h1 className="text-3xl sm:text-4xl font-bold w-90">
            Your Ultimate Event Guide -
            <span className="textPrimary ml-1">Find, Explore, Attend</span>
          </h1>
        </div>
        <div className="col-span-1 flex items-center">
          <Carousel rootClassName="w-full" {...settings}>
            {carousel.map((item: any, indx: any) => {
              const visibleCount = Math.floor(settings.slidesToShow);
              const isVisible =
                indx >= currentSlide && indx < currentSlide + visibleCount;

              return (
                <div key={indx} className="pl-12 sm:pl-10 lg:pl-12 xl:pl-30 py-2">
                  <CardEventsCarousel
                    {...item}
                    className={` ${isVisible ? "" : "blur-xs"}`}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
