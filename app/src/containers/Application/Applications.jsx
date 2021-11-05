import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Header from "../Header/Header";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalContainer from "../Modal/ModalContainer";

const Application = ({ setIsMovieDetailsOpened, isMovieDetailsOpened }) => {
  const dispatch = useDispatch();
  const state = useSelector(({ filmsStore, modalStore }) => ({
    filmsStore,
    modalStore,
  }));
  const { filmsStore, modalStore } = state;

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
      {modalStore.activeModal &&
        createPortal(
          <ModalContainer modalStore={modalStore.activeModal} />,
          document.getElementById("root")
        )}
    </ErrorBoundary>
  );
};

export default Application;
