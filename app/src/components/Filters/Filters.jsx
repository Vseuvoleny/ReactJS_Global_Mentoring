import React from "react";
import { useDispatch } from "react-redux";
import RedTriangle from "../../Elements/Icon/Icons/RedTriangle/RedTriangle";
import { setFilter } from "../../Store/ActionCreator";
import "./Filters.scss";

const Filters = ({ isFiltersOpen, setisFiltersOpen, sortType }) => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <span className="filter__status">sort by</span>
      <span
        className="filter__options"
        onClick={() => setisFiltersOpen(!isFiltersOpen)}
      >
        {sortType}
        <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
      </span>
      {isFiltersOpen && (
        <div className="filter__expanded-list">
          <div
            className="filter__option"
            onClick={() => dispatch(setFilter("release_date"))}
          >
            Release date
          </div>
          <div
            className="filter__option"
            onClick={() => dispatch(setFilter("genre"))}
          >
            Genre
          </div>
          <div
            className="filter__option"
            onClick={() => dispatch(setFilter("rating"))}
          >
            Rating
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
