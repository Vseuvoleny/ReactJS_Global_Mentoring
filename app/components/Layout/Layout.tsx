import React, { FC } from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { ILayout } from "./types";

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Header />
      {children}
      <Footer />
    </ErrorBoundary>
  );
};
