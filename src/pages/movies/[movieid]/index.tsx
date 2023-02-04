import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Cinema from "@/components/Cinema/Cinema";
import MovieOverview from "@/components/MovieOverview/MovieOverview";
import Banner from "@/components/Banner/Banner";
import useFetchMovieId from "@/hooks/useFetchMovieId";
import TicketPrice from "@/components/TicketPrice/TicketPrice";

const Movie = () => {
  const router = useRouter();
  const { movieid } = router.query;
  const [movieId, setMovieId] = useState<any>();
  const { data, error, loading } = useFetchMovieId(movieid as string);

  React.useEffect(() => {
    if (router.isReady) {
      setMovieId(router.query);
    }
  }, [router.isReady]);

  if (loading) return <h2>LOADING</h2>;

  console.log(movieId);

  return (
    <div
      suppressHydrationWarning={true}
      className='bg-background min-h-screen w-full mx-auto '>
      <Navbar />
      <Banner movieTitle={data?.title} movieId={movieid} />
      <div className='flex justify-center flex-col 2xl:flex-row lg:justify-start sm:p-10 p-4 items-start'>
        <MovieOverview movieId={movieid} movieData={data} />
        <div className='flex flex-col lg:items-start m-auto lg:flex-row w-full mx-auto flex-1 '>
          <Cinema movieId={movieid} movieData={data} />
          <TicketPrice movieId={movieid} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
