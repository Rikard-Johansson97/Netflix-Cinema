import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Cinema from "@/components/Cinema/Cinema";

const Movie = () => {
  const router = useRouter();
  const { movieid } = router.query;

  return (
    <div
      suppressHydrationWarning={true}
      className='bg-lightBackground mx-auto min-h-screen'>
      <Navbar />
      <Cinema id={movieid} />
    </div>
  );
};

export default Movie;
