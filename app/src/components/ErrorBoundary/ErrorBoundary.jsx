import React from "react";
import PropTypes from "prop-types";

const ErrorBoundary = ({ children }) => {
  let hasError = false;

  const style = {
    textAlign: "center",
    marginTop: "20px",
  };

  const Fallback = () => (
    <h2 style={style}>Something went wront. Please try to reload page.</h2>
  );
  if (hasError) {
    return <Fallback />;
  }
  return <>{children}</>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
