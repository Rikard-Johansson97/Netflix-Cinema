import * as React from "react";
import { Movie } from "@/types/types";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function movieCard({ _id, title, poster, year }: Movie) {
  return (
    <Link
      href={`/movies/${_id}`}
      className='flex flex-col items-start justify-between relative overflow-hidden bg-no-repeat bg-cover max-w-xs'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'>
      <img
        src={poster}
        alt={title}
        className='w-full object-cover aspect-[10/16] rounded-lg shadow-[0_20px_30px_-15px_rgba(0,0,0,1)] hover:opacity-[0.8]'
      />
      <h5 className=' text-headline text-xl font-medium mt-1'>{title}</h5>
      <p className=' text-paragraph text-m font-medium mb-6'>{year}</p>
    </Link>
  );
}
