import React from "react";
import PropTypes from "prop-types";
import Button from "../../Elements/Button/Button";

const MovieForm = ({ applyMode = true }) => {
  return (
    <form className="form-container">
      <label>
        title
        <input type="text" />
      </label>
      <label>
        release date
        <input type="date" />
      </label>
      <label>
        movie url
        <input type="text" />
      </label>
      <label>
        rating
        <input type="text" />
      </label>
      <label>
        genre
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </label>
      <label>
        runtime
        <input type="text" />
      </label>
      <label>
        overview
        <textarea></textarea>
      </label>
      <div>
        <Button
          className="submit-form"
          type="submit"
          text="submit"
          clickHandler={() => {}}
        />
        <Button
          className="reset-form"
          type="reset"
          text="reset"
          clickHandler={() => {}}
        />
      </div>
    </form>
  );
};

MovieForm.propTypes = {
  applyMode: PropTypes.bool,
};
export default MovieForm;
