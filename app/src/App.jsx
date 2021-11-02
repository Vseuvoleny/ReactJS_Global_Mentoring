import React, { useState } from "react";
import Application from "./Containers/Application/Applications";
import { Provider } from "react-redux";
import { store } from "./Store/CreateStore";
import "./App.scss";

const App = () => {
  const [isMovieDetailsOpened, setIsMovieDetailsOpened] = useState(false);
  return (
    <Provider store={store}>
      <Application
        isMovieDetailsOpened={isMovieDetailsOpened}
        setIsMovieDetailsOpened={setIsMovieDetailsOpened}
      />
    </Provider>
  );
};

export default App;
