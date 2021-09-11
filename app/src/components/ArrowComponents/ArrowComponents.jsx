import React from "react";

export const ArrowComponents = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <p>Dark Mode: {darkMode ? "On" : "Off"}</p>

      <label>
        Mode Toggler
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
      </label>
    </div>
  );
};

export default ArrowComponents;
