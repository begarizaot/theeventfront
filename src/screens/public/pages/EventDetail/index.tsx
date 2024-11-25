import YouTube from "react-youtube";
import { Details, ImageEvent } from "./components";
import { useEventDetail } from "./useEventDetail";
import { BtnTicket, FromUi } from "./ui";

export const EventDetailPage = () => {
  const { eventDetail, shareData, detail } = useEventDetail();

  return (
    <>
      <div className="EventDetailPage grid max-width-80 mx-auto px-4 align-content-start sm:px-6 pt-8 text-white">
        <div className="col-12">
          <ImageEvent data={{ ...eventDetail, shareData }} />
        </div>
        <div className="col-12">
          <Details data={{ ...eventDetail, detail }} />
        </div>
        <div className="col-12">
          <YouTube
            videoId="mvHzpuRBxJY"
            opts={{ width: "100%", height: "300" }}
          />
        </div>
      </div>
      <div className="fixed bottom-0 px-4 w-full bgBody pb-3 pt-2 z-1 shadow-3 sm:hidden">
        <div className="text-white flex justify-content-center mb-2">
          <FromUi />
        </div>
        <BtnTicket />
      </div>
    </>
  );
};
