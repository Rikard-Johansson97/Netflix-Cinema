import useFetchData from "@/hooks/useFetchData";
import { FilterContextData } from "@/types/filterContextData";
import { Movie } from "@/types/types";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieWrapper = ({ type, sort, order, limit, genre, search }: any) => {
  console.log(genre);
  const {
    data: movieData,
    loading,
    error,
  } = useFetchData(type, sort, order, limit, genre, search);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(movieData);
  return (
    <section className='grid grid-cols-auto-fit-250 p-4 gap-4'>
      {movieData.map(
        (movie: Movie, i: number) =>
          movie.poster && <MovieCard {...movie} key={i} />
      )}
    </section>
  );
};

export default MovieWrapper;
