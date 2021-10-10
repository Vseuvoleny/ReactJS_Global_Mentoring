import React, { useRef } from "react";
import CloseIcon from "../Icon/Icons/CloseIcon/CloseIcon";
import PropTypes from "prop-types";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import "./DropDawn.scss";
const DropDawn = ({ setDropDawnOpen, dispatch }) => {
  const ref = useRef(null);
  const svgRef = useRef(null);

  const outSideClick = (e) => {
    if (
      ref.current &&
      ref.current.contains(e.target) &&
      !svgRef.current.contains(e.target)
    ) {
    } else {
      setDropDawnOpen(false);
    }
  };

  useOutsideClick(outSideClick);

  return (
    <div className="dropdawn__container" ref={ref}>
      <CloseIcon
        width="12"
        height="13"
        viewBox="0 0 12 13"
        classes={"close_icon"}
        onClick={outSideClick}
        ref={svgRef}
      />
      <div
        className="control"
        onClick={() => {
          dispatch({ type: "edit" });
        }}
      >
        Edit
      </div>
      <div
        className="control"
        onClick={() => {
          dispatch({ type: "delete" });
        }}
      >
        Delete
      </div>
    </div>
  );
};

DropDawn.propTypes = {
  setDropDawnOpen: PropTypes.func,
  dispatch: PropTypes.func,
};

export default DropDawn;
