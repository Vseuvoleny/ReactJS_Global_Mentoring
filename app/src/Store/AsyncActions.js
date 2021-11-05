import axios from "axios";
import { BASE_URL } from "../utils/const/const";
import { getFilms, getErrorFromFetch } from "./ActionCreator";

export const asyncFetchFilms = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/movies?sortOrder=desc&limit=6`)
      .then((res) => {
        const { data } = res.data;
        dispatch(getFilms(data));
      })
      .catch((e) => {
        console.warn(e.message ?? e);
        dispatch(getErrorFromFetch(e.message ?? e));
      });
  };
};

export const asyncFetchFilmsByTitle = ({ queryParams, genres }) => {
  return (dispatch) => {
    axios
      .get(
        `${BASE_URL}/movies?search=${queryParams ?? ""}&limit=6&sortOrder=desc`
      )
      .then((res) => {
        const { data } = res.data;
        dispatch(getFilms(data));
      })
      .catch((e) => {
        console.warn(e.message ?? e);
        dispatch(getErrorFromFetch(e.message ?? e));
      });
  };
};
