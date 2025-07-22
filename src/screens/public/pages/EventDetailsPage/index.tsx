import { useEventDetails } from "./useEventDetails";
import { DetailsComp, ImgTitleComp, YoutubeComp } from "./components";
import { AllCarouselComp, MetaDataCom } from "../../../../components";
import { Skeleton } from "antd";

const { VITE_APITHEEVENT } = import.meta.env;

export const EventDetailsPage = () => {
  const { isLoading, eventMeta, eventDetail, eventShare, contextHolder } =
    useEventDetails();

  if (isLoading) {
    return (
      <div className="z-10 relative pt-18 mb-10 mx-auto max-w-[80rem] px-4 sm:px-6 grid gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <div className="col-span-1 h-80">
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl h-full!"
            />
          </div>
          <div className="col-span-2 grid gap-3">
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl max-h-10"
            />
            <Skeleton.Node
              active
              className="bg-white/20 w-[60%]! rounded-xl max-h-10"
            />
            <Skeleton.Node
              active
              className="bg-white/20 w-[30%]! rounded-xl max-h-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 ">
          <div className="col-span-2 h-80">
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl h-full!"
            />
          </div>
          <div className="col-span-1 h-40">
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl h-full!"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 ">
          <div className="col-span-1 h-80">
            <Skeleton.Node
              active
              className="bg-white/20 w-full! rounded-xl h-full!"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {contextHolder}

      <MetaDataCom
        {...eventMeta}
        url={`${VITE_APITHEEVENT}/event/${eventMeta?.id ?? ""}`}
      />

      <MetaDataCom
        title={eventDetail?.name ?? ""}
        urlImage={eventDetail?.url_image ?? ""}
        url={`${VITE_APITHEEVENT}/event/${eventDetail?.id_event ?? ""}`}
      />

      <div
        className="absolute h-[50vh] inset-0 bg-cover opacity-30"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${
            eventDetail?.url_image ?? ""
          })`,
        }}
      ></div>
      <div className="z-10 relative pt-18 mb-10">
        <ImgTitleComp dataEvent={eventDetail} />

        <div className="mt-5">
          <DetailsComp dataEvent={{ ...eventDetail, share: eventShare }} />
        </div>

        <YoutubeComp list={eventDetail?.url_youtube ?? []} />

        <div className="my-20">
          <AllCarouselComp list={eventDetail?.urls_images_advertising ?? []} />
        </div>

        {/* <OtherEventsComp list={listOtherEvent} /> */}
      </div>
    </>
  );
};
