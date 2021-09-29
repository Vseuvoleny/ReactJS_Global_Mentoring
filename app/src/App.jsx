import React from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
    </ErrorBoundary>
  );
};

export default App;
