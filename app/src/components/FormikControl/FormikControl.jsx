import React from "react";
import Input from "../../Elements/Input/Input";
import Select from "../../Elements/Select/Select";
import TextArea from "../../Elements/TextArea/TextArea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return undefined;
  }
};

export default FormikControl;
