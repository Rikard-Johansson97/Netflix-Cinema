export interface FilterContextData {
  type: "movie" | "series";
  setType: React.Dispatch<React.SetStateAction<"movie" | "series">>;
  sort: "metacritics" | "year";
  setSort: React.Dispatch<React.SetStateAction<"metacritics" | "year">>;
  order: "-1" | "1";
  setOrder: React.Dispatch<React.SetStateAction<"-1" | "1">>;
  limit: string;
  setLimit: React.Dispatch<React.SetStateAction<string>>;
  genre?: Genre
  setGenre: React.Dispatch<
    React.SetStateAction<
    Genre
    >
  >;
  search?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export type Genre =
  | "Animation"
  | "Short"
  | "Comedy"
  | "Action"
  | "Biography"
  | "Crime"
  | "Adventure"
  | "Sci-Fi"
  | "Drama"
  | "War"
  | "Mystery"
  | "Romance"
  | "Thriller"
  | "Fantasy"
  | "Documentary"
  | "Family"
  | "Western"
  | "History" | "";

export type Genres = Genre[];
