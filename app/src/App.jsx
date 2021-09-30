import React from "react";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
