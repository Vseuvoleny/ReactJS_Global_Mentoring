import axios from "axios";
import { BASE_URL } from "../utils/const/const";
import { getFilms, getErrorFromFetch } from "./ActionCreator";

export const asyncFetchFilms = (sortType, genres) => {
  return (dispatch) => {
    axios
      .get(
        `${BASE_URL}/movies?sortBy=${sortType}&sortOrder=desc${
          genres === "All" ? "&" : `&filter=${genres}&`
        }limit=6`
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
