import Head from "next/head";
import Link from "next/link";
import cache from "memory-cache";
import { Container, Typography, Pagination, Box } from "@mui/material";

import usePaginatedData from "@/hooks/usePaginatedData/index";
import MovieList from "@/components/Movie/List";

import { Movie } from "@/types/movie";
import { Props, Response } from "./types";

export async function getStaticProps() {
  const url = `${process.env.BASE_URL}/en/API/Top250Movies/${process.env.API_KEY}`;

  // get movies in store or get data by request
  const movies = cache.get(url);
  if (movies) {
    return {
      props: {
        movies,
      },
    };
  }

  const response = await fetch(url);
  const data: Response = await response.json();

  if (data.errorMessage) {
    throw new Error(data.errorMessage);
  }

  // store the item data by 24 hrs
  cache.put(url, data.items, 24 * 1000 * 60 * 60);

  return {
    props: {
      movies: data.items,
    },
  };
}

const MoviesPage = (props: Props) => {
  const {
    page,
    pages,
    data: movies,
    setPage,
  } = usePaginatedData<Movie>(props.movies);

  return (
    <div>
      <Head>
        <title>Top 250 movies</title>
      </Head>
      <Container>
        <Typography
          variant="h3"
          component="h1"
          marginBottom={4}
          fontWeight={100}
          marginTop={10}
        >
          Top 250 movies
        </Typography>
        <MovieList movies={movies} />
        <Box
          component="footer"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop={4}
        >
          <Pagination
            shape="rounded"
            count={pages}
            page={page}
            onChange={(_, currentPage) => setPage(currentPage)}
          />
          <Typography
            variant="caption"
            component="p"
            fontWeight={100}
            marginTop={10}
            marginBottom={4}
          >
            Build with {"<3"} by <Link href="/about/me">Aníbal Jorquera</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default MoviesPage;
