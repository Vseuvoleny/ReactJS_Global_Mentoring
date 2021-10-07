import React, { useReducer, useState } from "react";
import { createPortal } from "react-dom";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";
import { modalReducer } from "./Store/ModalReducers";
import { initialState } from "./Store/modalState";
import ModalContainer from "./Containers/Modal/ModalContainer";
import "./App.scss";

const App = () => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const [isMovieDetailsOpened, setIsMovieDetailsOpened] = useState(false);
  return (
    <ErrorBoundary>
      <Header
        dispatch={dispatch}
        isMovieDetailsOpened={isMovieDetailsOpened}
        setIsMovieDetailsOpened={setIsMovieDetailsOpened}
      />
      <Main
        dispatch={dispatch}
        setIsMovieDetailsOpened={setIsMovieDetailsOpened}
      />
      <Footer />
      {state.modal &&
        createPortal(
          <ModalContainer state={state} dispatch={dispatch} />,
          document.getElementById("root")
        )}
    </ErrorBoundary>
  );
};

export default App;
