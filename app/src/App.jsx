import React, { useState } from "react";
import Main from "./containers/Main/Main";
import "./App.scss";
import Header from "./containers/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
