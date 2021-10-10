import React from "react";
import PropTypes from "prop-types";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import Select from "../../Elements/Select/Select";
import "./MovieForm.scss";
import TextArea from "../../Elements/TextArea/TextArea";

const MovieForm = ({ applyMode = true }) => {
  return (
    <form className="form-container">
      <div className="form-container__inputs">
        <div className="right">
          <Input title={"title"} placeholder="Title" />
          <Input title={"movie url"} placeholder="https://" />
          {/* <div className="select-input">
            <span className="label">genre</span>
            <div className="select-input__box">
              Select Genre <span className="expanded-icon">X</span>
            </div>
          </div> */}
          <Select placeholder={"Select genre"} label={"genre"} />
        </div>
        <div className="left">
          <Input title={"release date"} type="date" />

          <Input title={"rating"} placeholder="7.8" />

          <Input title={"runtime"} placeholder="minutes" />
        </div>
      </div>

      <TextArea title={"overview"} />
      <div className="buttons">
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
