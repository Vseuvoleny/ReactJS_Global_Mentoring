import React from "react";
import "./App.scss";

const App = () => {
  console.log(process.env.API);
  return <div className="app-hello">Hello World!</div>;
};

export default App;
