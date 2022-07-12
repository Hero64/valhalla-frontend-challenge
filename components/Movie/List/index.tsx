import { Grid } from "@mui/material";

import MovieCard from "@/components/Movie/Card";

import { Props } from "./types";

const MovieList = (props: Props) => {
  const { movies } = props;

  return (
    <div>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid key={movie.id} xs={12} md={6} item>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
