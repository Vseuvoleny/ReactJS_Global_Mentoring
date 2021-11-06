import axios from "axios";
import { BASE_URL } from "../utils/const/const";
import { getFilms, getErrorFromFetch } from "./ActionCreator";

export const asyncFetchFilms = (params) => {
  return (dispatch) => {
    axios
      .get(applyURL(params))
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

const applyURL = ({ queryParams, genres, sortBy }) => {
  const params = queryParams ? `search=${queryParams}&searchBy=title` : "";
  const genre = genres ? `&filter=${genres}` : "";
  const sorting = sortBy ? `&sortBy=${sortBy}` : "";
  return `${BASE_URL}/movies?${params}${genre}${sorting}&sortOrder=desc&limit=6`;
};
