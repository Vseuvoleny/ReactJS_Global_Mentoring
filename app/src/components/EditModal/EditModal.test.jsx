import React from "react";
import { render } from "@testing-library/react";
import EditModal from "./EditModal";

jest.mock("../MovieForm/MovieForm", () => () => <div>Movie Form</div>);

describe("EditModal component", () => {
  test("should return MovieForm", () => {
    const { container, getByText } = render(<EditModal />);
    expect(container.textContent).toMatch("Movie Form");
    expect(getByText("edit movie")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
