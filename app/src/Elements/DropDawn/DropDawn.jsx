import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "../Icon/Icons/CloseIcon/CloseIcon";
import PropTypes from "prop-types";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import { DELETE_MODAL, EDIT_MODAL } from "../../Store/ActionTypes";
import "./DropDawn.scss";

// TODO нужно сделать dropdawn универсальным
const DropDawn = ({ setDropDawnOpen }) => {
  const ref = useRef(null);
  const svgRef = useRef(null);
  const dispatch = useDispatch();

  const outSideClick = (e) => {
    if (
      ref.current &&
      ref.current.contains(e.target) &&
      !svgRef.current.contains(e.target)
    ) {
      return;
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
          dispatch({ type: EDIT_MODAL });
        }}
      >
        Edit
      </div>
      <div
        className="control"
        onClick={() => {
          dispatch({ type: DELETE_MODAL });
        }}
      >
        Delete
      </div>
    </div>
  );
};

DropDawn.propTypes = {
  setDropDawnOpen: PropTypes.func,
};

export default DropDawn;
