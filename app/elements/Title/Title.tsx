import React, { memo } from "react";
import classes from "./Title.module.scss";

const Title = memo(() => {
  return (
    <h1 className={classes.title}>
      <span>netflix</span>
      <span>roulette</span>
    </h1>
  );
});

export default Title;
