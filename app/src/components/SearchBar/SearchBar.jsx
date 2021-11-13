import React, { forwardRef, useState, useCallback } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import "./SearchBar.scss";

const SearchBar = forwardRef((props, ref) => {
  const [filmName, setFilmName] = useState("");
  const [reqFilms, setreqFilms] = useState(undefined);

  const showFilms = async () => {
    const URL = `http://localhost:4000/movies?sortOrder=desc&search=${filmName}&searchBy=title&limit=10`;
    const res = await fetch(URL);
    const data = await res.json();
    setreqFilms(data.data);
  };

  const filmRequest = useCallback(showFilms, [filmName]);

  return (
    <div className="search-bar">
      <h2 className="search-bar__title">find your movie</h2>
      <div className="search-bar__search-container">
        <Input
          ref={ref}
          classes="input-field"
          placeholder="What do you want to watch?"
          withLabel={false}
          onChange={(e) => {
            const { value } = e.target;
            setFilmName(value);
          }}
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
