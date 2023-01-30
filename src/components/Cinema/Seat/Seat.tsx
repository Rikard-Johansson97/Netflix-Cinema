import React, { FC } from "react";

interface SeatProps {
  occupied: boolean;
  id: string;
  selected: boolean;
  onClick: any;
}

const Seat: FC<SeatProps> = (props) => {
  const { occupied, id } = props;
  console.log(id);
  return (
    <div
      className={
        occupied
          ? "bg-highlight w-full rounded-b-xl aspect-[10/16] border border-highlight cursor-not-allowed mt-2"
          : "bg-background w-full rounded-b-xl aspect-[10/16] border border-greenText hover:bg-greenText cursor-pointer mt-2"
      }></div>
  );
};

export default Seat;
