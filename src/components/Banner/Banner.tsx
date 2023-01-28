import { YoutubeType } from "@/types/youtube";
import React from "react";
import YouTube from "react-youtube";
interface Props {
  videoData: YoutubeType;
}

const Banner = ({ videoData }: Props) => {
  console.log(videoData.items[0].id.videoId);
  return (
    <div id='video-wrapper'>
      <YouTube videoId={videoData.items[0].id.videoId} />
    </div>
  );
};

export default Banner;
