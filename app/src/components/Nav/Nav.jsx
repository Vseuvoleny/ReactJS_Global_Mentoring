import React, { useState } from "react";
import "./Nav.scss";

const genres = [
  { title: "All", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Comedy", id: 3 },
  { title: "Horror", id: 4 },
  { title: "Crime", id: 5 },
];

const Nav = ({ setGenre }) => {
  const [activeFilm, setActiveFilm] = useState(1);

  return (
    <ul className="films-category__films">
      {genres.map((f) => (
        <li
          key={f.id}
          className={`film ${activeFilm === f.id ? "active" : ""}`}
          onClick={() => {
            setActiveFilm(f.id);
            setGenre(f.title);
          }}
        >
          {f.title}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
