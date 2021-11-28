import React, { memo } from "react";
import { Formik, Form } from "formik";
import Button from "../../Elements/Button/Button";
import * as Yup from "yup";
import FormikControl from "../FormikControl/FormikControl";
import classes from "./MovieForm.module.scss";

const modalSchema = Yup.object().shape({
  title: Yup.string().required("Заполните поле описания"),
  url: Yup.string().required("Заполните поле описания"),
  genres: Yup.array()
    .min(1, "Выберите жанр")
    .required("Заполните поле описания"),
  release_date: Yup.date().required("Заполните поле описания"),
  rating: Yup.number()
    .typeError("Должно быть число")
    .required("Заполните поле описания"),
  runtime: Yup.number()
    .typeError("Должно быть число")
    .required("Заполните поле описания"),
  overview: Yup.string().required("Заполните поле описания"),
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
    title: "",
    url: "",
    genres: [],
    release_date: "",
    rating: "",
    runtime: "",
    overview: "",
  };

  const onSubmit = (values) => {
    console.log("Submit form:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={modalSchema}
    >
      {({ values, handleChange, ...rest }) => {
        // TODO передалать верстку инпутов
        return (
          <Form>
            <div className={classes.form_container__inputs}>
              <div className={classes.right}>
                <FormikControl
                  name="title"
                  control="input"
                  title="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleChange}
                  {...rest}
                />
                <FormikControl
                  name="url"
                  control="input"
                  title="url"
                  placeholder="https://"
                  value={values.url}
                  onChange={handleChange}
                  {...rest}
                />
                <FormikControl
                  options={genres}
                  value={values.genres}
                  control="select"
                  placeholder="Select genre"
                  label="genre"
                  name="genres"
                  {...rest}
                />
              </div>
              <div className={classes.left}>
                <FormikControl
                  name="release_date"
                  control="input"
                  type="date"
                  title="release_date"
                  placeholder=""
                  value={values.release_date}
                  onChange={handleChange}
                  {...rest}
                />
                <FormikControl
                  name="rating"
                  control="input"
                  title="rating"
                  placeholder="7.8"
                  value={values.rating}
                  onChange={handleChange}
                  {...rest}
                />
                <FormikControl
                  name="runtime"
                  control="input"
                  title="runtime"
                  placeholder="minutes"
                  value={values.runtime}
                  onChange={handleChange}
                  {...rest}
                />
              </div>
            </div>

            <FormikControl
              name="overview"
              control="textarea"
              title="overview"
              value={values.overview}
              onChange={handleChange}
              {...rest}
            />
            <div className={classes.buttons}>
              <Button type="submit" text="submit" />
              <Button type="reset" text="reset" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});

export default MovieForm;
