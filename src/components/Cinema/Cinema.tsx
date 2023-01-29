import React from "react";
import Seat from "./Seat/Seat";

let row: JSX.Element[] = [];

for (var i = 0; i < 28; i++) {
  row.push(<Seat key={i} />);
}

const Cinema = () => {
  return (
    <div className=' p-10 perspective-10'>
      <div className='grid grid-cols-3 max-w-lg m-auto -rotate-x-30'>
        {/* LEFT */}
        <div className='p-4 grid gap-2 grid-cols-4'>{row}</div>
        {/* CENTER */}
        <div className='p-4 grid gap-2 grid-cols-4'>{row}</div>
        {/* RIGHT */}
        <div className='p-4 grid gap-2 grid-cols-4'>{row}</div>
      </div>
      {/* SCREEN */}
      <div className='max-w-lg m-auto aspect-video bg-paragraph rotate-x-60 drop-shadow-2xl'></div>
    </div>
  );
};

export default Cinema;
