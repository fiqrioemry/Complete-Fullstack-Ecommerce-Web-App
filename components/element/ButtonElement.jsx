import React from "react";

import SpinnerElement from "./SpinnerElement";
import { Button } from "../ui/button";

const ButtonElement = ({
  title,
  style,
  type = null,
  loading,
  handleClick = null,
  variant = "primary",
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={style}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <SpinnerElement /> : <>{title}</>}
    </Button>
  );
};

export default ButtonElement;
