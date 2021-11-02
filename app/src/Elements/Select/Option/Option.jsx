// import React from "react";
// import PropTypes from "prop-types";
// import { Field } from "formik";
// import "./Option.scss";

// const Option = ({ classes = "", title, name }) => {
//   return (
//     <>
//       <Field name={name}>
//         {({ field }) => {
//           return options.map((option) => {
//             return (
//               <React.Fragment key={option.key}>
//                 <input
//                   type="checkbox"
//                   id={option.value}
//                   {...field}
//                   {...rest}
//                   value={option.value}
//                   checked={field.value.includes(option.value)}
//                 />
//                 <label htmlFor={option.value}>{option.key}</label>
//               </React.Fragment>
//             );
//           });
//         }}
//       </Field>
//     </>
//   );
// };

// Option.propTypes = {
//   onClick: PropTypes.func,
//   classes: PropTypes.string,
//   title: PropTypes.string,
// };

// export default Option;
