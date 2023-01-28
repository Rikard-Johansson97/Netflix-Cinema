import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Movies = () => {
  return (
    <div className='bg-lightBackground'>
      <Navbar />
      <MovieWrapper type='movie' sort='year' limit='20' order='-1' search='' />
    </div>
  );
};

export default Movies;
