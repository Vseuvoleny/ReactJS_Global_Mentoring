import React from "react";
import PropTypes from "prop-types";
import "./MovieDetails.scss";

const MovieDetails = ({ title = "Pulp Fiction" }) => {
  return (
    <section className="movie-details">
      <picture className="movie-details__image">
        <img src="" alt="" width={323} height={486} />
      </picture>
      <section className="movie-details__description">
        <div className="movie-details__title">
          <span className="name">{title}</span>
          <span className="rate">
            <span>8.9</span>
          </span>
        </div>
        <div className="movie-details__genre">{"Action & Adventure"}</div>
        <div className="movie-details__year">
          <span className="year">1994</span>
          <span className="timeing">2h 34min</span>
        </div>
        <div className="movie-details__plot">
          Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta)
          are two hit men who are out to retrieve a suitcase stolen from their
          employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also
          asked Vincent to take his wife Mia (Uma Thurman) out a few days later
          when Wallace himself will be out of town. Butch Coolidge (Bruce
          Willis) is an aging boxer who is paid by Wallace to lose his fight.
          The lives of these seemingly unrelated people are woven together
          comprising of a series of funny, bizarre and uncalled-for
          incidents.—Soumitra
        </div>
      </section>
    </section>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string,
};

export default MovieDetails;
