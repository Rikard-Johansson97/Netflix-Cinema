import useFetchData from "@/hooks/useFetchData";
import { Movie } from "@/types/types";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieWrapper = () => {
  const {
    data: movieData,
    loading,
    error,
  } = useFetchData("http://localhost:3000/api/movies");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(movieData);

  return (
    <section className='grid grid-cols-auto-fit-250 p-6 gap-6'>
      {movieData.map(
        (movie: Movie, i: number) =>
          movie.poster && <MovieCard {...movie} key={i} />
      )}
    </section>
  );
};

export default MovieWrapper;
