/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DropMenu from "../DropMenu/DropMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "@/context/filterContext";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const navigation = [
  { name: "Movies", value: "movie", href: "/movies/", current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { setType, setSort, setOrder, setLimit, setGenre, setSearch } =
    useContext(FilterContext);
  const [showGenres, setShowGenres] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const sort = [
    {
      name: "RESET",
      function: () => setSort("year"),
    },
    { name: "Year", function: () => setSort("year") },
    { name: "Metacritics", function: () => setSort("metacritics") },
    { name: "Low to High", function: () => setOrder("1") },
    { name: "High to Low", function: () => setOrder("-1") },
  ];

  const genres = [
    { name: "RESET", function: () => setGenre("") },
    { name: "Action", function: () => setGenre("Action") },
    { name: "Adventure", function: () => setGenre("Adventure") },
    { name: "Comedy", function: () => setGenre("Comedy") },
    { name: "Drama", function: () => setGenre("Drama") },
    { name: "Sci-Fi", function: () => setGenre("Sci-Fi") },
    { name: "Thriller", function: () => setGenre("Thriller") },
    { name: "Romance", function: () => setGenre("Romance") },
    { name: "Crime", function: () => setGenre("Crime") },
    { name: "Mystery", function: () => setGenre("Mystery") },
    { name: "Biography", function: () => setGenre("Biography") },
    { name: "Fantasy", function: () => setGenre("Fantasy") },
    { name: "Animation", function: () => setGenre("Animation") },
    { name: "Family", function: () => setGenre("Family") },
    { name: "History", function: () => setGenre("History") },
    { name: "War", function: () => setGenre("War") },
    { name: "Documentary", function: () => setGenre("Documentary") },
    { name: "Western", function: () => setGenre("Western") },
    { name: "Short", function: () => setGenre("Short") },
  ];

  return (
    <Disclosure as='nav' className='bg-background'>
      {({ open }) => (
        <>
          <div className='px-4'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex flex-1 items-center justify-between sm:items-center'>
                {/* Mobile menu button*/}
                <Disclosure.Button className=' sm:hidden inline-flex items-center justify-center rounded-md p-2 text-paragraph hover:bg-gray-700 hover:text-greenText focus:outline-none focus:ring-2 focus:ring-inset focus:ring-greenText'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
                <div className=''>
                  <Link href={"/"} className='flex-1 '>
                    <h1 className='text-greenText text-xl font-bold '>
                      Netflix Cinema
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        onClick={() =>
                          setType && setType(item.value as "movie" | "series")
                        }
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-background text-white"
                            : "text-paragraph hover:bg-background hover:text-white",
                          "p-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                    <DropMenu items={genres} title='Genres' />
                    <DropMenu items={sort} title='Sort' />
                  </div>
                </div>
                {!showSearch ? (
                  <div
                    onClick={() => setShowSearch(!showSearch)}
                    className='p-2 lg:hidden cursor-pointer'>
                    <FontAwesomeIcon
                      color='grey'
                      className='hover:text-white duration-200'
                      icon={faSearch}
                      size='lg'
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => setShowSearch(!showSearch)}
                    className='p-2 lg:hidden cursor-pointer '>
                    <FontAwesomeIcon
                      color='grey'
                      className='hover:text-white duration-200'
                      icon={faClose}
                      size='lg'
                    />
                  </div>
                )}
                <div className='relative hidden lg:block'>
                  <input
                    type='search'
                    className='          
                  min-w-90
                  pl-10
                  pr-2
                  py-2
                  font-normal
                  text-paragraph
                  bg-background bg-clip-padding
                  border border-solid border-greenText
                  rounded
                  transition duration-200
                  ease-in-out
                  focus:text-paragraph focus:bg-lightBackground focus:border-highlight focus:outline-none'
                    id='search'
                    placeholder='Search for movie'
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Link href={"/movies"} as={`/movies/search${inputValue}`}>
                    <FontAwesomeIcon
                      color='grey'
                      className='hover:text-white duration-200 absolute top-2.5 left-2.5 cursor-pointer'
                      icon={faSearch}
                      size='lg'
                      onClick={() => setSearch(inputValue)}
                    />
                  </Link>
                </div>
              </div>
            </div>
            {showSearch && (
              <div className='relative lg:hidden'>
                <input
                  type='search'
                  className='
                  w-full
                  pl-10
                  pr-2
                  py-2
                  font-normal
                  text-paragraph
                  bg-background bg-clip-padding
                  border border-solid border-greenText
                  rounded
                  transition
                  ease-in-out
                  focus:text-paragraph focus:bg-lightBackground focus:border-highlight focus:outline-none'
                  id='search'
                  placeholder='Search for movie'
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Link href={"/movies"} as={`/movies/search${inputValue}`}>
                  <FontAwesomeIcon
                    color='grey'
                    className='hover:text-white duration-200 absolute top-2.5 left-2.5 cursor-pointer'
                    icon={faSearch}
                    size='lg'
                    onClick={() => setSearch(inputValue)}
                  />
                </Link>
              </div>
            )}
          </div>
          <MobileNavbar
            navigation={navigation}
            showGenres={showGenres}
            setShowGenres={setShowGenres}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            genres={genres}
            sort={sort}
          />
        </>
      )}
    </Disclosure>
  );
}
