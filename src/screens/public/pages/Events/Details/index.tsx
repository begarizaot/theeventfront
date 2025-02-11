import "./styles.css";
import { Link } from "react-router-dom";
import { ButtonComp } from "../../../../../ui/components";
import { useDetails } from "./useDetails";
import { DetailsLinkComp, ShareLinkComp } from "./components";

export const EventDetailPage = () => {
  const { shareData, contextHolder, details } = useDetails();
  return (
    <>
      {contextHolder}
      <div className="text-white eventDetailPage">
        <div
          className="h-[26rem] bgGradient bg-cover absolute w-full blur-xs"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dii5f60xx/image/upload/v1737242025/events/event_Id_22_a5c675459d.png')`,
          }}
        ></div>
        <div className="px-10 max-w-[80rem] mx-auto pt-16 z-1 relative">
          <div className="grid sm:grid-cols-4 lg:grid-cols-3 gap-3">
            <div className="sm:col-span-2 lg:col-span-1 relative h-[30rem]">
              <div className="bgBorder bgFull bg-center! bg-no-repeat! absolute w-full h-full rounded-xl bgBorder p-[2px]">
                <div
                  className="bgFull bg-center! bg-no-repeat! absolute h-[99.2%] w-[99%] rounded-xl bgBorder"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dii5f60xx/image/upload/v1737242025/events/event_Id_22_a5c675459d.png')`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col justify-center gap-1 sm:gap-4">
              <h1 className="font-bold text-lg text-center sm:text-start sm:text-2xl lg:text-3xl">
                IZAAK VALENTINES DAY CONCERT
              </h1>
              <div className="flex flex-col items-center sm:items-start lg:flex-row lg:items-center lg:gap-10 gap-2">
                <p className="flex items-center gap-2 text-sm">
                  From
                  <span className="text-lg">$55 - $75</span>
                </p>
                <ButtonComp lable="Tickets" className="lg:w-66! sm:w-54!" />
              </div>

              <div className="flex flex-col lg:flex-row gap-2 lg:items-center mt-2 sm:mt-0">
                <p>Share This Event:</p>
                <div className="flex gap-2">
                  {shareData?.map((item: any, index: number) => (
                    <ShareLinkComp {...item} key={index} />
                  ))}
                </div>
              </div>
              <p>
                Views: <span>3,169</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-3">
            <div className="col-span-1">
              {details?.map((item: any, index: number) => (
                <DetailsLinkComp {...item} key={index} />
              ))}
            </div>
            <div className="col-span-1 htmlStyle">
              {`Izaak live en concierto \n Cantando todos sus éxitos \n Viernes 14 De Febrero\n Puertas abren a las 10PM \n Grand Fortune event hall \n 1104 E Fowler Ave Tampa Florida \n Tickets are not refundable`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
