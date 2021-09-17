import React, { useState } from "react";
import ArrowComponent from "../components/ArrowComponents/ArrowComponents";
import PureComponents from "../components/PureComponents/PureComponents";
import ComponentR from "../components/Component/ComponentR";
import ElementCr from "../components/CreateElement/ElementCr";

export const Main = ({ darkMode, setDarkMode }) => {
  const [counter, setCounter] = useState(0);
  const [searchResult, setSearchResult] = useState("");
  return (
    <>
      <ElementCr />
      <ComponentR
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <ArrowComponent />
      <PureComponents counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Main;
