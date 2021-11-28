import React, { forwardRef, useState, useCallback } from "react";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import classes from "./SearchBar.module.scss";

const SearchBar = forwardRef((_, ref) => {
  const [param, setSaram] = useState();

  const showFilms = async (e) => {
    e.preventDefault();
  };

  const filmRequest = useCallback(showFilms, [param]);

  return (
    <div className={classes.search_bar}>
      <h2 className={classes.search_bar__title}>find your movie</h2>
      <form
        className={classes.search_bar__search_container}
        onSubmit={filmRequest}
      >
        <Input
          ref={ref}
          classes={classes.input_field}
          placeholder="What do you want to watch?"
          withLabel={false}
          value={param}
          onChange={(e) => setSaram(e.target.value)}
        />
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
});

export default SearchBar;
