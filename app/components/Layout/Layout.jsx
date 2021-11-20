import React from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
