import React, { forwardRef, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import "./SearchBar.scss";

const SearchBar = forwardRef((_props, ref) => {
  const [param, setSaram] = useState(useParams().queryParams);
  const navigate = useNavigate();

  const showFilms = (e) => {
    e.preventDefault();
    navigate(param);
  };

  const filmRequest = useCallback(showFilms, [param, navigate]);

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

SearchBar.displayName = "SearchBar";
export default SearchBar;
