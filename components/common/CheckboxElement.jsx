import React from "react";

const CheckboxElement = ({ handleCheck, checked }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="w-5 h-5"
        onChange={handleCheck}
        checked={checked}
      />
    </div>
  );
};

export default CheckboxElement;
