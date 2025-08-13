import { Button } from "antd";
import { setLocalStorage, useMoment } from "../../../../hooks";
import { useArtist } from "./useArtist";
import SpotifyPlayer from "@nuyhman/react-spotify-player";
import { Link } from "react-router-dom";

export const ArtistDetailsPage = () => {
  const { artistDetail } = useArtist();

  const lengthArtist = (artistDetail?.events_ids ?? []).length;

  const onSaveLocalStorage = (event: any) => {
    setLocalStorage("event", event);
  };

  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pt-16 w-full mx-auto max-w-[80rem] px-4 sm:px-6 gap-3 pb-6 min-h-screen`}
      >
        <div className="col-span-1">
          <div className="bg-white rounded-sm shadow-md">
            <div className="flex flex-col">
              <img
                src={artistDetail?.url_image}
                alt={artistDetail?.name}
                className="rounded-tr-sm rounded-tl-sm"
              />
              <h1 className="text-xl font-bold text-black mt-1 uppercase bebasNeue px-2">
                {artistDetail?.name}
              </h1>
            </div>
          </div>

          {artistDetail?.url_spotify && (
            <SpotifyPlayer
              resourceId={(artistDetail?.url_spotify as any) ?? ""}
              theme="light"
              className="mt-3"
            >
              {({ isLoading, spotify }) => (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 size-full rounded-xl">
                      <img
                        src={spotify?.thumbnail_url}
                        alt={spotify?.title}
                        className="blur w-full h-40 rounded-xl"
                      />
                    </div>
                  )}
                </>
              )}
            </SpotifyPlayer>
          )}
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid gap-2">
            {lengthArtist > 0 &&
              (artistDetail?.events_ids ?? []).map((event: any) => (
                <div className="col-span-1" key={event.id_event}>
                  <div className="bg-white rounded-sm shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-6 text-black gap-3">
                      <div className="col-span-1 bg-black/20 flex items-center justify-center py-2">
                        <div className="text-center flex flex-col ">
                          <span className="text-lg font-bold">
                            {useMoment(event.start_date).format("MMM")}
                          </span>
                          <span className="text-lg/3 font-bold">
                            {useMoment(event.start_date).format("DD")}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 sm:col-span-3 py-1 sm:py-3 px-2 sm:px-0">
                        <h1 className="text-lg font-bold uppercase line-clamp-1">
                          {event.name}
                        </h1>
                        <div className="flex items-center gap-2">
                          <span className="pi pi-map-marker text-sm"></span>
                          <p className="text-sm">
                            {event.event_locations_id.vicinity}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1 sm:col-span-2 flex items-center justify-center py-2 px-2 sm:px-0 sm:pr-3">
                        <Link
                          to={`/event/${event?.id_event}`}
                          className="w-full"
                          onClick={() => onSaveLocalStorage(event)}
                        >
                          <Button className="w-full rounded-3xl! uppercase btnStyle bg-black/20!">
                            <span className="font-bold text-xs">
                              View Event
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
