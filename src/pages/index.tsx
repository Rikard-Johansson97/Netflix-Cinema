import Head from "next/head";
import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import { useGetVideoData } from "@/hooks/useGetVideoData";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import { useContext } from "react";
import { FilterContext } from "@/context/filterContext";

export default function Home() {
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

  // const { videoData, isLoading } = useGetVideoData("godfather");
  // if (isLoading || !videoData) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <Head>
        <title>Create Next App</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-lightBackground mx-auto min-h-screen'>
        <Navbar />
        {/* <Banner videoData={videoData} /> */}
        <MovieWrapper
          type={type}
          sort={sort}
          order={order}
          limit={limit}
          genre={genre}
          search={search}
        />
      </main>
    </>
  );
}
