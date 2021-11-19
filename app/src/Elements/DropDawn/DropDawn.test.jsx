import React from "react";
import { createStore } from "redux";
import { modalReducer } from "../../Store/ModalReducers";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import DropDawn from "./DropDawn";
import userEvent from "@testing-library/user-event";

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
    const { getByText } = renderWithRedux(
      <DropDawn setDropDawnOpen={handleClick} />
    );
    expect(getByText(/Edit/i)).toBeInTheDocument();
    expect(getByText(/Delete/i)).toBeInTheDocument();
  });
  test("should change type modal", () => {
    const handleClick = jest.fn();
    const typeEdit = jest.fn(
      () => (initialState.initialState.activeModal = "EDIT_MODAL")
    );
    const typeDelete = jest.fn(
      () => (initialState.initialState.activeModal = "DELETE_MODAL")
    );
    const initialState = {
      initialState: {
        activeModal: "",
      },
    };

    const { getByText } = renderWithRedux(
      <DropDawn setDropDawnOpen={handleClick} />,
      initialState
    );
    getByText(/Edit/i).onclick(() => typeEdit());

    userEvent.click(getByText(/Edit/i));
    console.log(initialState);
    expect(initialState.activeModal).toBe('"EDIT_MODAL"');
  });
});
