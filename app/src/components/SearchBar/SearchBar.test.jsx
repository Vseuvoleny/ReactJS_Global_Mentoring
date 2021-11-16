import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { BrowserRouter } from "react-router-dom";

describe("Searchbar component", () => {
  test("should render SearchBar component", () => {
    const { container, getByRole, getByText } = render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const button = getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
    expect(getByText(/find your movie/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
