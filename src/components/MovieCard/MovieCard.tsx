/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Movie } from "@/types/types";
import Link from "next/dist/client/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MovieCard({
  _id,
  title,
  poster,
  year,
  plot,
  imdb,
}: Movie) {
  const [showPlot, setShowPlot] = useState(false);
  const [isImageFound, setIsImageFound] = useState(true);

  const handleError = () => {
    setIsImageFound(false);
  };

  return (
    <Link
      href={`/movies/${_id}`}
      className='flex flex-col items-start justify-between relative overflow-hidden bg-no-repeat bg-cover max-w-xs'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
      style={{ display: isImageFound ? "block" : "none" }}>
      <div
        onMouseOver={() => setShowPlot(true)}
        onMouseLeave={() => setShowPlot(false)}
        className='relative text-paragraph'>
        <img
          src={poster}
          alt={title}
          onError={handleError}
          className='w-full object-cover aspect-[10/16] rounded-lg shadow-[0_20px_30px_-15px_rgba(0,0,0,1)]'
        />
        {showPlot && (
          <div className='z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-between items-center p-4 rounded-lg hover:bg-[rgba(0,0,0,0.9)] duration-300'>
            <div>
              <h3 className='text-headline text-xl font-medium mb-1 text-center mt-20'>
                Description
              </h3>
              <p className=' text-center text-m font-medium'>{plot}</p>
            </div>
            <span className='text-headline'>Imdb: {imdb.rating}</span>
          </div>
        )}
      </div>
      <h5 className=' text-headline text-xl font-medium mt-1 whitespace-nowrap text-ellipsis'>
        {title}
      </h5>
      <p className=' text-paragraph text-m font-medium mb-6'>{year}</p>
    </Link>
  );
}
