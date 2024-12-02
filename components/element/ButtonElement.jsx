import React from "react";
import { Button } from "../ui/button";
import SpinnerElement from "./SpinnerElement";

const ButtonElement = ({
  name,
  type = "submit",
  title = "submit",
  value,
  className,
  handleClick = null,
  isButtonDisabled = false,
  isButtonLoading = false,
}) => {
  return (
    <Button
      type={type}
      name={name}
      value={value}
      className={className}
      onClick={handleClick}
      disabled={isButtonDisabled || isButtonLoading}
    >
      {isButtonLoading ? <SpinnerElement /> : title}
    </Button>
  );
};

export default ButtonElement;
