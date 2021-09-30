import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../Elements/Button/Button";
import Title from "../../Elements/Title/Title";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__background"></div>
      <div className="header__container">
        <div className="header__title">
          <Title />
          <Button
            type={"button"}
            clickHandler={() => {}}
            className={"add-movie"}
            text={"+ add movie"}
          />
        </div>

        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
