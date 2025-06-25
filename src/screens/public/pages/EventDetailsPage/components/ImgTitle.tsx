import { Button } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../../../../context";
import { setLocalStorage, useMoment, useQuery } from "../../../../../hooks";

interface ImgTitleCompProps {
  dataEvent: any;
}

export const ImgTitleComp = ({ dataEvent }: ImgTitleCompProps) => {
  const { onFreeTicket } = useContext(CardContext);
  const navigate = useNavigate();
  const query = useQuery();
  const aff = query.get("aff") ? `?aff=${query.get("aff")}` : "";

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
            : "Book Tickets"}
        </span>
      </Button>
    );
  };

  return (
    <div className="sm:h-[50vh] lg:h-[42vh] mx-auto max-w-[80rem] px-4 sm:px-6">
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
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-2 order-1 sm:order-2">
          <h1 className="text-4xl bebasNeue">{dataEvent?.name}</h1>
          <p>{useMoment(dataEvent?.start_date).format("dddd, Do MMMM")}</p>
          <div className="flex items-center gap-3 text-sm">
            <p className="flex items-center gap-1">
              <span className="pi pi-map-marker"></span>{" "}
              {dataEvent?.event_locations_id?.vicinity ?? ""}
            </p>
            <p>{`${useMoment(dataEvent?.start_date).format(
              "hh:mm a"
            )} - ${useMoment(dataEvent?.end_date).format("hh:mm a")}`}</p>
          </div>

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
