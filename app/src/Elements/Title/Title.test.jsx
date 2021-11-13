import React from "react";
import Title from "./Title";
import { render } from "@testing-library/react";

describe("Title component", () => {
  test("should render Title component", () => {
    const { container, getByText } = render(<Title />);
    expect(getByText("netflix")).toBeInTheDocument();
    expect(getByText("roulette")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
