import { useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Details, ImageEvent } from "./components";
import { BtnTicket, FromUi, SkeletonDetail, SkeletonImage } from "./ui";

import { MetaTags } from "../../../../hooks";
import { VideoId } from "../../../../helpers";
import { environment } from "../../../../environments/environment";

import { getEventDetail } from "../../../../store/slices";
import { AppDispatch, RootState } from "../../../../store";

import { Skeleton } from "primereact/skeleton";

export const EventDetailPage = () => {
  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const { selectedEvent, loading } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    dispatch(getEventDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <MetaTags
        title={selectedEvent?.event_name || ""}
        url={`${environment?.PUBLIC_URL || ""}/event/5e55d9aed0b228671144`}
        image={selectedEvent?.image[0]?.url || ""}
      />
      <div className="EventDetailPage grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
        <div className="col-12">
          {loading && <SkeletonImage />}
          {!loading && <ImageEvent data={selectedEvent} />}
        </div>
        <div className="col-12">
          {loading && <SkeletonDetail />}
          {!loading && <Details data={selectedEvent} />}
        </div>
        <div className="col-12">
          {loading && <Skeleton className="h-18rem"></Skeleton>}
          {!loading && (
            <YouTube
              videoId={VideoId(selectedEvent?.youtube_url)}
              opts={{ width: "100%", height: "300" }}
            />
          )}
        </div>
      </div>
      {!loading && (
        <div className="fixed bottom-0 px-4 w-full bgBody pb-3 pt-2 z-1 shadow-3 sm:hidden">
          <div className="text-white flex justify-content-center mb-2">
            <FromUi
              min={selectedEvent?.minValue}
              max={selectedEvent?.maxValue}
            />
          </div>
          <BtnTicket data={selectedEvent} />
        </div>
      )}
    </>
  );
};
