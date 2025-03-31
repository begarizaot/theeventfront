import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";

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
  return (
    <div className="bgGradient">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2 grid gap-3">
            {/* description */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Description</h2>
              <p className="text-sm">{dataEvent?.description}</p>
            </div>
            {/* hours */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Hours</h2>
              <p className="text-sm">{dataEvent?.hour}</p>
            </div>
            {/* contact */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Contact Organizers</h2>
              <div className="flex gap-2">
                <Link
                  to={`tel:${dataEvent?.organizer?.phone}`}
                  className="bg-white flex items-center text-primary px-2 py-[3px] rounded-full text-xs gap-2"
                >
                  <span className="pi pi-phone text-[10px]"></span>
                  {dataEvent?.organizer?.phone}
                </Link>
                <Link
                  to={`mailto:${dataEvent?.organizer?.email}`}
                  className="bg-white flex items-center text-primary px-2 py-[3px] rounded-full text-xs gap-2"
                >
                  <span className="pi pi-envelope text-[10px]"></span>
                  {dataEvent?.organizer?.email}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 gap-2 flex flex-col">
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Event Location</h2>
              <div className="w-full h-40 rounded-xl">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDMAS0tkyRk77l10tV3SLhDYtnspY2ZZdY",
                  }}
                  defaultCenter={dataEvent.center}
                  defaultZoom={dataEvent.zoom}
                >
                  <Marker lat={4.710989} lng={-74.072092} text="📍" />
                </GoogleMapReact>
              </div>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">
                purus suscipi Staduim, Birmingham
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sit amet tellus non risus ullamcorper pulvinar ut eu ex.
              </p>
            </div>
            <div className="grid gap-1">
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
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Share</h2>
              <div className="flex flex-wrap gap-3 text-xs">
                {dataEvent?.share?.map((shar: any, index: any) => (
                  <Link to={shar.link} key={index}>
                    <div className="bgPrimary w-7 h-7 flex items-center justify-center rounded-full">
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
