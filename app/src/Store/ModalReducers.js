import { APPLY_MODAL, DELETE_MODAL, EDIT_MODAL } from "./ActionTypes";

const initialState = {
  activeModal: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_MODAL:
      return { ...state, activeModal: APPLY_MODAL };
    case EDIT_MODAL:
      return { ...state, activeModal: EDIT_MODAL };
    case DELETE_MODAL:
      return { ...state, activeModal: DELETE_MODAL };
    default:
      return state;
  }
};
