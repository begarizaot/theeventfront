import { useEventDetails } from "./useEventDetails";
import { DetailsComp, ImgTitleComp, OtherEventsComp, YoutubeComp } from "./components";
import { AllCarouselComp } from "../../../../ui/components";

export const EventDetailsPage = () => {
  const { eventDatail, defaultProps, listOtherEvent } = useEventDetails();

  return (
    <>
      <div
        className="absolute h-[50vh] inset-0 bg-cover opacity-30"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%),url(${eventDatail?.img})`,
        }}
      ></div>
      <div className="z-10 relative pt-18 mb-10">
        {/* img and title */}
        <ImgTitleComp dataEvent={eventDatail} />

        {/* details */}
        <DetailsComp dataEvent={{ ...eventDatail, ...defaultProps }} />

        <YoutubeComp />

        <div className="my-20">
          <AllCarouselComp />
        </div>

        {/* other events */}
        <OtherEventsComp list={listOtherEvent} />
      </div>
    </>
  );
};
