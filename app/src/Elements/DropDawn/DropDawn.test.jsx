import React from "react";
import { createStore } from "redux";
import { modalReducer } from "../../Store/ModalReducers";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import DropDawn from "./DropDawn";

const renderWithRedux = (
  component,
  { initialState, store = createStore(modalReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Dropdawn element", () => {
  test("should render componenent", () => {
    const handleClick = jest.fn();
    const { getByText, container } = renderWithRedux(
      <DropDawn setDropDawnOpen={handleClick} />
    );
    expect(getByText(/Edit/i)).toBeInTheDocument();
    expect(getByText(/Delete/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("should change type modal", () => {
    const initialState = {
      initialState: {
        activeModal: "",
      },
    };
    const typeEdit = jest.fn(
      () => (initialState.initialState.activeModal = "EDIT_MODAL")
    );
    const typeDelete = jest.fn(
      () => (initialState.initialState.activeModal = "DELETE_MODAL")
    );
    typeDelete();
    expect(initialState.initialState.activeModal).toBe("DELETE_MODAL");
    typeEdit();
    expect(initialState.initialState.activeModal).toBe("EDIT_MODAL");
  });
});
