import React, { memo, useCallback, useState } from "react";
import { Formik } from "formik";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import Select from "../../Elements/Select/Select";
import TextArea from "../../Elements/TextArea/TextArea";
import * as Yup from "yup";
import "./MovieForm.scss";

const modalSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  url: Yup.string().required("Required"),
  genres: Yup.array(string()).required("Required"),
  date: Yup.date().required("Required"),
  rating: Yup.number().required("Required"),
  runtime: Yup.number().required("Required"),
  description: Yup.string().notRequired(),
});

const MovieForm = memo(() => {
  const [option, setOption] = useState([]);

  const clickHandlerSelect = useCallback(
    (title) => {
      setOption(
        option.includes(title)
          ? option.filter((g) => g !== title)
          : (prev) => [...prev, title]
      );
    },
    [option]
  );

  return (
    <Formik
      initialValues={{
        title: "",
        url: "",
        genres: [],
        date: "",
        rating: "",
        runtime: "",
        description: "",
      }}
      validationSchema={modalSchema}
      onReset={() => {}}
      onSubmit={() => {}}
    >
      {(formik) => {
        return (
          <form className="form-container" onSubmit={() => {}}>
            <div className="form-container__inputs">
              <div className="right">
                <Input
                  name="title"
                  title={"title"}
                  placeholder="Title"
                  value={formik.initialValues.title}
                />
                <Input
                  name="url"
                  title={"movie url"}
                  placeholder="https://"
                  value={formik.initialValues.url}
                />
                <Select
                  name="genres"
                  placeholder={"Select genre"}
                  label={"genre"}
                  option={formik.initialValues.genres}
                  onChange={clickHandlerSelect}
                />
              </div>
              <div className="left">
                <Input
                  name="date"
                  title={"release date"}
                  type="date"
                  value={formik.initialValues.date}
                />

                <Input
                  name="rating"
                  title={"rating"}
                  placeholder="7.8"
                  value={formik.initialValues.rating}
                />

                <Input
                  name="runtime"
                  title={"runtime"}
                  placeholder="minutes"
                  value={formik.initialValues.runtime}
                />
              </div>
            </div>

            <TextArea
              name="description"
              title={"overview"}
              value={formik.initialValues.description}
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
          </form>
        );
      }}
    </Formik>
  );
});

export default MovieForm;
