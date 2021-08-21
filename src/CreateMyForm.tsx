import React from "react";

type btnTypes = "submit" | "reset" | "button";
export interface FormDefinition {
  fields: Array<{
    name?: string;
    label: string;
    type:
      | "text"
      | "password"
      | "textarea"
      | "select"
      | "checkbox"
      | "radio"
      | "number"
      | "email"
      | "date-time"
      | "tel";
    options?: Array<{
      id: number;
      name: string;
    }>;
  }>;
  heading?: string;
  Secondbutton?: btnTypes;
}

const CreateMyForm = ({ fields, heading, Secondbutton }: FormDefinition) => {
  return (
    <div className="container-fluid m-1">
      <div
        className="card"
        style={{ height: "calc(100% - 10%)", overflow: "auto" }}
      >
        <div
          className="card-body justify-content-evenly align-items-center m-2"
          style={{ fontFamily: "Poppins" }}
        >
          {heading ? <h3 className="card-title">{heading}</h3> : null}
          <form className="form-group">
            {fields.map((item, index) => {
              const { name, label, type, options } = item;
              return (
                <div className="row row-cols-12 m-1 p-1">
                  <div className="col col-6 col-lg-4 align-self-center">
                    <label htmlFor={`InputBox${index}`} className="form-label">
                      {label}
                    </label>
                  </div>
                  <div className="col cols-6 col-lg-4">
                    {type === "radio" || type === "checkbox" ? (
                      options?.map((item) => {
                        return (
                          <div className="form-check">
                            <input
                              type={type}
                              className="form-check-input"
                              id={`InputBox${item.id}`}
                              name={name}
                              value={item.id}
                            />
                            <label className="form-check-label">
                              {item.name}
                            </label>
                          </div>
                        );
                      })
                    ) : type === "select" ? (
                      <div className="m-1">
                        <select className="form-select" id={`InputBox${index}`}>
                          {options?.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                          })}
                        </select>
                      </div>
                    ) : (
                      <div className="m-1 p-1">
                        <input
                          className="form-control"
                          name={name}
                          id={`InputBox${index}`}
                          type={type}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="row row-cols-12 justify-cotent-between align-items-center">
              <div className="col col-6 col-lg-4 m-1">
                <button type={"submit"} className={"btn btn-primary m-1"}>
                  {"Submit"}
                </button>
              </div>

              {Secondbutton ? (
                <div className="col col-6 col-lg-4 m-1">
                  <button type={"submit"} className={"btn btn-secondary m-1"}>
                    {Secondbutton}
                  </button>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateMyForm;
