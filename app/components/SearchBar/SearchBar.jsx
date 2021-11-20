import React, { forwardRef, useState, useCallback } from "react";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import "./SearchBar.module.scss";

const SearchBar = forwardRef((props, ref) => {
  const [param, setSaram] = useState();

  const showFilms = async (e) => {
    e.preventDefault();
    navigate(param);
  };

  const filmRequest = useCallback(showFilms, [param]);

  return (
    <div className="search-bar">
      <h2 className="search-bar__title">find your movie</h2>
      <form className="search-bar__search-container" onSubmit={filmRequest}>
        <Input
          ref={ref}
          classes="input-field"
          placeholder="What do you want to watch?"
          withLabel={false}
          value={param}
          onChange={(e) => setSaram(e.target.value)}
        />
        <Button className="search-bar" type="submit" text="Search" />
      </form>
    </div>
  );
});

export default SearchBar;
