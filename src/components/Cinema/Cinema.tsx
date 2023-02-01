import { useRouter } from "next/router";
import React, { useState, useEffect, FC } from "react";
import Seat from "./Seat/Seat";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "usehooks-ts";

interface CinemaProps {
  id: string | any;
}

const Cinema: FC<CinemaProps> = ({ id }) => {
  const [seats, setSeats] = useLocalStorage<JSX.Element[]>(`seats-${id}`, []);

  useEffect(() => {
    if (!seats.length) {
      const seats = Array.from({ length: 60 }, (_, i) => {
        const id = uuidv4();
        return {
          id,
          occupied: Math.random() <= 0.33,
          selected: false,
        };
      });
      setSeats(seats as any);
    }
  }, []);

  console.log(seats);
  return (
    <div className=' p-8 s sm:p-10 perspective-10'>
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
          {seats?.map((seat) => (
            <div key={seat.id}></div>
          ))}
        </div>
        <div className='p-4 grid gap-1 grid-cols-4'></div>
        <div className='p-4 grid gap-1 grid-cols-4'></div>
      </div>
    </div>
  );
};

export default Cinema;
