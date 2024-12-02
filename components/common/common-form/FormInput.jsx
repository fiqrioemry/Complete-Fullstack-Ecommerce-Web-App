import React from "react";
import FormControl from "./FormControl";
import ButtonElement from "@/components/element/ButtonElement";

const FormInput = ({
  formData,
  buttonText,
  setFormData,
  handleSubmit,
  formControls,
  isButtonLoading = false,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 capitalize">
      <FormControl
        formData={formData}
        setFormData={setFormData}
        formControls={formControls}
      />
      <ButtonElement
        type="submit"
        title={buttonText}
        isButtonDisabled={isButtonDisabled}
        isButtonLoading={isButtonLoading}
        className="w-full flex-center"
      />
    </form>
  );
};

export default FormInput;
