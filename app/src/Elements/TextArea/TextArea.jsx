import React, { memo } from "react";
import PropTypes from "prop-types";
import "./TextArea.scss";

const TextArea = memo(({ title, value }) => {
  return (
    <div className="textarea-container">
      <label html={title} className="textarea-container__title">
        {title}
      </label>
      <textarea
        id={title}
        className="textarea-container__textarea"
        placeholder="Movie description"
        value={value}
      ></textarea>
    </div>
  );
});

TextArea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
