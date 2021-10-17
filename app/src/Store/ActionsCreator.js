import axios from "axios";
import { GET_FILMS_BY_RELEASE_DATE } from "./ActionTypes";
import { BASE_URL } from "../utils/const/const";

export function fetchFilms(filter = "release_date") {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/movies?sortBy=${filter}&sortOrder=desc&limit=6`)
      .then((res) => {
        const { data } = res.data;
        dispatch(getFilmsByRelease(data));
      })
      .catch((e) => {
        dispatch(getError(e));
      });
  };
}

function getFilmsByRelease(data) {
  return {
    type: GET_FILMS_BY_RELEASE_DATE,
    payload: data,
  };
}

function getError(error) {
  return {
    type: "FILM_REQUEST_FAILURE",
    error: error,
  };
}
