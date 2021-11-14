import React, { memo } from "react";
import Title from "../../Elements/Title/Title";

const Footer = memo(() => {
  const style = {
    padding: "23px 0",
    background: "#424242",
    textAlign: "center",
  };
  return (
    <footer style={style}>
      <Title />
    </footer>
  );
});

export default Footer;
