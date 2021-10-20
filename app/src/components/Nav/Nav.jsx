import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { setGenres } from "../../Store/ActionCreator";
import "./Nav.scss";

const Nav = memo(() => {
  const [activeFilm, setActiveFilm] = useState(1);
  const dispatch = useDispatch();

  const genres = [
    { title: "All", id: 1 },
    { title: "Documentary", id: 2 },
    { title: "Comedy", id: 3 },
    { title: "Horror", id: 4 },
    { title: "Crime", id: 5 },
  ];

  return (
    <ul className="films-category__films">
      {genres.map((f) => (
        <li
          key={f.id}
          className={`film ${activeFilm === f.id ? "active" : ""}`}
          onClick={() => {
            setActiveFilm(f.id);
            dispatch(setGenres(f.title));
          }}
        >
          {f.title}
        </li>
      ))}
    </ul>
  );
});

export default Nav;
