import React from "react";
import RedTriangle from "../../Elements/Icon/Icons/RedTriangle/RedTriangle";

const Filters = ({ isFiltersOpen, setisFiltersOpen }) => {
  return (
    <div className="filter">
      <span className="filter__status">sort by</span>
      <span className="filter__options">
        release date{" "}
        <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
      </span>
    </div>
  );
};

export default Filters;
