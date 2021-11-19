import React from "react";
import { render } from "@testing-library/react";
import ApplyModal from "./ApplyModal";

jest.mock("../MovieForm/MovieForm", () => () => <div>Movie Form</div>);

describe("ApplyModal component", () => {
  test("should return MovieForm", () => {
    const { container, getByText } = render(<ApplyModal />);
    expect(container.textContent).toMatch("Movie Form");
    expect(getByText("add movie")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
