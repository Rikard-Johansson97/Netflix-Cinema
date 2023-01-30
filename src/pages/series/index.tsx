import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import Navbar from "@/components/Navbar/Navbar";
import { FilterContext } from "@/context/filterContext";
import React, { FC, useContext } from "react";

interface SeriesProps {}

const Series: FC<SeriesProps> = ({}) => {
  const { type, sort, order, limit, genre, search } = useContext(FilterContext);
  return (
    <div className='bg-lightBackground'>
      <Navbar />
      <MovieWrapper
        type={"series"}
        sort={sort}
        order={order}
        limit={limit}
        genre={genre}
        search={search}
      />
    </div>
  );
};

export default Series;
