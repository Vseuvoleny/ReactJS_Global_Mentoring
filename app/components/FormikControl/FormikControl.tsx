import React from "react";
import Input from "../../elements/Input/Input";
import Select from "../../elements/Select/Select";
import { ISelect } from "../../elements/Select/types";
import TextArea from "../../elements/TextArea/TextArea";
import { ITextArea } from "../../elements/TextArea/types";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...(rest as ITextArea)} />;
    case "select":
      return <Select {...(rest as ISelect)} />;
    default:
      return undefined;
  }
};

export default FormikControl;
