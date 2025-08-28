import { Link } from "react-router-dom";

import {
  AllCarouselComp,
  ComDescription,
  TextPrimary,
} from "../../../../../components";
import { useMoment } from "../../../../../hooks";

interface DescriptionCompProps {
  dataEvent: any;
}

export const DetailsComp = ({ dataEvent }: DescriptionCompProps) => {
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
            {/* <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Hours</h2>
              <p className="text-sm">{`${useMoment(
                dataEvent?.start_date
              ).format("hh:mm a")} - ${useMoment(dataEvent?.end_date).format(
                "hh:mm a"
              )}`}</p>
            </div> */}
            {/* contact */}
            <div className="grid gap-1">
              <h2 className="text-2xl bebasNeue">Organizers</h2>
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
          {(dataEvent?.urls_images_advertising ?? [])?.length > 0 && (
            <div className="col-span-1 gap-2 hidden sm:flex flex-col">
              <h2 className="text-2xl bebasNeue">Sponsors</h2>
              <AllCarouselComp
                list={dataEvent?.urls_images_advertising ?? []}
                dotPosition="right"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
