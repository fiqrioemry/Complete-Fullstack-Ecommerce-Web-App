import React from "react";

const InputElement = ({
  name,
  value,
  style,
  onChange,
  placeholder,
  type = "text",
  children,
}) => {
  return (
    <div className="flex-center relative ">
      <input
        type={type}
        name={name}
        value={value}
        className={style}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      {children}
    </div>
  );
};

export default InputElement;
