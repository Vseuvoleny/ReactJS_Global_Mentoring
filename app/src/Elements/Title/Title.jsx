import React, { memo } from "react";
import "./Title.scss";

const Title = memo(() => {
  return (
    <h1 className="title">
      <span>netflix</span>
      <span>roulette</span>
    </h1>
  );
});

export default Title;
