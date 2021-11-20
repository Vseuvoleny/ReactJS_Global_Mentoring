import React from "react";
import RedTriangle from "../../elements/Icon/Icons/RedTriangle/RedTriangle";
import classes from "./Filters.module.scss";

const Filters = ({
  isFiltersOpen,
  setisFiltersOpen,
  sortBy,
  setSearchParams,
}) => {
  return (
    <div className={classes.filter}>
      <span className={classes.filter__status}>sort by</span>
      <span
        className={classes.filter__options}
        onClick={() => setisFiltersOpen(!isFiltersOpen)}
      >
        {sortBy ?? "Release date"}
        <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
      </span>
      {isFiltersOpen && (
        <div className={classes.filter__expanded_list}>
          <div
            className={classes.filter__option}
            onClick={() => setSearchParams({ sortBy: "release_date" })}
          >
            Release date
          </div>
          <div
            className={classes.filter__option}
            onClick={() => setSearchParams({ sortBy: "genre" })}
          >
            Genre
          </div>
          <div
            className={classes.filter__option}
            onClick={() => setSearchParams({ sortBy: "rating" })}
          >
            Rating
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
