import Head from "next/head";
import clientPromise from "@/lib/mongodb"; // MODULE PATH EXAMPLE
import { InferGetServerSidePropsType } from "next";
import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import { useGetVideoData } from "@/hooks/useGetVideoData";

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
  const movieTitle = "godfather trailer";
  const { videoData, isLoading } = useGetVideoData(movieTitle);

  console.log(JSON.stringify(videoData));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isConnected) return <h1>Connecting</h1>;

  return (
    <>
      <Head>
        <title>Create Next App</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-lightBackground mx-auto'>
        <MovieWrapper />
      </main>
    </>
  );
}
