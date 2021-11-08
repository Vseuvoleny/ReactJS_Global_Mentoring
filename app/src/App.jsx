import React, { useState } from "react";
import Application from "./Containers/Application/Applications";
import { Provider } from "react-redux";
import { store } from "./Store/CreateStore";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";

const App = () => {
  const [isMovieDetailsOpened, setIsMovieDetailsOpened] = useState(false);
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/search" />} />
          <Route
            path="/search"
            element={
              <Application
                isMovieDetailsOpened={isMovieDetailsOpened}
                setIsMovieDetailsOpened={setIsMovieDetailsOpened}
              />
            }
          >
            <Route
              path=":queryParams"
              element={
                <Application
                  isMovieDetailsOpened={isMovieDetailsOpened}
                  setIsMovieDetailsOpened={setIsMovieDetailsOpened}
                />
              }
            />
          </Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
