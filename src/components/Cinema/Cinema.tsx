import React, { useState, useEffect, FC } from "react";
import Seat from "./Seat/Seat";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "usehooks-ts";
import { Movie, SeatType } from "@/types/types";

interface CinemaProps {
  movieId: string | any;
  movieData?: Movie | undefined;
}

const Cinema: FC<CinemaProps> = ({ movieId, movieData }) => {
  const [seats, setSeats] = useLocalStorage<JSX.Element[] | SeatType>(
    `seats-${movieId}`,
    []
  );

  useEffect(() => {
    if (!seats.length) {
      const seats = Array.from({ length: 60 }, (_, i) => {
        const id = uuidv4();
        return {
          seat: i + 1,
          movieId: movieId,
          id,
          occupied: Math.random() <= 0.33,
          selected: false,
          price: 100,
          booked: false,
          movieName: movieData?.title,
          Image: movieData?.poster,
        };
      });
      setSeats(seats as any);
    }
  }, [seats, setSeats]);

  const leftSection = seats.slice(0, 20);
  const middleSection = seats.slice(20, 40);
  const rightSection = seats.slice(40, 60);

  return (
    <div className=' p-2 perspective-10 flex-1'>
      <div className=' max-w-lg m-auto  -rotate-x-50'>
        {/* SCREEN */}
        <div className='aspect-video bg-greenText pb-4 pt-4 sm:pt-8 sm:pb-8 mx-4 shadow-2xl shadow-gray-700'>
          <div className='grid grid-cols-2 items-center content-evenly h-full bg-lightBackground p-4 '>
            <div className='flex justify-evenly items-center'>
              <div className='bg-highlight w-4 rounded-t-xl aspect-[10/16] border border-highlight sm:w-6 '></div>
              <p className='text-paragraph text-xl font-bold sm:text-2xl'>
                Occupied
              </p>
            </div>
            <div className='flex justify-evenly items-center'>
              <div className='bg-greenText w-4 rounded-t-xl aspect-[10/16] border border-greenText sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold sm:text-2xl'>
                Selected
              </p>
            </div>
            <div className='flex justify-evenly items-center'>
              <div className='bg-background w-4 rounded-t-xl aspect-[10/16] border border-greenText sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold sm:text-2xl '>
                Available
              </p>
            </div>
            <div className='flex justify-evenly items-center'>
              <div className='bg-gradient-to-r from-background to-greenText w-4 rounded-t-xl aspect-[10/16] border border-greenText sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold sm:text-2xl '>
                Booked
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 max-w-lg m-auto rotate-x-40'>
        <div className='p-4 grid gap-1 grid-cols-4'>
          {leftSection.map((seat: SeatType) => (
            <Seat key={seat.id} {...seat} />
          ))}
        </div>
        <div className='p-4 grid gap-1 grid-cols-4'>
          {middleSection.map((seat: SeatType) => (
            <Seat key={seat.id} {...seat} />
          ))}
        </div>
        <div className='p-4 grid gap-1 grid-cols-4'>
          {rightSection.map((seat: SeatType) => (
            <Seat key={seat.id} {...seat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cinema;
