import { render } from "@testing-library/react";
import { Formik } from "formik";
import Option from "./Option";
import React from "react";

describe("Option component", () => {
  test("should render Option component with a list", () => {
    const fakeOptions = [
      { title: "title_1", id: 1 },
      { title: "title_2", id: 2 },
      { title: "title_3", id: 3 },
      { title: "title_4", id: 4 },
    ];

    const { container } = render(
      <Formik>
        <Option options={fakeOptions} />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });
});
