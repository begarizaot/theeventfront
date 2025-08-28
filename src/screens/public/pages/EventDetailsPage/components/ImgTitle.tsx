import { Button, theme } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardContext } from "../../../../../context";
import { setLocalStorage, useMoment, useQuery } from "../../../../../hooks";

const { useToken } = theme;

interface ImgTitleCompProps {
  dataEvent: any;
}

export const ImgTitleComp = ({ dataEvent }: ImgTitleCompProps) => {
  const { onFreeTicket } = useContext(CardContext);
  const navigate = useNavigate();
  const query = useQuery();
  const aff = query.get("aff") ? `?aff=${query.get("aff")}` : "";

  const { token } = useToken();

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  const onBookTicket = async () => {
    onFreeTicket(false);
    await setLocalStorage("event", dataEvent);
    navigate(`/book-tickets/${dataEvent?.id_event}${aff}`);
  };

  const isEventInActive =
    dataEvent?.event_status_id && dataEvent?.event_status_id?.id != 1;

  const onBtn = ({ className }: any) => {
    return (
      <Button
        className={`w-full sm:w-40 rounded-3xl! uppercase btnStyle ${className}`}
        onClick={onBookTicket}
        disabled={isEventInActive}
      >
        <span
          className={`font-bold text-xs ${
            isEventInActive ? "text-white" : "text-black"
          }`}
        >
          {isEventInActive
            ? `${dataEvent?.event_status_id?.title} event`
            : "Buy Tickets"}
        </span>
      </Button>
    );
  };

  return (
    <div className=" mx-auto max-w-[80rem] px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 order-2 sm:order-1">
          <div
            className="h-90 bg-cover rounded-xl shadow"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${
                dataEvent?.url_image ?? ""
              })`,
            }}
          ></div>

          <div className="grid gap-1 mt-2">
            <h2 className="text-2xl bebasNeue">Share</h2>
            <div className="flex flex-wrap gap-3 text-xs">
              {dataEvent?.share?.map((shar: any, index: any) => {
                if (shar.click) {
                  return (
                    <div
                      key={index}
                      onClick={shar.click}
                      className="w-7 h-7 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: token.colorPrimary }}
                    >
                      <span className={`${shar.icon} text-xs`}></span>
                    </div>
                  );
                }
                return (
                  <Link
                    to={isMobileDevice() ? shar.linkMovil : shar.link}
                    key={index}
                    target="_blank"
                  >
                    <div
                      className=" w-7 h-7 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: token.colorPrimary }}
                    >
                      <span className={`${shar.icon} text-xs`}></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-2 order-1 sm:order-2">
          <h1 className="text-4xl bebasNeue">{dataEvent?.name}</h1>
          <p>{useMoment(dataEvent?.start_date).format("dddd, Do MMMM")}</p>
          <p>{`${useMoment(dataEvent?.start_date).format(
            "hh:mm a"
          )} - ${useMoment(dataEvent?.end_date).format("hh:mm a")}`}</p>

          <Link
            className="w-full"
            to={dataEvent.event_locations_id.url}
            target="_blank"
          >
            <p className="flex items-center gap-1 text-sm">
              <span className="pi pi-map-marker"></span> {dataEvent.vanue ?? ""}
              , {dataEvent.event_locations_id.formatted_address ?? ""}
            </p>
          </Link>

          {dataEvent?.categories_id && (
            <div className="flex flex-wrap gap-2 text-xs">
              <p className="border border-white px-2 py-[2px] rounded-full">
                {dataEvent?.categories_id?.title}
              </p>
            </div>
          )}
          <p className="text-sm">Views: {dataEvent?.following ?? 0}</p>

          {onBtn({ className: "mt-2 hidden! sm:block!" })}
        </div>

        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-2 order-3 mb-3 sm:hidden!">
          {onBtn({})}
        </div>
      </div>
    </div>
  );
};
