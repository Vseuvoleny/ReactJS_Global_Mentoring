import axios from "axios";
import { GET_FILMS_BY_RELEASE_DATE } from "./ActionTypes";
import { BASE_URL } from "../utils/const/const";

export function fetchFilms() {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/movies?sortBy=release_date&sortOrder=desc&limit=6`)
      .then((res) => {
        const { data } = res.data;
        dispatch(getFilmsByRelease(data));
      })
      .catch((e) => console.log(e.message ?? e));
  };
}

export function getFilmsByRelease(data) {
  return {
    type: GET_FILMS_BY_RELEASE_DATE,
    payload: data,
  };
}
