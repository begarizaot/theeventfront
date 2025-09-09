import { useEventDetails } from "./useEventDetails";
import { DetailsComp, ImgTitleComp, YoutubeComp } from "./components";
import {
  AllCarouselComp,
  MetaDataCom,
  TextPrimary,
} from "../../../../components";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const { VITE_APITHEEVENT } = import.meta.env;

export const EventDetailsPage = () => {
  const { isLoading, eventDetail, eventShare, contextHolder } =
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
        <ImgTitleComp dataEvent={{ ...eventDetail, share: eventShare }} />

        <div className="mt-5">
          <DetailsComp dataEvent={{ ...eventDetail, share: eventShare }} />
        </div>

        {(eventDetail?.urls_images_advertising ?? [])?.length > 0 && (
          <div className="my-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-2xl bebasNeue ">Sponsors</h2>
            </div>
            <AllCarouselComp
              list={eventDetail?.urls_images_advertising ?? []}
            />
          </div>
        )}

        <YoutubeComp list={eventDetail?.url_youtube ?? []} />

        <div className="grid gap-1 px-4 sm:px-6">
          <h2 className="text-2xl bebasNeue">Organizers</h2>
          <div className="flex gap-2">
            <Link
              to={`tel:${eventDetail?.users_id?.country_id?.code}${eventDetail?.users_id?.phoneNumber}`}
              className="bg-white px-2 py-[3px] rounded-full flex items-center"
            >
              <TextPrimary
                label={
                  <>
                    <span className="pi pi-phone text-[10px]"></span>
                    {eventDetail?.users_id?.country_id?.code}{" "}
                    {eventDetail?.users_id?.phoneNumber}
                  </>
                }
                className="text-xs gap-2 flex items-center"
              />
            </Link>

            <Link
              to={`mailto:${eventDetail?.users_id?.email}`}
              className="bg-white px-2 py-[3px] rounded-full flex items-center"
            >
              <TextPrimary
                label={
                  <>
                    <span className="pi pi-envelope text-[10px]"></span>
                    {eventDetail?.users_id?.email}
                  </>
                }
                className="text-xs gap-2 flex items-center"
              />
            </Link>
          </div>
        </div>

        {/* <OtherEventsComp list={listOtherEvent} /> */}
      </div>
    </>
  );
};
