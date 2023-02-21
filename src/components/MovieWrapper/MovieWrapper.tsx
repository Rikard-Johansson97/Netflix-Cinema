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

  if (loading) {
    return (
      <section className=' grid grid-cols-auto-fit-200 p-4 gap-4'>
        {Array(50)
          .fill("")
          .map((_, i: number) => (
            <div key={i} className='animate-pulse'>
              <div className='rounded-lg bg-black aspect-[10/16]'></div>
              <div className='h-5 my-2 rounded-lg w-full bg-black  '></div>
              <div className='h-3 w-10 rounded-lg bg-black '></div>
            </div>
          ))}
      </section>
    );
  }

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
