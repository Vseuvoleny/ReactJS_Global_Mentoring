import React, { useState } from "react";
import "./Nav.scss";

const films = [
  { title: "All", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Comedy", id: 3 },
  { title: "Horror", id: 4 },
  { title: "crime", id: 5 },
];

const Nav = () => {
  const [activeFilm, setActiveFilm] = useState(1);

  return (
    <div className="films-category">
      <ul className="films-category__films">
        {films.map((f) => (
          <li
            key={f.id}
            className={`film ${activeFilm === f.id ? "active" : ""}`}
            onClick={() => setActiveFilm(f.id)}
          >
            {f.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrowComponents;
