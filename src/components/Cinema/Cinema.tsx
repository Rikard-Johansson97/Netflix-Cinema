import { useRouter } from "next/router";
import React, { useState, useEffect, FC } from "react";
import Seat from "./Seat/Seat";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "usehooks-ts";
import Booking from "./Booking/Booking";

interface CinemaProps {
  movieId: string | any;
}

interface SeatType {
  occupied: boolean;
  id: string;
  selected: boolean;
  onCLick?: any;
  movieId: string;
  map: any;
  slice: any;
  length: number;
  seat: number;
}

const Cinema: FC<CinemaProps> = ({ movieId }) => {
  const [seats, setSeats] = useLocalStorage<JSX.Element[] | SeatType>(
    `seats-${movieId}`,
    []
  );
  console.log(seats);

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
        };
      });
      setSeats(seats as any);
    }
  }, []);

  const leftSection = seats.slice(0, 20);
  const middleSection = seats.slice(20, 40);
  const rightSection = seats.slice(40, 60);

  return (
    <div
      suppressHydrationWarning={true}
      className=' p-8 s sm:p-10 perspective-10'>
      <div className='shadow-2xl max-w-lg m-auto  -rotate-x-50'>
        {/* SCREEN */}
        <div className='aspect-video bg-greenText pb-4 pt-4 sm:pt-8 sm:pb-8'>
          <div className='flex flex-col justify-between items-center h-full bg-background p-4 '>
            <div className='flex items-center gap-5'>
              <div className='bg-highlight w-4 rounded-t-xl aspect-[10/16] border border-highlight sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold w-36 sm:text-2xl'>
                Occupied
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-greenText w-4 rounded-t-xl aspect-[10/16] border border-greenText sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold w-36 sm:text-2xl'>
                Selected
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='bg-background w-4 rounded-t-xl aspect-[10/16] border border-greenText sm:w-6'></div>
              <p className='text-paragraph text-xl font-bold w-36 sm:text-2xl '>
                Available
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
      <Booking movieId={movieId} />
    </div>
  );
};

export default Cinema;
