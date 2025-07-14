import { useEventDetails } from "./useEventDetails";
import { DetailsComp, ImgTitleComp, YoutubeComp } from "./components";
import { AllCarouselComp, MetaDataCom } from "../../../../components";

const { VITE_APITHEEVENT } = import.meta.env;

export const EventDetailsPage = () => {
  const { eventMeta, eventDetail, eventShare, contextHolder } =
    useEventDetails();

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
