import { useAllArticts } from "./useAllArticts";
import { CardArtistCom, MetaDataCom } from "../../../../components";
import { Empty, Pagination, Skeleton } from "antd";
import { Link } from "react-router-dom";

const { VITE_APITHEEVENT } = import.meta.env;

export const AllArtistPage = () => {
  const { page, sizePage, loading, listArticts, onPageChange } =
    useAllArticts();

  return (
    <>
      <MetaDataCom title={"All Events"} url={`${VITE_APITHEEVENT}/allEvents`} />
      <div className="bgGradient pt-16 min-h-screen">
        <div className="grid grid-cols-1 w-full mx-auto  max-w-[80rem]">
          <div className="flex flex-col justify-center gap-4 px-4 sm:px-6">
            <h1 className="text-xl sm:text-3xl font-bold bebasNeue text-center">
              All Artists
            </h1>
          </div>
          {/* events */}
          <div className="col-span-1 mt-6">
            {!loading && !listArticts?.length && (
              <div className="col-span-1 h-60 flex items-center justify-center">
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  classNames={{ description: "text-white!" }}
                  className="m-2!"
                  description="No events found"
                />
              </div>
            )}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
                {[1, 2, 3].map((ind: any) => (
                  <div className="col-span-1 h-40" key={ind}>
                    <Skeleton.Node
                      active
                      className="bg-white/20 w-full! rounded-xl h-full!"
                    />
                  </div>
                ))}
              </div>
            )}
            {!loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 contListEvents">
                {(listArticts ?? [])?.map((item: any) => (
                  <CardArtistCom artist={item} className="col-span-1" />
                ))}
              </div>
            )}
          </div>
          {listArticts?.length && (
            <div className="col-span-1 mt-6">
              <Pagination
                align="center"
                defaultCurrent={page}
                total={sizePage.total}
                onChange={(ev) => onPageChange(ev)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
