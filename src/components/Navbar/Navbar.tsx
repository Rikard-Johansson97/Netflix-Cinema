/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import DropMenu from "../DropMenu/DropMenu";

const navigation = [
  { name: "Movies", href: "/movies/", current: true },
  { name: "Series", href: "/series", current: false },
];

const genres = [
  { name: "Action", current: false },
  { name: "Adventure", current: false },
  { name: "Comedy", current: false },
  { name: "Drama", current: false },
  { name: "Sci-Fi", current: false },
  { name: "Thriller", current: false },
  { name: "Romance", current: false },
  { name: "Crime", current: false },
  { name: "Mystery", current: false },
  { name: "Biography", current: false },
  { name: "Fantasy", current: false },
  { name: "Animation", current: false },
  { name: "Family", current: false },
  { name: "History", current: false },
  { name: "War", current: false },
  { name: "Documentary", current: false },
  { name: "Western", current: false },
  { name: "Short", current: false },
];

const sort = [
  { name: "Year", current: false },
  { name: "Metacritics", current: false },
  { name: "Low to High", current: false },
  { name: "High to Low", current: false },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [showGenres, setShowGenres] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Disclosure as='nav' className='bg-background'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-full px-2 sm:px-8 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-paragraph hover:bg-gray-700 hover:text-greenText focus:outline-none focus:ring-2 focus:ring-inset focus:ring-greenText'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href={"/"}>
                    <h1 className='text-greenText text-xl font-bold'>
                      Netflix Cinema
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-background text-white"
                            : "text-paragraph hover:bg-background hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                    <DropMenu items={genres} title='Genres' />
                    <DropMenu items={sort} title='Sort' />
                  </div>
                </div>
              </div>
              <input
                type='search'
                className='
                          hidden lg:block
                          min-w-90
                          px-3
                          py-1.5
                          font-normal
                          bg-background bg-clip-padding
                          border border-solid border-greenText
                          rounded
                          transition
                          ease-in-out
                          focus:text-paragraph focus:bg-lightBackground focus:border-highlight focus:outline-none
                        '
                id='search'
                placeholder='Search for movie'
              />
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <input
                type='search'
                className='
                          py-1.5
                          px-2
                          w-full
                          my-2
                          font-normal
                          bg-background bg-clip-padding
                          border border-solid border-greenText
                          rounded
                          transition
                          ease-in-out
                          focus:text-paragraph focus:bg-lightBackground focus:border-highlight focus:outline-none
                        '
                id='search'
                placeholder='Search for movie'
              />
              {navigation.map((item) => (
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
                    <Disclosure.Button
                      key={i}
                      as='a'
                      className={classNames(
                        genre.current
                          ? "bg-greenText text-white "
                          : "text-paragraph hover:bg-greenText hover:text-background cursor-pointer",
                        "block px-4 py-2 rounded-md text-base font-small"
                      )}>
                      {genre.name}
                    </Disclosure.Button>
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
                      className={classNames(
                        item.current
                          ? "bg-greenText text-white "
                          : "text-paragraph hover:bg-greenText hover:text-background cursor-pointer",
                        "block px-4 py-2 rounded-md text-base font-small"
                      )}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
