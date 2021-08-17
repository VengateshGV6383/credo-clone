import { useReducer, useState } from "react";

const useFormhooks = ({ initialValues, validateForm, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const reducer = (state, action) => {
    const errorObject = validateForm(values);
    return { ...state, [action.type]: errorObject[action.type] };
  };
  //to execute error!
  const [error, dispatchError] = useReducer(reducer, validateForm(values));
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    dispatchError({ type: name });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let successFullSubmssion = Object.keys(error).every((key) => !error[key]);
    if (successFullSubmssion) {
      onSubmit(values);
    } else {
      onSubmit("clear errors");
    }
  };

  return {
    values: values,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    error: error,
  };
};

export default useFormhooks;
