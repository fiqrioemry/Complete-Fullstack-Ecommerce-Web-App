import React from "react";
import { Input } from "@/components/ui/input";

const FormControl = ({ formData, setFormData, formControls = [] }) => {
  const selectRenderComponent = (selectControl) => {
    let element = null;

    const controlValue = formData[selectControl.name] || "";

    const handleChange = (e) => {
      setFormData({ ...formData, [selectControl.name]: e.target.value });
    };

    switch (selectControl.componentType) {
      case "input":
        element = (
          <Input
            id={selectControl.name}
            name={selectControl.name}
            type={selectControl.type}
            value={controlValue}
            placeholder={selectControl.placeholder}
            onChange={handleChange}
          />
        );
        break;
      case "checkbox":
        element = (
          <Input
            id={selectControl.name}
            name={selectControl.name}
            type={selectControl.type}
            value={controlValue}
            onChange={handleChange}
            checked={selectControl}
          />
        );
        break;
      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
    }
    return element;
  };
  return (
    <>
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          <label htmlFor={controlItem.name}>{controlItem.label}</label>
          {selectRenderComponent(controlItem)}
        </div>
      ))}
    </>
  );
};

export default FormControl;
