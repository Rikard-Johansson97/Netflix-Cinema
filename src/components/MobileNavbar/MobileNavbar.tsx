import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";

interface MobileNavbarProps {
  navigation: any;
  showGenres: boolean;
  showFilter: boolean;
  genres: {
    name: string;
    function: () => void;
  }[];
  sort: {
    name: string;
    function: () => void;
  }[];
  setShowGenres: Dispatch<SetStateAction<boolean>>;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileNavbar: FC<MobileNavbarProps> = ({
  navigation,
  showGenres,
  showFilter,
  genres,
  sort,
  setShowGenres,
  setShowFilter,
}) => {
  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='space-y-1 px-2 pt-2 pb-3'>
        {navigation.map((item: any) => (
          <Disclosure.Button
            key={item.name}
            as='a'
            href={item.href}
            className={classNames(
              item.current
                ? "bg-lightBackground text-white"
                : "text-paragraph hover:bg-greenText hover:text-white",
              "block px-3 py-2 rounded-md text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}>
            {item.name}
          </Disclosure.Button>
        ))}
        <div aria-current={showGenres ? "page" : undefined}>
          <button
            onClick={() => setShowGenres(!showGenres)}
            className='inline-flex justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-paragraph shadow-sm hover:bg-lightBackground focus:outline-none focus:ring-2 focus:ring-greenText'>
            Genres
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
          </button>
        </div>
        {showGenres && (
          <div className='px-4'>
            {genres.map((genre, i) => (
              <Link
                href='/'
                as={`/movies/${genre.name}`}
                onClick={() => {
                  genre.function();
                }}
                key={i}
                className='text-paragraph hover:bg-greenText hover:text-background cursor-pointer
            block px-4 py-2 rounded-md text-base font-small'>
                {genre.name}
              </Link>
            ))}
          </div>
        )}
        <div aria-current={showGenres ? "page" : undefined}>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className='inline-flex justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-paragraph shadow-sm hover:bg-lightBackground focus:outline-none focus:ring-2 focus:ring-greenText'>
            Filter
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
          </button>
        </div>

        {showFilter && (
          <div className='px-4'>
            {sort.map((item, i) => (
              <Disclosure.Button
                key={i}
                as='a'
                className='text-paragraph hover:bg-greenText hover:text-background cursor-pointer
            block px-4 py-2 rounded-md text-base font-small'>
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        )}
      </div>
    </Disclosure.Panel>
  );
};

export default MobileNavbar;
