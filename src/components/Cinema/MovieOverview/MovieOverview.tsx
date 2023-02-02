/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useLocalStorage } from "usehooks-ts";

interface MovieOverviewProps {
  movieId: any;
}

const MovieOverview: FC<MovieOverviewProps> = ({ movieId }) => {
  const [seats, setSeats] = useLocalStorage<JSX.Element[]>(
    `seats-${movieId}`,
    []
  );

  return (
    <div>
      <div className='flex flex-col p-4  max-w-3xl m-auto xl:flex-1'>
        <div className='rounded-md bg-lightBackground '>
          <div className='md:flex px-4'>
            <div className='flex-none '>
              <img
                src='https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500'
                alt='pic'
                className='h-72 w-56 rounded-md shadow-2xl border-4 border-greenText'
              />
            </div>
            <div className='flex-col text-paragraph justify-center h-full items-center p-4'>
              <p className=' text-2xl font-bold'>Joker (2020)</p>
              <div className='text-md flex justify-between my-2'>
                <span className='font-bold'>
                  2h 2min | Crime, Drama, Thriller
                </span>
                <span className='font-bold' />
              </div>
              <p className='hidden md:block my-4 text-sm text-left'>
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.{" "}
              </p>
              <p className='flex text-md my-2'>
                Rating: 9.0/10
                <span className='font-bold px-2'>|</span>
                Mood: Dark
              </p>
              <div className='text-xs'>
                <button
                  type='button'
                  className='border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline'>
                  TRAILER
                </button>
                <button
                  type='button'
                  className='border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline'>
                  IMDB
                </button>
                <button
                  type='button'
                  className='border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline'>
                  AMAZON
                </button>
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
