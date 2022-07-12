import { useState } from "react";

const ITEMS_PER_PAGE = 20;

const usePaginatedData = <T>(items: T[]) => {
  const [page, setPage] = useState(1);

  const total = items.length;
  const pages = Math.ceil(total / ITEMS_PER_PAGE);
  const indexOfPageMovies = (page - 1) * ITEMS_PER_PAGE;

  const data = [...items].slice(
    indexOfPageMovies,
    indexOfPageMovies + ITEMS_PER_PAGE
  );

  return {
    page,
    total,
    data,
    pages,
    setPage,
  };
};

export default usePaginatedData;
