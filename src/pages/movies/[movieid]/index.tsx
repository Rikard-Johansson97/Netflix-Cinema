import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Cinema from "@/components/Cinema/Cinema";

const Movie = () => {
  const [movieId, setMovieId] = useState<any>();
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      setMovieId(router.query);
    }
  }, [router.isReady]);

  return (
    <div
      suppressHydrationWarning={true}
      className='bg-lightBackground mx-auto min-h-screen'>
      <Navbar />
      <Cinema movieId={movieId} />
    </div>
  );
};

export default Movie;
