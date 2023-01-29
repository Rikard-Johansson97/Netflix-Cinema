import Link from "next/link";
import React, { forwardRef, useRef, useState } from "react";

const DropMenuItem = forwardRef(({ item }: any, ref) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={linkRef}
      onClick={() => {
        item.function();
      }}
      href='/movies'
      as={`/movies/${item.name}`}
      className='text-paragraph block px-4 py-2 text-sm duration-100 hover:bg-greenText hover:text-background'>
      {item.name}
    </Link>
  );
});

DropMenuItem.displayName = "DropMenuItem";

export default DropMenuItem;
