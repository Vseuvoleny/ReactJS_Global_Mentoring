import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { setGenres } from "../../Store/ActionCreator";
import { NavLink } from "./NavLink/NavLink";
import { useSearchParams } from "react-router-dom";
import "./Nav.scss";

const genres = [
  { title: "All", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Comedy", id: 3 },
  { title: "Horror", id: 4 },
  { title: "Crime", id: 5 },
];

const Nav = memo(() => {
  const [_activeFilm, setActiveFilm] = useState(1);
  const [_searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  return (
    <ul className="films-category__films">
      {genres.map((f) => (
        <NavLink
          to={`${f.title}`}
          title={f.title}
          key={f.id}
          clickHandler={() => {
            setSearchParams({ filter: f.title });
            setActiveFilm(f.id);
            dispatch(setGenres(f.title));
          }}
        />
      ))}
    </ul>
  );
});

export default Nav;
