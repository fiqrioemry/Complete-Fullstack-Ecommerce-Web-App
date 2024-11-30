import React from "react";

const CheckboxElement = ({ handleCheck, name = "", value = "", checked }) => {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="w-5 h-5"
      onChange={handleCheck}
      checked={checked}
    />
  );
};

export default CheckboxElement;
