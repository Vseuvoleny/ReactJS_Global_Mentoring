import React from "react";
import PropTypes from "prop-types";

const MovieDetails = ({ title = "Pulp Fiction" }) => {
  return (
    <section className="movie-details">
      <picture className="movie-details__image">
        <img src="" alt="" />
      </picture>
      <section className="movie-details__description">
        <div>
          <span>{title}</span>
          <span> 8.9</span>
        </div>
        <div className="movie-genre">{"Action & Adventure"}</div>
        <div>
          <span>1994</span>
          <span>2h 34min</span>
        </div>
        <div>
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
