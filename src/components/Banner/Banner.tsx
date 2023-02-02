import { useGetVideoData } from "@/hooks/useGetVideoData";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
interface Props {
  movieTitle: string;
}

const Banner = ({ movieTitle }: Props) => {
  const { videoData, isLoading } = useGetVideoData(movieTitle);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerWidth * (5 / 16));
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className='youtube-container'>
      <ReactPlayer
        className='aspect-video'
        url={`https://www.youtube.com/watch?v=${videoData?.items[0].id.videoId}`}
        width={width}
        height={height}
        onPlay={() => {}}
      />
    </div>
  );
};

export default Banner;
