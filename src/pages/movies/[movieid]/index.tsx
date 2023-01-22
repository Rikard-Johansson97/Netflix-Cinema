import React from "react";
import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Movie</div>;
};

export default Movie;
