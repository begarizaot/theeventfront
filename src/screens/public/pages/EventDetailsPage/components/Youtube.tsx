import ReactPlayer from "react-player/youtube";

export const YoutubeComp = () => {
  return (
    <div className="mx-auto max-w-[80rem] px-4 sm:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="col-span-1">
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" width={"auto"} />
        </div>
        <div className="col-span-1">
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" width={"auto"} />
        </div>
        {/* <div className="col-span-1">
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" width={"auto"} />
        </div> */}
      </div>
    </div>
  );
};
