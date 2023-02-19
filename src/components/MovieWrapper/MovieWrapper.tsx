import useFetchData from "@/hooks/useFetchData";
import { FilterContextData } from "@/types/filterContextData";
import { Movie } from "@/types/types";
import React from "react";
import FadeIn from "../FadeIn/FadeIn";
import MovieCard from "../MovieCard/MovieCard";

const MovieWrapper = ({ type, sort, order, limit, genre, search }: any) => {
  const {
    data: movieData,
    loading,
    error,
  } = useFetchData(type, sort, order, limit, genre, search);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className='grid grid-cols-auto-fit-200 p-4 gap-4'>
      {movieData.map(
        (movie: Movie, i: number) =>
          movie.poster && (
            <FadeIn key={i}>
              <MovieCard {...movie} loading={loading} />
            </FadeIn>
          )
      )}
    </section>
  );
};

export default MovieWrapper;
