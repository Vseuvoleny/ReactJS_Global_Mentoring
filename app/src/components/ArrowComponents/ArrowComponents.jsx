import React from "react";
import "./ArrowComponents.scss";

export const ArrowComponents = ({ darkMode, setDarkMode }) => {
  return (
    <div className="arrow">
      <p>Dark Mode: {darkMode ? "On" : "Off"}</p>
      <input
        id="togler"
        hidden
        className="check"
        type="checkbox"
        onClick={() => setDarkMode(!darkMode)}
      />
      <label className="toggler" htmlFor="togler">
        <div className="control">
          <span></span>
        </div>
      </label>
    </div>
  );
};

export default ArrowComponents;
