import {
  GET_FILMS_ASYNC,
  SET_FILTER,
  SET_GENRES,
  FILM_REQUEST_FAILURE,
} from "./ActionTypes";

export const getFilms = (payload) => ({ type: GET_FILMS_ASYNC, payload });
export const setGenres = (payload) => ({ type: SET_GENRES, payload });
export const setFilter = (payload) => ({ type: SET_FILTER, payload });
export const getErrorFromFetch = (error) => ({
  type: FILM_REQUEST_FAILURE,
  payload: { error },
});
