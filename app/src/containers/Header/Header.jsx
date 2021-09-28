import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../Elements/Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__background">sdfsd</div>
      <div className="header__container">
        <div className="header__title">
          <h1 className="title">
            <span>netflix</span>
            <span>roulette</span>
          </h1>
          <Button
            type={"button"}
            clickHandler={() => {}}
            className={"add-movie"}
            text={"+ add movie"}
          />
        </div>

        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
