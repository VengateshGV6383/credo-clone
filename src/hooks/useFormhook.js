import { useReducer, useState } from "react";

const useFormhooks = ({ initialValues, validateForm, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialValues);
  const reducer = (state, action) => {
    const errorObject = validateForm(values);
    return { ...state, [action.type]: errorObject[action.type] };
  };
  //to execute error!
  const [errors, dispatchError] = useReducer(reducer, validateForm(values));
  const [showErrors, setShowErrors] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    dispatchError({ type: name });
  };
  const handleFocus = (event) => {
    const { name } = event.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let successFullSubmssion = Object.keys(errors).every((key) => !errors[key]);
    if (successFullSubmssion) {
      onSubmit(values);
    } else {
      setShowErrors(true);
    }
  };

  return {
    values: values,
    errors: errors,
    touched: touched,
    showErrors: showErrors,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    handleFocus: handleFocus,
  };
};

export default useFormhooks;
