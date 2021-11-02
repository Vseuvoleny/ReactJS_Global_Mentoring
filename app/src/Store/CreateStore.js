import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./store";
import {
  GET_FILMS_ASYNC,
  SET_FILTER,
  SET_GENRES,
  FILM_REQUEST_FAILURE,
} from "./ActionTypes";
import { modalReducer } from "./ModalReducers";

function filmReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_ASYNC:
      return {
        ...state,
        films: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        sortType: action.payload,
      };
    case FILM_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
}
const RootReducer = combineReducers({
  filmsStore: filmReducer,
  modalStore: modalReducer,
});

export const store = createStore(RootReducer, applyMiddleware(thunk));
