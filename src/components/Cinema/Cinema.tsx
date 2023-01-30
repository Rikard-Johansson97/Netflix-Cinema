import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Seat from "./Seat/Seat";
import { v4 as uuidv4 } from "uuid";

const Cinema = () => {
  let seats: JSX.Element[] = [];
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  console.log(selectedSeats);
  const router = useRouter();
  const { movieId } = router.query;

  useEffect(() => {
    const storedSeats = localStorage.getItem(`seats-${movieId}`);
    if (storedSeats) {
      setSelectedSeats(JSON.parse(storedSeats));
    }

    return () => {
      localStorage.setItem(`seats-${movieId}`, JSON.stringify(selectedSeats));
    };
  }, [movieId, selectedSeats]);

  for (var i = 0; i < 60; i++) {
    const randomNumber = Math.random();
    const id = uuidv4();
    seats.push(
      <Seat
        key={id}
        id={id}
        occupied={randomNumber <= 0.33}
        selected={selectedSeats.includes(id)}
        onClick={() =>
          setSelectedSeats((prevSeats) =>
            prevSeats.includes(id)
              ? prevSeats.filter((seat) => seat !== id)
              : [...prevSeats, id]
          )
        }
      />
    );
  }

  const leftSection = seats.slice(0, 20);
  const middleSection = seats.slice(20, 40);
  const rightSection = seats.slice(40, 60);
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
        {/* LEFT */}
        <div className='p-4 grid gap-1 grid-cols-4'>{leftSection}</div>
        {/* CENTER */}
        <div className='p-4 grid gap-1 grid-cols-4'>{middleSection}</div>
        {/* RIGHT */}
        <div className='p-4 grid gap-1 grid-cols-4'>{rightSection}</div>
      </div>
    </div>
  );
};

export default Cinema;
