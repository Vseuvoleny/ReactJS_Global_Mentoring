import React from "react";
import RedTriangle from "../../elements/Icon/Icons/RedTriangle/RedTriangle";
import Router from "next/router";
import classes from "./Filters.module.scss";

const Filters = ({ isFiltersOpen, setisFiltersOpen, sortBy }) => {
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
            onClick={() =>
              Router.push({
                query: { ...Router.query, sortBy: "release_date" },
              })
            }
          >
            Release date
          </div>
          <div
            className={classes.filter__option}
            onClick={() =>
              Router.push({
                query: { ...Router.query, sortBy: "release_date" },
              })
            }
          >
            Genre
          </div>
          <div
            className={classes.filter__option}
            onClick={() =>
              Router.push({
                query: { ...Router.query, sortBy: "release_date" },
              })
            }
          >
            Rating
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
