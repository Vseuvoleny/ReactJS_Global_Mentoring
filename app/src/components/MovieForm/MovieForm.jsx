import React, { memo } from "react";
import Button from "../../Elements/Button/Button";
import Input from "../../Elements/Input/Input";
import Select from "../../Elements/Select/Select";
import "./MovieForm.scss";
import TextArea from "../../Elements/TextArea/TextArea";
import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      title: "",
      url: "",
      genres: [],
      date: "",
      rating: "",
      runtime: "",
      description: "",
    },
  });

  return (
    <form className="form-container">
      <div className="form-container__inputs">
        <div className="right">
          <Input
            title={"title"}
            placeholder="Title"
            value={formik.initialValues.title}
          />
          <Input
            title={"movie url"}
            placeholder="https://"
            value={formik.initialValues.url}
          />
          <Select
            placeholder={"Select genre"}
            label={"genre"}
            option={formik.initialValues.genres}
            onClick={clickHandlerSelect}
          />
        </div>
        <div className="left">
          <Input
            title={"release date"}
            type="date"
            value={formik.initialValues.date}
          />

          <Input
            title={"rating"}
            placeholder="7.8"
            value={formik.initialValues.rating}
          />

          <Input
            title={"runtime"}
            placeholder="minutes"
            value={formik.initialValues.runtime}
          />
        </div>
      </div>

      <TextArea title={"overview"} value={formik.initialValues.description} />
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
});

export default MovieForm;
