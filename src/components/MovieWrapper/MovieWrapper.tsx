import useFetchData from "@/hooks/useFetchData";
import { Movie } from "@/types/types";
import { UrlQuery } from "@/types/urlQuery";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieWrapper = ({ type, sort, order, limit, genre }: UrlQuery) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  let urlWithGenre = `${url}/api/movies?type=${type}&sort=${sort}&order=${order}&limit=${limit}`;
  if (genre) {
    urlWithGenre += `&genre=${genre}`;
  }

  const { data: movieData, loading, error } = useFetchData(urlWithGenre);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(movieData);
  return (
    <section className='grid grid-cols-auto-fill-250 place-self-center p-4 gap-4'>
      {movieData.map(
        (movie: Movie, i: number) =>
          movie.poster && <MovieCard {...movie} key={i} />
      )}
    </section>
  );
};

export default MovieWrapper;
