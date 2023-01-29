import Link from "next/link";
import React, { useState } from "react";

const DropMenuItem = ({ item }: any) => {
  return (
    <Link
      onClick={() => {
        !item.function();
      }}
      href='/movies'
      as={`/movies/${item.name}`}
      className='text-paragraph block px-4 py-2 text-sm duration-100 hover:bg-greenText hover:text-background'>
      {item.name}
    </Link>
  );
};

export default DropMenuItem;
