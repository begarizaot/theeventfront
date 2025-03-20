import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

import { CardEventCom } from "../../../../../ui/components";

interface EventsCarouselProps {
  list: any;
}

export const EventsCarouselComp = ({ list }: EventsCarouselProps) => {
  const [listActive, setListActive] = useState<any>({});

  useEffect(() => {
    setListActive(list[0]);
  }, [list]);

  return (
    <div className="h-[90vh] mb-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full relative">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${
              listActive?.img || ""
            })`,
          }}
        ></div>
        <div className="lg:col-span-2 flex items-center justify-center px-8  pt-20 sm:pt-0 z-10">
          <h1 className=" text-4xl lg:text-5xl text-white font-bold uppercase bebasNeue xl:columns-2">
            Your Ultimate Event Guide -
            <span className="bebasNeue ml-1">Find, Explore, Attend</span>
          </h1>
        </div>
        <div className="lg:col-span-1 flex items-center group">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={16}
            centeredSlides={true}
            className="group"
            modules={[EffectCards]}
            autoplay={{
              //   delay: 2000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setListActive(list[swiper.activeIndex])}
          >
            {list.map((event: any) => (
              <SwiperSlide
                key={event.id}
                className="py-2 blur-xs transition-opacity duration-300 ease-in-out"
              >
                <CardEventCom
                  {...event}
                  date="23.02.25"
                  classNameContainer="h-70! sm:h-90! hover:shadow-none!"
                  classTitle="text-xl! lg:text-2xl! order-2 sourceSans font-bold!"
                  classDate="order-1"
                  hiddenResponsive
                  hiddenPrice
                  hiddenLocation
                  hiddenHour
                  showBtn
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
