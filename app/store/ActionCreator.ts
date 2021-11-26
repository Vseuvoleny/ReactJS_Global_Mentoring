import {
  GET_FILMS_ASYNC,
  SET_FILTER,
  SET_GENRES,
  FILM_REQUEST_FAILURE,
  APPLY_MODAL,
  EDIT_MODAL,
  DELETE_MODAL,
  INACTIVE_MODAL,
  MOVIE_BY_ID,
} from "./ActionTypes";

export const getFilms = (payload) => ({ type: GET_FILMS_ASYNC, payload });
export const setGenres = (payload) => ({ type: SET_GENRES, payload });
export const setFilter = (payload) => ({ type: SET_FILTER, payload });
export const getErrorFromFetch = (error) => ({
  type: FILM_REQUEST_FAILURE,
  payload: { error },
});
export const getMovieById = (payload) => ({ type: MOVIE_BY_ID, payload });
export const setApplyModal = () => ({ type: APPLY_MODAL });
export const setDeleteModal = () => ({ type: EDIT_MODAL });
export const setEditModal = () => ({ type: DELETE_MODAL });
export const setInactiveModal = () => ({ type: INACTIVE_MODAL });
