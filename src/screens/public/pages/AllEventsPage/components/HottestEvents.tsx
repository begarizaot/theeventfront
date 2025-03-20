import { Link } from "react-router-dom";
import { CardEventCom } from "../../../../../ui/components";

interface HottestEventsProps {
  list: any;
}

export const HottestEventsComp = ({ list }: HottestEventsProps) => {
  return (
    <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem] px-4 sm:px-6 bg-white py-5">
      <h1 className="text-2xl sm:text-3xl font-bold bebasNeue text-primary text-center">
        Hottest Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
        {list.map((event: any) => (
          <Link key={event.id} to="" className="col-span-1">
            <CardEventCom
              {...event}
              classNameContainer="h-90! hover:shadow-none!"
              classTitle="text-xl! lg:text-xl! sourceSans font-bold! "
              classTitleContainer="justify-end"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
