import Head from "next/head";
import clientPromise from "@/lib/mongodb"; // MODULE PATH EXAMPLE
import { InferGetServerSidePropsType } from "next";
import MovieCard from "../components/MovieCard/MovieCard";
import useFetchData from "@/hooks/useFetchData";
import { Movie } from "@/types/types";

export async function getServerSideProps() {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    data: movieData,
    loading,
    error,
  } = useFetchData("http://localhost:3000/api/movies");

  if (loading || !isConnected) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(movieData);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-lightBackground mx-auto'>
        <section className='grid grid-cols-auto-fit-250 p-6 gap-6'>
          {movieData.map(
            (movie: Movie, i: number) =>
              movie.poster && <MovieCard {...movie} key={i} />
          )}
        </section>
      </main>
    </>
  );
}
