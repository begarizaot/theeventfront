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
