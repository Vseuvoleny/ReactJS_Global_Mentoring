import React from "react";
import { render } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea component", () => {
  test("should render TextArea component", () => {
    const { container, getByPlaceholderText } = render(<TextArea />);

    const textArea = getByPlaceholderText("Movie description");
    const errorMessage = textArea.nextSibling;
    expect(errorMessage).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("should render TextArea component with error message", () => {
    const touched = { overview: "touched" };
    const { getByPlaceholderText } = render(
      <TextArea errors={"custom_error"} touched={touched} />
    );
    const textArea = getByPlaceholderText("Movie description");
    const errorMessage = textArea.nextSibling;
    expect(errorMessage).toBeInTheDocument();
  });
});
