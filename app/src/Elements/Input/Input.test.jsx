import { render, screen } from "@testing-library/react";
import Input from "./Input";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Input component", () => {
  test("should render Input component", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  test("onChange fn shoul work properly", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    expect(screen.queryByDisplayValue(/value/)).toBeNull();
    userEvent.type(screen.getByTestId("input"), "value");
    expect(onChange).toHaveBeenCalled();
  });
});
