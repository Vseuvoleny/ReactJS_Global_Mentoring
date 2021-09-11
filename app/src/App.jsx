import React, { useState } from "react";
import Main from "./Main/Main";
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
