import React from "react";

import SpinnerElement from "./SpinnerElement";
import { Button } from "../ui/button";

const ButtonElement = ({
  title,
  style,
  name = "",
  type = null,
  loading,
  handleClick = null,
  variant = "primary",
}) => {
  return (
    <Button
      type={type}
      name={name}
      variant={variant}
      className={`${loading ? "cursor-not-allowed" : ""} ${style}`}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <SpinnerElement /> : <>{title}</>}
    </Button>
  );
};

export default ButtonElement;
