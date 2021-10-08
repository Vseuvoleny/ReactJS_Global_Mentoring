import React, { forwardRef, useState } from "react";
import Button from "../../Elements/Button/Button";
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

  return (
    <div className="search-bar">
      <h2 className="search-bar__title">find your movie</h2>
      <div className="search-bar__search-container">
        <div className="search-bar__input">
          <input
            ref={ref}
            className="input-field"
            type="text"
            placeholder="What do you want to watch?"
            onChange={(e) => {
              const value = e.target.value;
              setFilmName(value);
            }}
          />
        </div>
        <Button
          className={"search-bar"}
          type={"submit"}
          clickHandler={() => showFilms()}
          text={"Search"}
        />
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar";
export default SearchBar;
