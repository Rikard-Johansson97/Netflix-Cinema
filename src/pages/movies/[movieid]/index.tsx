import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Cinema from "@/components/Cinema/Cinema";
import MovieOverview from "@/components/MovieOverview/MovieOverview";
import Banner from "@/components/Banner/Banner";
import useFetchMovieId from "@/hooks/useFetchMovieId";

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

  return (
    <div
      suppressHydrationWarning={true}
      className='bg-lightBackground mx-auto min-h-screen w-full'>
      <Navbar />
      <Banner movieTitle={data?.title} movieId={movieId} />
      <MovieOverview movieId={movieId} movieData={data} />
      <Cinema movieId={movieId} movieData={data} />
    </div>
  );
};

export default Movie;
