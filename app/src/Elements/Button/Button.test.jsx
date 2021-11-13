import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button test", () => {
  test("Button should render", () => {
    const { container } = render(<Button text="button_text" />);
    expect(screen.getByText("button_text")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("should invoke clickHandler Fn by click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button clickHandler={handleClick} text={"button_text"} />
    );
    const button = getByText("button_text");
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
  test("should contain specific classes", () => {
    const { getByText } = render(
      <Button className={"classes"} type={"submit"} text={"button_text"} />
    );
    const button = getByText("button_text");
    expect(button.className).toEqual("classes__button filled");
  });
});
