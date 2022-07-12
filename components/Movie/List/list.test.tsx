import { render, screen } from "@testing-library/react";
import { Chance } from "chance";

import List from ".";
import { Movie } from "@/types/movie";

const chance = new Chance();

const movies: Movie[] = Array(5)
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

describe("List component", () => {
  beforeEach(() => {
    render(<List movies={movies} />);
  });

  it("Should render component", () => {
    expect(screen.getByText(new RegExp(movies[0].title))).toBeTruthy();
  });

  it("Should render five card", () => {
    expect(screen.getAllByRole("img")).toHaveLength(5);
  });
});
