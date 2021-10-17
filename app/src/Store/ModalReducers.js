import { APPLY_MODAL, DELETE_MODAL, EDIT_MODAL } from "./ActionTypes";

export const modalReducer = (state, action) => {
  switch (action.type) {
    case APPLY_MODAL:
      return { modal: (state.modal = APPLY_MODAL) };
    case EDIT_MODAL:
      return { modal: (state.modal = EDIT_MODAL) };
    case DELETE_MODAL:
      return { modal: (state.modal = DELETE_MODAL) };
    default:
      return { modal: "" };
  }
};
