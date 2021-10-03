import React, { useState } from "react";
import PropTypes from "prop-types";
import RedTriangle from "../Icon/Icons/RedTriangle/RedTriangle";
import "./Select.scss";

const genres = [
  { title: "Crime", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Horror", id: 3 },
  { title: "Comedy", id: 3 },
];

const Select = ({ placeholder, label }) => {
  const [option, setOption] = useState([]);
  const [isListOpen, setListOpen] = useState(false);

  return (
    <div className="select-input">
      <span className="label">{label}</span>
      <div className="select-input__box">
        {option.length > 0 ? option.join(", ") : placeholder}
        <div className="expanded-list">
          <span
            onClick={() => setListOpen(!isListOpen)}
            className="expanded-list__icon"
          >
            <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
          </span>
        </div>
      </div>
      {isListOpen && (
        <div className="options">
          {genres.map((g) => (
            <div
              key={g.id}
              className="option"
              onClick={() => setOption((prev) => [g.title, ...prev])}
            >
              {g.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
};

export default Select;

// TODO
// сделать иконку через функцию
// сделать отдельные элементы для списка
// сделать закрытие через outsideclick
