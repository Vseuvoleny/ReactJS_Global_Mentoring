import React, { FC } from "react";
import RedTriangle from "../../elements/Icon/Icons/RedTriangle/RedTriangle";
import { useRouter } from "next/router";
import classes from "./Filters.module.scss";
import { IFilters } from "./types";

const Filters: FC<IFilters> = ({ isFiltersOpen, setisFiltersOpen, sortBy }) => {
  const router = useRouter();
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
              router.push({
                query: { ...router.query, sortBy: "release_date" },
              })
            }
          >
            Release date
          </div>
          <div
            className={classes.filter__option}
            onClick={() =>
              router.push({
                query: { ...router.query, sortBy: "genre" },
              })
            }
          >
            Genre
          </div>
          <div
            className={classes.filter__option}
            onClick={() =>
              router.push({
                query: { ...router.query, sortBy: "rating" },
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
