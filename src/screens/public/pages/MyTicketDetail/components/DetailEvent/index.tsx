import moment from "moment";

interface DetailEventProps {
  data: any;
}

export const DetailEvent = ({ data }: DetailEventProps) => {
  const imageEvene = (data?.image && data?.image[0]?.url) || "";

  return (
    <div className="grid">
      <div className="col-12 sm:col-6 lg:col-4 h-25rem">
        <div className=" p-1 border-round w-full h-full relative">
          <div
            className="bgFull bg-center bg-no-repeat absolute w-full h-full border-round"
            style={{
              backgroundImage: `url("${imageEvene}")`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-column gap-2 justify-content-center col-12 sm:col-6 lg:col-8">
        <h3 className="m-0 text-center">{data?.event_name}</h3>

        <div className="flex flex-column gap-2">
          <div className="text-sm flex align-items-center gap-2">
            <span className="pi pi-map-marker textPrimary"></span>
            {data?.map_id?.labelCompl}
          </div>
          <div className="text-sm flex align-items-center gap-2">
            <span className="pi pi-calendar textPrimary"></span>
            {moment(data?.start_date).format("dddd MMMM DD, YYYY")}
          </div>
        </div>

        <h4 className="m-0 mt-3">Details</h4>
        <div className="flex flex-column gap-1">
          <p className="m-0 text-xs">
            Doors:
            <span className="text-sm ml-1">
              {moment(data?.start_date).format("hh:mm a")} -{" "}
              {moment(data?.end_date).format("hh:mm a")}
            </span>
          </p>
          <p className="m-0 text-xs">
            Event Category:
            <span className="text-sm ml-1">
              {data?.event_category_id?.name}
            </span>
          </p>
          <p className="m-0 text-xs">
            Age:
            <span className="text-sm ml-1">
              {data?.event_age_restriction_id?.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
