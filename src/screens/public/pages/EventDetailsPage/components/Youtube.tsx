import ReactPlayer from "react-player/youtube";

interface YoutubeProps {
  list: any[];
}

export const YoutubeComp = ({ list }: YoutubeProps) => {
  return (
    <div className="mx-auto max-w-[80rem] px-4 sm:px-6 py-4">
      <div
        className={`grid grid-cols-1 gap-3 ${
          list?.length == 2
            ? "sm:grid-cols-2"
            : list?.length == 3
            ? "sm:grid-cols-3"
            : "sm:grid-cols-1"
        }`}
      >
        {list?.length > 0 &&
          list?.map((item, index) => (
            <div className="col-span-1" key={index}>
              <ReactPlayer url={item} width={"auto"} />
            </div>
          ))}
      </div>
    </div>
  );
};
