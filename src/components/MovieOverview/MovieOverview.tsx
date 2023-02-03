/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types/types";
import React, { FC } from "react";
import { useLocalStorage } from "usehooks-ts";
import formatTime from "@/utils/formatTime";

interface MovieOverviewProps {
  movieId: any;
  movieData: Movie | undefined;
}

const MovieOverview: FC<MovieOverviewProps> = ({ movieId, movieData }) => {
  const [seats, setSeats] = useLocalStorage<JSX.Element[]>(
    `seats-${movieId}`,
    []
  );

  return (
    <div className='flex-1 w-full max-w-4xl mx-auto 2xl:max-w-lg'>
      <div className='flex flex-col m-auto '>
        <div className='rounded-md'>
          <div className='md:flex '>
            <div className='flex-col justify-center h-full items-center p-4'>
              <p className=' text-2xl font-bold text-headline'>
                {movieData?.title}{" "}
                <span className='text-paragraph text-sm'>
                  ({movieData?.year})
                </span>
              </p>
              <div className='text-md flex justify-between my-2'>
                <div className=' text-greenText'>
                  {formatTime(movieData?.runtime as number)}{" "}
                  <span className='text- font-bold'>
                    {" "}
                    | {movieData?.genres.map((g) => g + " | ")}
                  </span>
                </div>
                <span className='font-bold' />
              </div>
              <p
                className=' 
              my-4 text-sm text-left text-paragraph'>
                {movieData?.fullplot}
              </p>
              {movieData?.imdb.rating && (
                <p className='flex text-md my-2 text-headline'>
                  Imdb : {movieData?.imdb.rating}
                  <span className='font-bold px-4'>|</span>
                  Director : {movieData?.directors[0]}
                </p>
              )}
              <div className='text-xs'>
                {movieData?.cast.map((actor, i) => (
                  <button
                    key={i}
                    type='button'
                    className='border border-paragraph text-paragraph rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-highlight focus:outline-none focus:shadow-outline'>
                    {actor}
                  </button>
                ))}
              </div>
              {/*             <p>ICON BTNS</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
