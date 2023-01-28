export interface UrlQuery {
    type: "movie" | "series";
    sort: "metacritics" | "year";
    order: "-1" | "1";
    limit: string;
    genre?: "Animation" | "Short" | "Comedy" | "Action" | "Biography" | "Crime" | "Adventure" | "Sci-Fi" | "Drama" | "War" | "Mystery" | "Romance" | "Thriller" | "Fantasy" | "Documentary" | "Family" | "Western" | "History" | "";
    search?: string;
  }
