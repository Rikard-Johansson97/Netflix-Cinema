import { useGetVideoData } from "@/hooks/useGetVideoData";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import MovieOverview from "../MovieOverview/MovieOverview";
interface Props {
  movieId?: string | string[] | undefined;
  movieTitle?: string | undefined;
}

const FallbackVideo = ({ height, setAspectRatio }) => {
  return (
    <div className=''>
      <ReactPlayer
        className='aspect-video'
        url={`https://www.youtube.com/watch?v=YAFDW0wowXk&ab_channel=Charles`}
        width={"100%"}
        height={height}
        style={{ transition: "300ms" }}
        onPlay={() => {
          setAspectRatio(9);
        }}
        onPause={() => {
          setAspectRatio(4);
        }}
      />
    </div>
  );
};

const Banner = ({ movieTitle, movieId }: Props) => {
  const { videoData, isLoading } = useGetVideoData(movieTitle as string);
  const videoId = videoData?.items?.[0]?.id?.videoId;

  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(4);

  const updateSize = (newHeight: number) => {
    setHeight(window.innerWidth * (newHeight / 16));
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateSize(aspectRatio));
    updateSize(aspectRatio);

    return () =>
      window.removeEventListener("resize", () => updateSize(aspectRatio));
  }, [aspectRatio]);

  if (isLoading) {
    // Render a loading spinner or some other placeholder view
    return <div>Loading...</div>;
  }

  if (!videoId) {
    // Render the fallback video component
    return <FallbackVideo height={height} setAspectRatio={setAspectRatio} />;
  }

  return (
    <div className=''>
      <ReactPlayer
        className='aspect-video'
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width={"100%"}
        height={height}
        style={{ transition: "300ms" }}
        onPlay={() => {
          setAspectRatio(9);
        }}
        onPause={() => {
          setAspectRatio(4);
        }}
      />
    </div>
  );
};
export default Banner;
