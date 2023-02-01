import React, { FC } from "react";

interface SeatProps {
  occupied: boolean;
  id: string;
  selected: boolean;
  onCLick: any;
  index: number;
}

const Seat: FC<SeatProps> = ({ occupied, id, index }) => {
  return (
    <div
      className={
        occupied
          ? "bg-highlight w-full rounded-b-xl aspect-[10/16] border border-highlight cursor-not-allowed mt-2 flex items-center justify-center text-xl font-bold"
          : "bg-background w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2 flex items-center justify-center text-xl font-bold"
      }></div>
  );
};

export default Seat;
