import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardEventCom } from "../../../../../components";
import { Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store";
import { getMyEvent } from "../../../../../store/thunks";
import { setLocalStorage } from "../../../../../hooks";
import { FirstUpperCase } from "../../../../../helpers";

export const MyEventsComp = () => {
  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();
  const { eventDate: myEventList, loading: loadingMyEve } = useSelector(
    (state: RootState) => state.myEvent
  );

  useEffect(() => {
    dispatch(getMyEvent());
  }, [dispatch]);

  const onSaveMyEventShared = async(data: any) => {
    await setLocalStorage("eventShared", data);
  };

  return (
    <div className="grid">
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
              onClick={() => onSaveMyEventShared(event)}
            >
              <CardEventCom
                {...event}
                organizer={
                  event?.type_role_id
                    ? `${FirstUpperCase(
                        event?.users_id?.firstName || ""
                      )} ${FirstUpperCase(event?.users_id?.lastName || "")}`
                    : ""
                }
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
    </div>
  );
};
