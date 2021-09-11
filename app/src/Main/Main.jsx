import React, { useState } from "react";
import ArrowComponent from "../components/ArrowComponents/ArrowComponents";
import PureComponents from "../components/PureComponents/PureComponents";
import ComponentR from "../components/Component/ComponentR";
import ElementCr from "../components/CreateElement/ElementCr";

export const Main = () => {
  const [counter, setCounter] = useState(0);
  const [toggleOn, setToggleOn] = useState(true);
  return (
    <>
      <ComponentR />
      <ArrowComponent toggleOn={toggleOn} setToggleOn={setToggleOn} />
      <PureComponents counter={counter} setCounter={setCounter} />
      <ElementCr />
    </>
  );
};

export default Main;
