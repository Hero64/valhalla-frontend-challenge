import { render, screen } from "@testing-library/react";
import { Chance } from "chance";

import Card from ".";
import { Movie } from "@/types/movie";

const chance = new Chance();

const movie: Movie = {
  id: "1",
  crew: chance.name(),
  image: chance.url({ extensions: ["png"], path: "128_176" }),
  rank: chance.integer({ min: 1, max: 250 }),
  title: chance.sentence({ words: 5 }),
  year: Number(chance.year()),
  imDbRating: chance.floating({ min: 1, max: 10, fixed: 1 }),
};

describe("Card component", () => {
  beforeEach(() => {
    render(<Card movie={movie} />);
  });

  it("Should render component", () => {
    expect(screen.getByText(new RegExp(movie.title))).toBeTruthy();
  });

  it("Should include text parameters", () => {
    expect(screen.getByText(new RegExp(movie.crew))).toBeTruthy();
    expect(screen.getByText(new RegExp(movie.title))).toBeTruthy();
    expect(screen.getByText(new RegExp(movie.year.toString()))).toBeTruthy();
  });

  it("Should include image", () => {
    expect(screen.getByRole("img")).toBeTruthy();
  });

  it("Should modify image url", () => {
    const img = screen.getByAltText(movie.title);

    expect(img.getAttribute("src")).toBe(
      movie.image.replace("128_176", "400_560")
    );
  });
});
