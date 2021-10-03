export const modalReducer = (state, action) => {
  switch (action.type) {
    case "apply":
      return { modal: (state.modal = "apply") };
    case "edit":
      return { modal: (state.modal = "edit") };
    case "delete":
      return { modal: (state.modal = "delete") };
    default:
      return { modal: (state.modal = "") };
  }
};
