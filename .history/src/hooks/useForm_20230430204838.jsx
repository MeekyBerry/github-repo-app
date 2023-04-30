import { useState } from "react";

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const updateForm = (e) => {
    let { value, name } = e.target;
    // if (type === "number") {
    //   value = parseInt(value);
    // }
    // if (type === "file") {
    //   [value] = e.target.files;
    // }
    setInputs({
      // Copy the existing state
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {

  // Return the things we want to surface from this custom hook
  return {
    inputs,
    resetForm,
    updateForm,
    clearForm,
  };
};

export default useForm;
