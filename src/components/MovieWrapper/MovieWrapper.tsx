import useFetchData from "@/hooks/useFetchData";
import { Movie } from "@/types/types";
import { UrlQuery } from "@/types/urlQuery";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieWrapper = ({
  type,
  sort,
  order,
  limit,
  genre,
  search,
}: UrlQuery) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  let apiUrl = `${url}/api/movies?type=${type}&sort=${sort}&order=${order}&limit=${limit}`;

  if (genre) apiUrl += `&genre=${genre}`;
  else if (search) apiUrl += `&search=${search}`;

  const { data: movieData, loading, error } = useFetchData(apiUrl);

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
