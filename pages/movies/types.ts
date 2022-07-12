import { Movie } from "@/types/movie";

export interface Response {
  items: Movie[];
  errorMessage: string;
}

export interface Props {
  movies: Movie[];
}
