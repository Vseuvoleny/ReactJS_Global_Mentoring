import React, { memo } from "react";
import { Formik, Form } from "formik";
import Button from "../../Elements/Button/Button";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";
import "./MovieForm.scss";

const modalSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  url: Yup.string().required("Required"),
  genres: Yup.array().required("Required"),
  date: Yup.date().required("Required"),
  rating: Yup.number().required("Required"),
  runtime: Yup.number().required("Required"),
  description: Yup.string().notRequired(),
});

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

  const onReset = (values) => {
    console.log("Rest form");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={modalSchema}
      onReset={onReset}
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-container__inputs">
              <div className="right">
                <FormikControl
                  name="title"
                  control="input"
                  title="title"
                  placeholder="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <FormikControl
                  name="url"
                  control="input"
                  title="url"
                  placeholder="https://"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                />
                <FormikControl
                  options={genres}
                  values={formik.values.genres}
                  control="select"
                  placeholder="Select genre"
                  label="genre"
                  name="genres"
                />
              </div>
              <div className="left">
                <FormikControl
                  name="date"
                  control="input"
                  type="date"
                  title="release_date"
                  placeholder=""
                  value={formik.values.release_date}
                  onChange={formik.handleChange}
                />

                <FormikControl
                  name="rating"
                  control="input"
                  title="rating"
                  placeholder="7.8"
                  value={formik.values.rating}
                  onChange={formik.handleChange}
                />

                <FormikControl
                  name="runtime"
                  control="input"
                  title="runtime"
                  placeholder="minutes"
                  value={formik.values.runtime}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <FormikControl
              name="overview"
              control="textarea"
              title="overview"
              value={formik.values.overview}
              onChange={formik.handleChange}
            />
            <div className="buttons">
              <Button className="submit-form" type="submit" text="submit" />
              <Button className="reset-form" type="reset" text="reset" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default MovieForm;
