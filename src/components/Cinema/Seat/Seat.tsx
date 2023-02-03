import { SeatType } from "@/types/types";
import React, { FC, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

const Seat: FC<SeatType> = ({ occupied, id, selected, movieId, booked }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [seats, setSeats] = useLocalStorage<JSX.Element[] | SeatType>(
    `seats-${movieId}`,
    []
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleClick = () => {
    const newSeats = seats.map((seat: SeatType) => {
      if (seat.id === id) {
        return { ...seat, selected: !seat.selected };
      }
      return seat;
    });
    setSeats(newSeats);
  };

  if (!hasMounted) {
    return null;
  }

  if (booked)
    return (
      <div className='bg-gradient-to-r from-background to-greenText w-full rounded-b-xl aspect-[10/16] border border-greenText cursor-not-allowed mt-2 flex items-center justify-center text-xl font-bold '></div>
    );
  if (occupied)
    return (
      <div className='bg-highlight w-full rounded-b-xl aspect-[10/16] border border-highlight cursor-not-allowed mt-2 flex items-center justify-center text-xl font-bold '></div>
    );

  if (selected)
    return (
      <div
        className='bg-greenText w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2 flex items-center justify-center text-xl font-bold animate-pulse'
        onClick={handleClick}></div>
    );
  else {
    return (
      <div
        className='bg-background w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2 flex items-center justify-center text-xl font-bold duration-200 hover:animate-bounce '
        onClick={handleClick}></div>
    );
  }
};

export default Seat;
