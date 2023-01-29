import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import Navbar from "@/components/Navbar/Navbar";
import { FilterContext } from "@/context/filterContext";
import React, { useContext } from "react";

const Movies = () => {
  const {
    type,
    setType,
    sort,
    setSort,
    order,
    setOrder,
    limit,
    setLimit,
    genre,
    setGenre,
    search,
    setSearch,
  } = useContext(FilterContext);
  return (
    <div className='bg-lightBackground'>
      <Navbar />
      <MovieWrapper
        type={type}
        sort={sort}
        order={order}
        limit={limit}
        genre={genre}
        search={search}
      />
    </div>
  );
};

export default Movies;
