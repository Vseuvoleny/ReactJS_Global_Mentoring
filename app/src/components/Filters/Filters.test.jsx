import React from "react";
import { render, screen } from "@testing-library/react";
import Filters from "./Filters";
import userEvent from "@testing-library/user-event";

describe("Filter component", () => {
  test("should render Filter component with opened filters ", () => {
    const { container, getByText, getAllByText } = render(
      <Filters isFiltersOpen={true} />
    );
    const option = getAllByText(/Release date/i)[1];

    expect(option).toBeInTheDocument();
    expect(getByText(/Genre/i)).toBeInTheDocument();
    expect(getByText(/Rating/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
