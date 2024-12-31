import moment from "moment";
import { Link } from "react-router-dom";

interface EventCardProps {
  data: any;
  link?: string;
  sublink?: string;
  manager?: boolean;
}

export const EventCard = ({
  link = "",
  sublink,
  manager,
  data,
}: EventCardProps) => {
  const image = data?.image && data?.image[0]?.url;

  return (
    <Link
      to={`${link}/${data?.id_event}${sublink ? `/${sublink}` : ""}`}
      className="no-underline text-white"
    >
      <div className="effectBorder p2 borderRadius10">
        <div className="relative h-28rem borderRadius10">
          {manager && data?.manager && (
            <div className="absolute z-1 right-0 mr-3 mt-3 bg-white text-black-alpha-90 p-2 borderRadius10 text-sm">
              {data?.manager}
            </div>
          )}
          <div
            className="bg-cover bg-center bg-no-repeat absolute w-full h-full borderRadius10"
            style={{
              backgroundImage: `linear-gradient(180deg, #0f0f0f00 20%, #0f0f0fcc 50%, #0f0f0f 60%),url(${image})`,
            }}
          ></div>
          <div className="absolute bottom-0 py-2 px-3 w-full">
            <div className="grid">
              <div className="col-12 text-center pb-0">
                <h4 className="m-0">
                  {moment(data?.start_date).format("dddd")}
                </h4>
                <p className="m-0 text-sm">
                  {moment(data?.start_date).format("MMMM")}
                </p>
                <h1 className="m-0 text-4xl">
                  {moment(data?.start_date).format("DD")}
                </h1>
              </div>
              <div className="col-12 text-center pt-0">
                <h3 className="m-0">{data?.event_name}</h3>
              </div>
              <div className="col-12 flex align-items-center justify-content-between">
                <div className="flex flex-column gap-1">
                  <div className="flex">
                    <span className="pi pi-map-marker text-lg textPrimary mr-2"></span>
                    <span className="text-sm">{data?.map_id?.label}</span>
                  </div>
                  <div className="flex">
                    <span className="pi pi-clock text-lg textPrimary mr-2"></span>
                    <span className="text-sm">
                      {moment(data?.start_date).format("hh:mm a")} -{" "}
                      {moment(data?.end_date).format("hh:mm a")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-column gap-1">
                  <div className="flex">
                    <span className="pi pi-id-card text-lg textPrimary mr-2"></span>
                    <span className="text-sm">
                      {data?.event_age_restriction_id?.name}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="pi pi-ticket text-lg textPrimary mr-2"></span>
                    <span className="text-sm">
                      ${data?.minValue}
                      {data?.maxValue > 0 && <span> - ${data?.maxValue}</span>}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
