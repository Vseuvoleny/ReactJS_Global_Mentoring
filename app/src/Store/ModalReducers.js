import { APPLY_MODAL, DELETE_MODAL, EDIT_MODAL } from "./ActionTypes";

export const modalReducer = (_, action) => {
  switch (action.type) {
    case APPLY_MODAL:
      return { modal: APPLY_MODAL };
    case EDIT_MODAL:
      return { modal: EDIT_MODAL };
    case DELETE_MODAL:
      return { modal: DELETE_MODAL };
    default:
      return { modal: "" };
  }
};
