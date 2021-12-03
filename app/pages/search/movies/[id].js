import React from "react";
import { BASE_URL } from "../../../utils/const/const";
import MovieDetails from "../../../components/MovieDetails/MovieDetails";

const Movie = ({ data }) => {
  return (
    <>
      <MovieDetails film={data} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const res = await fetch(`${BASE_URL}/movies/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

export default Movie;
