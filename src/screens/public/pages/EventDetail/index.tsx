import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

import { Details, ImageEvent } from "./components";

import { BtnTicket, FromUi, SkeletonDetail, SkeletonImage } from "./ui";
import { useEventDetail } from "../../../../hooks";
import { VideoId } from "../../../../helpers";

import { Skeleton } from "primereact/skeleton";

export const EventDetailPage = () => {
  const { id } = useParams();
  const { eventDetail, isLoading } = useEventDetail(id);

  return (
    <>
      <div className="EventDetailPage grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
        <div className="col-12">
          {isLoading && <SkeletonImage />}
          {!isLoading && <ImageEvent data={eventDetail} />}
        </div>
        <div className="col-12">
          {isLoading && <SkeletonDetail />}
          {!isLoading && <Details data={eventDetail} />}
        </div>
        <div className="col-12">
          {isLoading && <Skeleton className="h-18rem"></Skeleton>}
          {!isLoading && (
            <YouTube
              videoId={VideoId(eventDetail?.youtube_url)}
              opts={{ width: "100%", height: "300" }}
            />
          )}
        </div>
      </div>
      {!isLoading && (
        <div className="fixed bottom-0 px-4 w-full bgBody pb-3 pt-2 z-1 shadow-3 sm:hidden">
          <div className="text-white flex justify-content-center mb-2">
            <FromUi min={eventDetail?.minValue} max={eventDetail?.maxValue} />
          </div>
          <BtnTicket data={eventDetail} />
        </div>
      )}
    </>
  );
};
