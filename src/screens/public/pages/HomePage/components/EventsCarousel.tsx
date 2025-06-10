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
    <div className="h-[90vh] mb-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(270deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${
              listActive?.event_id?.url_image || ""
            })`,
          }}
        ></div>
        <div className="lg:col-span-2 px-8 flex flex-col justify-center pt-20 sm:pt-0 z-10">
          <h1 className=" text-4xl lg:text-5xl text-white font-bold uppercase bebasNeue xl:columns-2">
            {listActive.title}
          </h1>
          <ComDescription contenido={listActive?.description} />

          {listActive?.btn && (
            <Button
              className="w-45 rounded-3xl! uppercase btnStyle mt-3"
              // onClick={onClick}
            >
              <span className="font-bold text-xs">{listActive.btn.label}</span>
            </Button>
          )}
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
            {list?.map((event: any) => {
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
                      classNameContainer="h-70! sm:h-90! hover:shadow-none!"
                      classTitle="text-xl! lg:text-2xl! order-2 sourceSans font-bold!"
                      classDate="order-1"
                      hiddenResponsive
                      hiddenPrice
                      hiddenLocation
                      hiddenHour
                      showBtn
                      formatDate="DD.MM.YY"
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
