import React, { useEffect, useState } from "react";

const VideoPlayer: React.FC<{ url: string }> = ({ url }) => {
  const [ReactPlayer, setReactPlayer] = useState<any>(null);

  useEffect(() => {
    import("react-player").then((mod) => setReactPlayer(() => mod.default));
  }, []);

  if (!ReactPlayer) return <></>;

  return <ReactPlayer url={url} controls width="100%" />;
};

export default VideoPlayer;
