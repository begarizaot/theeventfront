import { Button, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { CardArtistCom } from "../../../../../components";

interface AllArtistsProps {
  list: any;
  loading?: boolean;
}

export const AllArtistsComp = ({ list, loading }: AllArtistsProps) => {
  const midIndex = Math.ceil((list ?? []).length / 2);
  const length = (list ?? []).length;

  const showAll = length == 2 || length > 5;

  const ViewAllArt = () => {
    return (
      <div
        key="center-item"
        className="col-span-2 flex flex-col items-center justify-center my-4 lg:my-0"
      >
        <p className="text-4xl font-semibold mb-2 text-center uppercase sm:w-60 bebasNeue">
          Artists currently on Tour
        </p>
        <Link to={"allArtist"}>
          <Button className="w-40 rounded-3xl! uppercase btnStyle btnbgPrimary">
            <span className="font-bold text-xs">View All</span>
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div className="mt-10 sm:my-12 bgArtists">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mx-auto max-w-[80rem] gap-3 px-4 sm:px-6 pb-3">
        {loading && (
          <>
            <div className="col-span-1 lg:col-span-1 h-40">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
            <div className="col-span-1 lg:col-span-2 h-40">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
            <div className="col-span-1 lg:col-span-1 h-40">
              <Skeleton.Node
                active
                className="bg-white/20 w-full! rounded-xl h-full!"
              />
            </div>
          </>
        )}

        {!loading &&
          (list ?? [])?.map((artist: any, index: any) => (
            <>
              {index === midIndex && showAll && ViewAllArt()}
              <CardArtistCom
                artist={artist}
                key={index}
                className={`
                ${index == 0 || index == 7 ? "col-span-1 lg:col-span-1" : ""}
                ${
                  length > 2 && (index == 1 || index == 6)
                    ? "lg:col-span-2"
                    : ""
                }
                ${index == 3 || index == 4 ? "hidden lg:block" : ""} 
              `}
              />
            </>
          ))}
        {!showAll && !loading && list?.length > 0 && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            {ViewAllArt()}
          </div>
        )}
      </div>
    </div>
  );
};
