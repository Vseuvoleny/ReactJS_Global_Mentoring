import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Header from "../Header/Header";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useSearchParams } from "react-router-dom";
import ModalContainer from "../Modal/ModalContainer";

const Application = ({ setIsMovieDetailsOpened, isMovieDetailsOpened }) => {
  const dispatch = useDispatch();
  const state = useSelector(({ filmsStore, modalStore }) => ({
    filmsStore,
    modalStore,
  }));
  const { filmsStore, modalStore } = state;

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("movieId");

  return (
    <ErrorBoundary>
      <Header
        setSearchParams={setSearchParams}
        movieId={movieId}
        dispatch={dispatch}
        isMovieDetailsOpened={isMovieDetailsOpened}
        setIsMovieDetailsOpened={setIsMovieDetailsOpened}
      />
      <Main
        setSearchParams={setSearchParams}
        dispatch={dispatch}
        searchParams={searchParams}
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
