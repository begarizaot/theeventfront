import { Avatar, Carousel } from "antd";
import bgImage from "../../../../../assets/home/bgFrame.png";
import { TitleComp } from "../../../components";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

import image1 from "../../../../../assets/home/carousel/1.png";
import image2 from "../../../../../assets/home/carousel/2.png";
import image3 from "../../../../../assets/home/carousel/3.png";
import image4 from "../../../../../assets/home/carousel/4.png";
import image from "../../../../../assets/home/whoWeare/1.png";

import { Link } from "react-router-dom";
import { useScroll } from "../../../../../hooks";
import { useState } from "react";

const avatars = [
  {
    src: image1,
    className: "left-10 top-5 w-[20%]! h-[12%]! lg:h-[15%]! rounded-xl!",
  },
  {
    src: image2,
    className:
      "left-[55%] top-[-20px] w-[20%]! h-[12%]! lg:h-[15%]! rounded-xl!",
  },
  {
    src: image3,
    className: "left-[32%] top-[70%] w-[13%]! h-[8%]! lg:h-[10%]! rounded-xl!",
  },
  {
    src: image4,
    className: "left-[-40%] top-[65%] w-[13%]! h-[8%]! lg:h-[10%]! rounded-xl!",
  },
];

export const WhoWeareComp = () => {
  const { scrollY } = useScroll();

  const handleMovil = () => {
    return (
      <>
        <div className="col-span-1 flex flex-col items-start gap-4 px-4 sm:px-6 order-2 sm:order-1 z-30">
          <TitleComp title="Who We are" />
          <h1 className="text-3xl bebasNeue">
            <span className="bebasNeue text-primary mr-1">
              Crafting Moments
            </span>
            That Soar Above Expectations
          </h1>

          <p className="text-sm z-20">
            At The Event Jet, we provide the perfect platform to host your
            events with ease and efficiency. Whether you're planning a corporate
            conference, a dreamy wedding, or a private celebration, our venue
            and hosting services ensure a seamless experience. We collaborate
            with event planners, organizers, and vendors to bring your vision to
            life.
          </p>
        </div>

        <div className="mt-6 mb-10 w-75 sm:w-90 pl-4 relative">
          <div className="borderStyle w-[300px] h-[300px] left-[-90px] top-[-30px] z-10"></div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="h-60! z-20!"
            direction={"vertical"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {avatars.map((avt, index) => {
              return (
                <SwiperSlide key={index}>
                  <Avatar
                    src={avt.src}
                    className={`h-60! w-full! rounded-xl! `}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    );
  };

  const handleDesktop = () => {
    return (
      <>
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="absolute inset-0 bg-cover"
        ></div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 order-2 sm:order-1 text-center">
          <TitleComp title="Who We are" />
          <h1 className="text-3xl bebasNeue">
            Stay in the Know with the
            <span className="bebasNeue text-primary ml-1">Latest Events</span>
          </h1>
        </div>

        <div className="relative h-full w-full mx-auto max-w-[80rem] hidden lg:block">
          {avatars.map((avatar, index) => {
            const isVisible = scrollY > index * 300;
            return (
              <Avatar
                key={index}
                src={avatar.src}
                className={`absolute rounded-xl shadow-xl ${avatar.className} 
            ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="borderStyle hidden! lg:block! w-[500px] h-[400px]"></div>
          <Link to={""} className="z-10 hidden lg:block">
            <img
              src={image}
              alt=""
              className="h-70 w-150 rounded-lg border-2 border-white shadow-2xl"
            />
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="relative bg-[linear-gradient(0deg,rgba(34,2,0,0)_0%,#420502_50%,rgba(34,2,0,0)_100%)]">
      <div className="hidden lg:block h-[70vh]">{handleDesktop()}</div>
      <div className="lg:hidden">{handleMovil()}</div>
    </div>
  );
};
