import React, { FC } from "react";
import { IErrorBoundary } from "./types";

const ErrorBoundary: FC<IErrorBoundary> = ({ children }) => {
  let hasError = false;

  const style = {
    textAlign: "center",
    marginTop: "20px",
  } as const;

  const Fallback = () => (
    <h2 style={style}>Something went wront. Please try to reload page.</h2>
  );
  if (hasError) {
    return <Fallback />;
  }
  return <>{children}</>;
};

export default ErrorBoundary;
