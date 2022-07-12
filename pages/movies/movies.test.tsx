import { render, screen } from "@testing-library/react";
import { Chance } from "chance";

import Page from ".";
import { Movie } from "@/types/movie";
import { debug } from "console";

const chance = new Chance();

const movies: Movie[] = Array(50)
  .fill(0)
  .map((_, index) => ({
    id: index.toString(),
    crew: chance.name(),
    image: chance.url({ extensions: ["png"], path: "128_176" }),
    rank: chance.integer({ min: 1, max: 250 }),
    title: chance.sentence({ words: 5 }),
    year: Number(chance.year()),
    imDbRating: chance.floating({ min: 1, max: 10, fixed: 1 }),
  }));

describe("MoviePage component", () => {
  beforeEach(() => {
    render(<Page movies={movies} />);
  });

  it("Should render component", () => {
    expect(screen.getByText("Top 250 movies")).toBeTruthy();
  });

  it("Should render only 20 elements", () => {
    expect(screen.getAllByRole("img")).toHaveLength(20);
  });
});
