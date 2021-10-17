import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./store";
import { GET_FILMS_BY_RELEASE_DATE, SET_FILTER } from "./ActionTypes";

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_BY_RELEASE_DATE:
      return {
        ...state,
        films: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        sortType: action.payload,
      };
    case "FILM_REQUEST_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const store = createStore(RootReducer, applyMiddleware(thunk));
