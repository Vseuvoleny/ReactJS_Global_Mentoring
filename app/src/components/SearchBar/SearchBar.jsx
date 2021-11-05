import React, { forwardRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getFilms } from "../../Store/ActionCreator";
import { useParams } from "react-router";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import "./SearchBar.scss";

const SearchBar = forwardRef((props, ref) => {
  const [param, setSaram] = useState(useParams().queryParams);
  const dispatch = useDispatch();
  const showFilms = async () => {
    const URL = `http://localhost:4000/movies?sortOrder=desc&search=${param}&searchBy=title&limit=6`;
    const res = await fetch(URL);
    const { data } = await res.json();
    dispatch(getFilms(data));
  };

  const filmRequest = useCallback(showFilms, [param]);

  return (
    <div className="search-bar">
      <h2 className="search-bar__title">find your movie</h2>
      <div className="search-bar__search-container">
        <Input
          ref={ref}
          classes="input-field"
          placeholder="What do you want to watch?"
          withLabel={false}
          value={param}
          onChange={(e) => setSaram(e.target.value)}
        />
        <Button
          className="search-bar"
          type="submit"
          clickHandler={filmRequest}
          text="Search"
        />
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar";
export default SearchBar;
