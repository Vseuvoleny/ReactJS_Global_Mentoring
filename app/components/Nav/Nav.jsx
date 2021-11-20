import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setGenres } from "../../store/ActionCreator";
import { NavLink } from "./NavLink/NavLink";
import classes from "./Nav.module.scss";

const genres = [
  { title: "All", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Comedy", id: 3 },
  { title: "Horror", id: 4 },
  { title: "Crime", id: 5 },
];

const Nav = ({ genre, setSearchParams }) => {
  const [activeLink, setLink] = useState(genre);
  const dispatch = useDispatch();

  return (
    <ul className={classes.films_category__films}>
      {genres.map((g) => {
        const title = g.title.toLowerCase();
        return (
          <NavLink
            title={title}
            key={g.id}
            clickHandler={() => {
              setSearchParams(
                title === "all" ? {} : { filter: title.toLowerCase() }
              );
              setLink(title);
              dispatch(setGenres(title));
            }}
            activeLink={activeLink}
          />
        );
      })}
    </ul>
  );
};

export default Nav;
