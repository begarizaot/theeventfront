import { Button } from "antd";
import { useGoingLabel, useMoment } from "../hooks";

interface CardEventComProps {
  img: string;
  name: string;
  start_time: string;
  following: any;
  location: string;
  hour: string;
  restriction: string;
  price: string;
}

interface CardEventComElemProps {
  classNameContainer?: string;
  classTitleContainer?: string;
  classTitle?: string;
  classDate?: string;
  hiddenResponsive?: boolean;
  hiddenPrice?: boolean;
  hiddenBtnPrice?: boolean;
  hiddenLocation?: boolean;
  hiddenHour?: boolean;
  showBtn?: boolean;
  formatDate?: string;
  onClick?: () => void;
}

export const CardEventCom = ({
  img,
  name,
  following,
  start_time,
  hour,
  location,
  restriction,
  price,
  classNameContainer,
  classTitleContainer,
  classTitle,
  classDate,
  hiddenResponsive,
  hiddenPrice,
  hiddenBtnPrice,
  hiddenLocation,
  hiddenHour,
  showBtn,
  formatDate = "dddd, Do MMMM",
  onClick,
}: CardEventComProps & CardEventComElemProps) => {
  return (
    <div
      className={`group 
      h-[400px] sm:h-[500px] 
      bg-cover rounded-2xl shadow-2xl text-white px-4 py-5 relative 
      cursor-pointer
      hover:shadow-[0px_0px_7.5px_0px_#25b7ec] ${classNameContainer}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${img})`,
      }}
    >
      <div className="flex items-center justify-between">
        {following && (
          <p
            className="bg-white/20 px-3 py-1 rounded-4xl 
        text-sm sm:text-base"
          >
            {useGoingLabel(following ?? 0)}
          </p>
        )}

        {!hiddenResponsive && (
          <div className="flex items-center gap-2">
            <span className="pi pi-id-card text-xl"></span>
            <p className="font-bold">{restriction}</p>
          </div>
        )}
      </div>

      <div
        className={`absolute bottom-5 left-0 px-4 grid gap-2 ${
          !showBtn
            ? " lg:h-[160px] lg:group-hover:h-[196px] transition-all duration-300"
            : ""
        }`}
      >
        <div className={`flex flex-col ${classTitleContainer}`}>
          <h1
            className={`font-medium 
          text-3xl sm:text-4xl 
          uppercase bebasNeue line-clamp-2 overflow-hidden text-ellipsis ${classTitle}`}
          >
            {name}
          </h1>
          <p className={`text-base ${classDate}`}>
            {useMoment(start_time).format(formatDate)}
          </p>
        </div>
        {!hiddenLocation && !hiddenHour && (
          <div className="flex items-center gap-2 sm:text-sm">
            {!hiddenLocation && (
              <div className="flex items-center gap-2">
                <span className="pi pi-map-marker"></span>
                <p>{location}</p>
              </div>
            )}

            {!hiddenHour && <p>{hour}</p>}
          </div>
        )}

        {!hiddenBtnPrice && (
          <div
            className={`${
              !showBtn
                ? "lg:opacity-0 lg:max-h-0 mt-3 group-hover:opacity-100 group-hover:max-h-32"
                : ""
            } overflow-hidden grid grid-cols-2 gap-2 transition-all duration-300 `}
          >
            <Button
              className="w-full rounded-3xl! uppercase btnStyle btnbord"
              onClick={onClick}
            >
              <span className="font-bold text-xs">Book Now!</span>
            </Button>

            {!hiddenPrice && (
              <div className="text-center">
                <p className="font-bold text-3xl">${price}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
