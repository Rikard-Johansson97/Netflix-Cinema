import React, { FC, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

interface SeatProps {
  occupied: boolean;
  id: string;
  selected: boolean;
  onCLick?: any;
  movieId: string;
  map?: any;
}

const Seat: FC<SeatProps> = ({ occupied, id, selected, movieId }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [seats, setSeats] = useLocalStorage<JSX.Element[] | SeatProps>(
    `seats-${movieId}`,
    []
  );

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleClick = () => {
    const newSeats = seats.map((seat: SeatProps) => {
      if (!selected) {
        if (seat.id === id) {
          return { ...seat, selected: true };
        }
      } else {
        if (seat.id === id) {
          return { ...seat, selected: false };
        }
      }

      return seat;
    });
    setSeats(newSeats);
  };

  if (!hasMounted) {
    return null;
  }

  if (occupied)
    return (
      <div className='bg-highlight w-full rounded-b-xl aspect-[10/16] border border-highlight cursor-not-allowed mt-2 flex items-center justify-center text-xl font-bold'></div>
    );

  if (selected)
    return (
      <div
        className='bg-greenText w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2 flex items-center justify-center text-xl font-bold'
        onClick={() => handleClick()}></div>
    );
  else {
    return (
      <div
        className='bg-background w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2 flex items-center justify-center text-xl font-bold'
        onClick={() => handleClick()}></div>
    );
  }
};

export default Seat;
