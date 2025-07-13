import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { theme } from "antd";

import { ComDescription, TextPrimary } from "../../../../../components";
import { useMoment } from "../../../../../hooks";

const { useToken } = theme;

interface DescriptionCompProps {
  dataEvent: any;
}

const Marker = ({ text }: any) => (
  <div
    style={{
      fontSize: "20px",
    }}
  >
    {text}
  </div>
);

export const DetailsComp = ({ dataEvent }: DescriptionCompProps) => {
  const { token } = useToken();

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  return (
    <div className="bgGradient">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2 grid gap-3">
            {/* description */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Description</h2>
              <ComDescription contenido={dataEvent?.description} />
            </div>
            {/* hours */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Hours</h2>
              <p className="text-sm">{`${useMoment(
                dataEvent?.start_date
              ).format("hh:mm a")} - ${useMoment(dataEvent?.end_date).format(
                "hh:mm a"
              )}`}</p>
            </div>
            {/* contact */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Contact Organizers</h2>
              <div className="flex gap-2">
                <Link
                  to={`tel:${dataEvent?.users_id?.country_id?.code}${dataEvent?.users_id?.phoneNumber}`}
                  className="bg-white px-2 py-[3px] rounded-full flex items-center"
                >
                  <TextPrimary
                    label={
                      <>
                        <span className="pi pi-phone text-[10px]"></span>
                        {dataEvent?.users_id?.country_id?.code}{" "}
                        {dataEvent?.users_id?.phoneNumber}
                      </>
                    }
                    className="text-xs gap-2 flex items-center"
                  />
                </Link>

                <Link
                  to={`mailto:${dataEvent?.users_id?.email}`}
                  className="bg-white px-2 py-[3px] rounded-full flex items-center"
                >
                  <TextPrimary
                    label={
                      <>
                        <span className="pi pi-envelope text-[10px]"></span>
                        {dataEvent?.users_id?.email}
                      </>
                    }
                    className="text-xs gap-2 flex items-center"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 gap-2 flex flex-col">
            {dataEvent?.event_locations_id?.location && (
              <>
                <div className="grid gap-1">
                  <h2 className="text-2xl bebasNeue">Event Location</h2>
                  <Link
                    className="w-full h-40 rounded-xl"
                    to={dataEvent.event_locations_id.url}
                    target="_blank"
                  >
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: "AIzaSyDMAS0tkyRk77l10tV3SLhDYtnspY2ZZdY",
                      }}
                      defaultCenter={dataEvent.event_locations_id.location}
                      defaultZoom={15}
                    >
                      <Marker
                        {...dataEvent.event_locations_id.location}
                        text="📍"
                      />
                    </GoogleMapReact>
                  </Link>
                </div>

                <div className="grid gap-1">
                  <p className="text-sm">{dataEvent.vanue}</p>
                  <p className="text-sm">
                    {dataEvent.event_locations_id.formatted_address}
                  </p>
                </div>
              </>
            )}
            {/* <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Tags</h2>
              <div className="flex flex-wrap gap-2 text-xs">
                {dataEvent?.categories?.map((category: any, index: any) => (
                  <p
                    key={index}
                    className="border border-white px-2 py-[2px] rounded-full"
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div> */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Share</h2>
              <div className="flex flex-wrap gap-3 text-xs">
                {dataEvent?.share?.map((shar: any, index: any) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
