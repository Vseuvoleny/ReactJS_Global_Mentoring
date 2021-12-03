import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setGenres } from "../../store/ActionCreator";
import { NavLink } from "./NavLink/NavLink";
import classes from "./Nav.module.scss";
import { IGenre, INav } from "./types";

const genres: IGenre[] = [
  { title: "All", id: 1, path: "" },
  { title: "Documentary", id: 2, path: "documentary" },
  { title: "Comedy", id: 3, path: "comedy" },
  { title: "Horror", id: 4, path: "horror" },
  { title: "Crime", id: 5, path: "crime" },
];

const Nav: FC<INav> = ({ genre }) => {
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
