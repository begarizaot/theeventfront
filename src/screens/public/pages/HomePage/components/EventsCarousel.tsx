import { SwiperSlide, Swiper } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CardEventCom, ComDescription } from "../../../../../components";
import { Button } from "antd";
import { setLocalStorage } from "../../../../../hooks";

interface EventsCarouselProps {
  list: any;
}

export const EventsCarouselComp = ({ list }: EventsCarouselProps) => {
  const navigate = useNavigate();

  const [listActive, setListActive] = useState<any>({});

  useEffect(() => {
    setListActive(list[0]);
  }, [list]);

  const onSaveLocalStorage = (event: string) => {
    setLocalStorage("event", event);
  };

  return (
    <div className="h-[85vh] mb-3 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(https://res.cloudinary.com/det46rxjs/image/upload/v1732042088/background_Home_56bde4bae7.svg)`,
          }}
        ></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 h-full mx-auto  max-w-[80rem]">
        <div className="lg:col-span-1 text-center sm:text-start px-10 sm:px-8 flex flex-col sm:justify-center justify-end pt-20 sm:pt-0 z-10">
          <h1 className=" text-3xl lg:text-4xl text-white font-bold uppercase bebasNeue">
            {listActive.title ?? ""}
          </h1>
          <ComDescription contenido={listActive?.description ?? ""} />

          {listActive?.btn ? (
            <Button
              className="w-45 rounded-3xl! uppercase btnStyle mt-3"
              // onClick={onClick}
            >
              <span className="font-bold text-xs">{listActive.btn.label}</span>
            </Button>
          ) : null}
        </div>
        <div className="lg:col-span-1 flex items-center group">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={16}
            centeredSlides={true}
            className="group w-full"
            modules={[EffectCards]}
            autoplay={{
              //   delay: 2000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setListActive(list[swiper.activeIndex])}
          >
            {(list ?? [])?.map((event: any) => {
              return (
                <SwiperSlide
                  key={event.id}
                  className="py-2 blur-xs transition-opacity duration-300 ease-in-out"
                >
                  <Link
                    to={`/event/${event?.event_id?.id_event}`}
                    onClick={() => onSaveLocalStorage(event.event_id)}
                  >
                    <CardEventCom
                      {...event.event_id}
                      classNameContainer="h-78! sm:h-90! hover:shadow-none!"
                      classTitle="text-xl! lg:text-2xl! order-2 sourceSans font-bold!"
                      classDate="order-1"
                      hiddenResponsive
                      hiddenPrice
                      hiddenLocation
                      hiddenHour
                      showBtn
                      formatDate="MM.DD"
                      isLocationCarrusel
                      location={event?.event_id?.event_locations_id?.title ?? ""}
                      onClick={() =>
                        navigate(`/event/${event?.event_id?.id_event}`)
                      }
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
