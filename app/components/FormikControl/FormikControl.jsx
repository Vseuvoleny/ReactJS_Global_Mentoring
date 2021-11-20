import React from "react";
import Input from "../../elements/Input/Input";
import Select from "../../elements/Select/Select";
import TextArea from "../../elements/TextArea/TextArea";

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
