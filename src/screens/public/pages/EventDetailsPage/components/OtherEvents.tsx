import "../scss/OtheEvenets.scss";
import { Link } from "react-router-dom";

import { CardEventCom } from "../../../../../components";

interface OtherEventsProps {
  list: any;
}

export const OtherEventsComp = ({ list }: OtherEventsProps) => {
  return (
    <div className="bgOtherEvents ">
      <div className="my-6 px-4 mx-auto sm:px-6 py-4 bg-cover max-w-[80rem]">
        <h1 className="text-2xl bebasNeue z-10 relative">
          other Events you may like
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mt-2">
          {list?.map((event: any) => (
            <div className="col-span-1">
              <Link key={event.id} to={`/event/${event.id}`} className="flex">
                <CardEventCom
                  {...event}
                  classNameContainer="h-70! sm:h-90! hover:shadow-none! w-full"
                  classTitle="text-xl! sourceSans font-bold!"
                  hiddenBtnPrice
                  showBtn
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
