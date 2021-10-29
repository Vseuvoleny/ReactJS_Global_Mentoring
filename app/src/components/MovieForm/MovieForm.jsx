import React, { memo, useCallback, useState } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import Select from "../../Elements/Select/Select";
import "./MovieForm.scss";
import TextArea from "../../Elements/TextArea/TextArea";
import { useFormik, Formik, Form, FormikProvider, Field } from "formik";
import FormikControl from "../FormikControl/FormikControl";

const genres = [
  { title: "Crime", id: 1 },
  { title: "Documentary", id: 2 },
  { title: "Horror", id: 3 },
  { title: "Comedy", id: 4 },
];

const MovieForm = memo(() => {
  // TODO нужно будет получать из запроса данные по фильму
  // для случаев edit movie
  const initialValues = {
    title: null,
    url: "",
    genres: [],
    release_date: null,
    rating: "",
    runtime: "",
    overview: "",
  };

  const onSubmit = (values) => {
    console.log("Submit form:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        console.log(formik.values);
        return (
          <Form>
            <div className="form-container__inputs">
              <div className="right">
                <FormikControl
                  control="input"
                  title="title"
                  placeholder="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <FormikControl
                  control="input"
                  title="url"
                  placeholder="https://"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                />
                <FormikControl
                  options={genres}
                  control="select"
                  placeholder="Select genre"
                  label="genre"
                  value={formik.values.genres}
                  onChange={formik.setFieldValue}
                />
              </div>
              <div className="left">
                <FormikControl
                  control="input"
                  type="date"
                  title="release_date"
                  placeholder=""
                  value={formik.values.release_date}
                  onChange={formik.handleChange}
                />

                <FormikControl
                  control="input"
                  title="rating"
                  placeholder="7.8"
                  value={formik.values.rating}
                  onChange={formik.handleChange}
                />

                <FormikControl
                  control={"input"}
                  title={"runtime"}
                  placeholder="minutes"
                  value={formik.values.runtime}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <FormikControl
              control="textarea"
              title="overview"
              value={formik.values.overview}
              onChange={formik.handleChange}
            />
            <div className="buttons">
              <Button className="submit-form" type="submit" text="submit" />
              <Button
                className="reset-form"
                type="reset"
                text="reset"
                clickHandler={() => {}}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default MovieForm;
