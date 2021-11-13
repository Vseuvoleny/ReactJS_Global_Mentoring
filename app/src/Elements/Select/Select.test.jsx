import React from "react";
import { render } from "@testing-library/react";
import Select from "./Select";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";

describe("Select component", () => {
  const fakeOptions = [{ id: 1, title: "title" }];
  test("should render Select component", () => {
    const { container, getByText } = render(
      <Select label={"text_label"} value={[]} />
    );
    expect(container).toMatchSnapshot();
    expect(getByText("text_label")).toBeInTheDocument();
  });
  test("should expanded list to be render by click", () => {
    let isListOpened = false;
    const mockListChanger = jest.fn(() => (isListOpened = !isListOpened));
    const { getByText } = render(
      <Formik>
        <Select label={"text_label"} value={[]} options={fakeOptions} />
      </Formik>
    );
    const labelElement = getByText("text_label");
    const expandListControl = labelElement.nextSibling;
    expandListControl.addEventListener("click", mockListChanger);
    expect(isListOpened).toBeFalsy();
    userEvent.click(expandListControl);
    expect(mockListChanger).toHaveBeenCalled();
    expect(isListOpened).toBeTruthy();
  });
});
