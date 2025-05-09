import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardEventCom } from "../../../../../components";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { getMyEvent, getSharedEvents } from "../../../../../store/thunks";
import { useCapitalize, useMoment } from "../../../../../hooks";

export const MyEventsComp = () => {
  const dispatch: AppDispatch = useDispatch();
  const { eventDate: myEventList, loading: loadingMyEve } = useSelector(
    (state: RootState) => state.myEvent
  );
  const { eventDate: sharedList, loading: loadingShared } = useSelector(
    (state: RootState) => state.sharedEvent
  );

  const { FirstLetter } = useCapitalize();

  const [navMyEvents, setNavMyEvents] = useState([
    { id: 1, name: "My Events", active: true },
    { id: 2, name: "Shared Event", active: false },
  ]);
  const [navActive, setNavActive] = useState(1);

  useEffect(() => {
    navActive == 1 && dispatch(getMyEvent());
    navActive == 2 && dispatch(getSharedEvents());
  }, [dispatch, navActive]);

  const handleActive = (id: number) => {
    const updatedNavMyEvents = navMyEvents.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setNavMyEvents(updatedNavMyEvents);
    setNavActive(id);
  };

  return (
    <div className="grid">
      <div className="flex">
        {navMyEvents.map((item) => (
          <div
            key={item.id}
            className={`px-6 cursor-pointer border-b ${
              item.active ? "bgActiveNavElement text-white" : "text-white/20"
            }`}
            onClick={() => handleActive(item.id)}
          >
            <span className="text-lg ">{item.name}</span>
          </div>
        ))}
      </div>

      {navActive == 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {loadingMyEve &&
            [1, 2, 3].map((ind: any) => (
              <div className="col-span-1 h-100! lg:h-80!" key={ind}>
                <Skeleton.Node
                  active
                  className="bg-white/20 w-full! rounded-xl h-full!"
                />
              </div>
            ))}
          {!loadingMyEve &&
            myEventList?.map((event: any) => (
              <Link
                key={event.id}
                to={`/admin/eventDetails/${event?.id_event}`}
                className="col-span-1"
              >
                <CardEventCom
                  {...event}
                  restriction={event?.event_restriction_id?.title ?? ""}
                  location={event?.event_locations_id?.vicinity ?? ""}
                  price={event?.event_tickets_ids ?? []}
                  classNameContainer="h-100! lg:h-80! hover:shadow-none!"
                  classTitle="text-xl! lg:text-2xl! font-bold!"
                  hiddenBtnPrice
                  showBtn
                />
              </Link>
            ))}
        </div>
      )}
      {navActive == 2 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {loadingShared &&
            [1, 2, 3].map((ind: any) => (
              <div className="col-span-1 h-100! lg:h-80!" key={ind}>
                <Skeleton.Node
                  active
                  className="bg-white/20 w-full! rounded-xl h-full!"
                />
              </div>
            ))}
          {!loadingShared &&
            sharedList?.map((event: any) => {
              const isDate = useMoment(event?.event_id.start_date).isBefore(
                useMoment()
              );
              return (
                <Link
                  key={event.event_id.id}
                  to={
                    !isDate
                      ? `/admin/eventDetails/${event?.event_id.id_event}`
                      : ""
                  }
                  className="col-span-1"
                >
                  <CardEventCom
                    {...event.event_id}
                    restriction={
                      event?.event_id.event_restriction_id?.title ?? ""
                    }
                    location={
                      event?.event_id.event_locations_id?.vicinity ?? ""
                    }
                    price={event?.event_id.event_tickets_ids ?? []}
                    organizer={`${FirstLetter(
                      event?.event_id.users_id.firstName || ""
                    )} ${FirstLetter(event?.event_id.users_id.lastName || "")}`}
                    classNameContainer={`h-100! lg:h-80! hover:shadow-none! ${
                      isDate ? "opacity-40" : ""
                    }`}
                    classTitle="text-xl! lg:text-2xl! font-bold!"
                    hiddenBtnPrice
                    showBtn
                    isActive={isDate}
                  />
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};
