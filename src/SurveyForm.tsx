import React from "react";
import useFormhooks from "./hooks/useFormhook";
const SurveyForm = () => {
  const questions = [
    "What do you think about credo-clone ?",
    "How can I improve my dashboard ?",
    "Any valuable feedback ?",
  ];
  const validateForm = (values: any) => {
    const error: any = {};
    if (!values.q1) error.q1 = "Required";
    else if (values.q1.length > 25)
      error.q1 = "Should not exceed more than 25 characters";
    if (!values.q2) error.q2 = "Required";
    else if (values.q2.length > 25)
      error.q2 = "Should not exceed more than 25 characters";

    if (!values.q3) error.q3 = "Required";
    else if (values.q3.length > 25)
      error.q3 = "Should not exceed more than 25 characters";

    return error;
  };
  const formhooks = useFormhooks({
    initialValues: {
      q1: "",
      q2: "",
      q3: "",
    },
    validateForm,
    onSubmit: (values: any) => {
      window.alert(JSON.stringify(values));
    },
  });
  return (
    <div
      className="container-fluid p-1 m-1"
      style={{ overflow: "auto", height: "calc(100% - 10%)" }}
    >
      <div className="card" style={{ fontFamily: "Poppins" }}>
        <div className="card-body">
          <div className="card-title">
            <h3>Welcome to Credo-Clone survey,</h3>
          </div>
          <form onSubmit={formhooks.handleSubmit}>
            {questions.map((item, index) => {
              return (
                <div key={index}>
                  <div className="row row-cols-12 m-1 p-1">
                    <div className="col col-12 col-md-6">
                      <label htmlFor={`QuestionNo${index}`}>
                        {`${index + 1}.  ${item}`}
                      </label>
                    </div>
                  </div>
                  <div className="row row-cols-12 m-1 p-1">
                    <div className="col col-12 col-md-6">
                      {index === 2 ? (
                        <textarea
                          className="form-control"
                          rows={5}
                          onChange={formhooks.handleChange}
                          value={formhooks.values[`q3`]}
                          name={`q3`}
                          onFocus={formhooks.handleFocus}
                        ></textarea>
                      ) : (
                        <input
                          className="form-control"
                          type={"text"}
                          id={`QuestionNo${index}`}
                          onChange={formhooks.handleChange}
                          value={formhooks.values[`q${index + 1}`]}
                          name={`q${index + 1}`}
                        />
                      )}
                      {formhooks.showErrors &&
                      formhooks.errors[`q${index + 1}`] ? (
                        <div className="ui pointing basic red label">
                          {formhooks.errors[`q${index + 1}`]}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="m-2 ms-3 p-1">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
