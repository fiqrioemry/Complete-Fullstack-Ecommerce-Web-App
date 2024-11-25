import React from "react";
import ButtonElement from "./ButtonElement";

const FormElement = ({
  children,
  formStyle,
  formTitle,
  titleStyle,
  wrapperStyle,
  handleSubmit,
}) => {
  return (
    <div className={wrapperStyle}>
      <div className={titleStyle}>{formTitle}</div>
      <form onSubmit={handleSubmit} className={formStyle}>
        {children}
      </form>
    </div>
  );
};

export default FormElement;
