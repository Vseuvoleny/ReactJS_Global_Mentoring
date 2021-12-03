import React from "react";
import Main from "../../containers/Main/Main";
import { BASE_URL } from "../../utils/const/const";

export const getServerSideProps = async (context) => {
  const queryParams = Object.entries(context.query)
    .map((q) => q.join("="))
    .join("&");
  const res = await fetch(
    `${BASE_URL}/movies?${queryParams}&sortOrder=desc&limit=6&searchBy=title`
  );
  const data = await res.json();
  console.log(data);
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

const Search = ({ data }) => {
  const films = data.data;

  return (
    <>
      <Main films={films} />
    </>
  );
};

export default Search;
