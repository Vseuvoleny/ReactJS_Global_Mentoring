import { render } from "@testing-library/react";
import React from "react";
import MovieDetails from "./MovieDetails";

describe("MovieDetails component", () => {
  test("should render component", () => {
    const movie = {
      img: "./movies.jpeg",
      title: "Movie title",
      rating: "5",
      year: "2011",
      runtime: "120",
      overview: "Movie overwiev",
    };

    const { container, getByText, getByAltText } = render(
      <MovieDetails {...movie} />
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Movie title")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("120")).toBeInTheDocument();
    expect(getByText("Movie overwiev")).toBeInTheDocument();
    expect(getByAltText("Movie title")).toBeInTheDocument();
  });
});
