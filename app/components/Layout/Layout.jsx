import React from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
      <Header />
      {children}
      <Footer />
    </ErrorBoundary>
  );
};
