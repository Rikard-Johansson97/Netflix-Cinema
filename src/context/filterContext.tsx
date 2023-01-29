import { FilterContextData } from "@/types/filterContextData";
import React, { createContext, useState } from "react";

const initialData: FilterContextData = {
  type: "movie",
  sort: "year",
  limit: "20",
  order: "-1",
  genre: "",
  search: "",
  setType: () => {},
  setSort: () => {},
  setOrder: () => {},
  setLimit: () => {},
  setGenre: () => {},
  setSearch: () => {},
};

export const FilterContext = createContext<FilterContextData>(initialData);

interface Props {
  children: React.ReactNode;
}

const FilterContextProvider = ({ children }: Props) => {
  const [type, setType] = useState(initialData.type);
  const [sort, setSort] = useState(initialData.sort);
  const [order, setOrder] = useState(initialData.order);
  const [limit, setLimit] = useState(initialData.limit);
  const [genre, setGenre] = useState(initialData.genre);
  const [search, setSearch] = useState(initialData.search);

  return (
    <FilterContext.Provider
      value={
        {
          type,
          setType,
          sort,
          setSort,
          order,
          setOrder,
          limit,
          setLimit,
          genre,
          setGenre,
          search,
          setSearch,
        } as FilterContextData
      }>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
