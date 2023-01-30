import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Cinema from "@/components/Cinema/Cinema";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <div className='bg-lightBackground mx-auto min-h-screen'>
      <Navbar />
      <Cinema />
    </div>
  );
};

export default Movie;
