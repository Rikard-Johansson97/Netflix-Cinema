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
  if (!isConnected) return <h1>Connecting</h1>;

  return (
    <>
      <Head>
        <title>Create Next App</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-lightBackground mx-auto'></main>
    </>
  );
}
