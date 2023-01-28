import Head from "next/head";
import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import { useGetVideoData } from "@/hooks/useGetVideoData";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
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
      <main className='bg-lightBackground mx-auto'>
        <Navbar />
        {/* <Banner videoData={videoData} /> */}
        <MovieWrapper
          type='movie'
          sort='year'
          limit='20'
          order='-1'
          search=''
        />
      </main>
    </>
  );
}
