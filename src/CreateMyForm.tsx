import React, { ChangeEvent, FormEvent } from "react";
type inpType =
  | "text"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "number"
  | "email"
  | "date"
  | "time"
  | "tel";
type btnTypes = "submit" | "reset" | "button";
type rankType = "primary" | "secondary" | "info" | "warning";
type changeEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;

export interface FormDefinition {
  groupedfields?: Array<{
    field: {
      totalFields: number;
      names: string[];
      labels: string[];
      types: inpType[];
      options?: Array<{
        id: number;
        name: string;
      }>;
      ChangeEvents: Array<(e: changeEvents) => void>;
      rows?: number;
      maxlen?: number;
    };
  }>;
  fields: Array<{
    name: string;
    label: string;
    type: inpType;
    options?: Array<{
      id: number;
      name: string;
    }>;
    onChange?: (e: changeEvents) => void;
    rows?: number;
    maxlen?: number;
  }>;
  heading?: string;
  secondaryButton?: btnTypes;
  darkButton?: btnTypes;
  warningButton?: btnTypes;
  buttons?: Array<{
    name: string;
    type: btnTypes;
    onClick?: (e: FormEvent | React.MouseEvent<HTMLButtonElement>) => void;
    color?: string;
    rank?: rankType;
  }>;
}

const CreateMyForm = ({
  groupedfields,
  fields,
  heading,
  buttons,
}: FormDefinition) => {
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
            {groupedfields?.map((item, index) => {
              const {
                names,
                labels,
                types,
                options,
                ChangeEvents,
                rows,
                maxlen,
              } = item.field;
              return (
                <div key={index}>
                  <div className="row row-cols-12  m-1 p-1">
                    {labels.map((item, index) => {
                      return (
                        <div
                          className={`col col-3 align-self-center`}
                          key={"groupedLabel" + index}
                        >
                          <label
                            className="form-label"
                            htmlFor={`grp${types[index]}Label${index}`}
                          >
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row row-cols-12 justify-content-start m-1 p-1">
                    {types.map((type, index) => {
                      return (
                        <div
                          className="col col-3  align-self-center "
                          key={`grouped${type}_${index}`}
                        >
                          {type === "radio" || type === "checkbox" ? (
                            options?.map((item) => {
                              return (
                                <div className="form-check" key={item.id}>
                                  <input
                                    type={type}
                                    className="form-check-input"
                                    id={`grp${types[index]}Label${index}`}
                                    name={names[index]}
                                    value={item.id}
                                    onChange={ChangeEvents[index]}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`${type}_${item.id}`}
                                  >
                                    {item.name}
                                  </label>
                                </div>
                              );
                            })
                          ) : type === "select" ? (
                            <div className="m-1">
                              <select
                                className="form-select"
                                id={`grp${types[index]}Label${index}`}
                                onChange={ChangeEvents[index]}
                                name={names[index]}
                              >
                                {options?.map((item) => {
                                  return (
                                    <option value={item.id} key={item.id}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          ) : type === "text" ||
                            type === "email" ||
                            type === "password" ||
                            type === "number" ||
                            type === "tel" ||
                            type === "date" ||
                            type === "time" ? (
                            <div className="m-1 p-1">
                              <input
                                className="form-control"
                                name={names[index]}
                                id={`grp${types[index]}Label${index}`}
                                type={type}
                                onChange={ChangeEvents[index]}
                                maxLength={maxlen}
                              />
                            </div>
                          ) : (
                            <div className="m-1 p-1">
                              <textarea
                                className="form-control"
                                name={names[index]}
                                id={`grp${types[index]}Label${index}`}
                                rows={rows}
                                onChange={ChangeEvents[index]}
                              ></textarea>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {fields.map((item, index) => {
              const { name, label, type, options, onChange, rows, maxlen } =
                item;
              return (
                <div className={`row row-cols-12 m-1 p-1`} key={index}>
                  <div className={`col col-6 col-lg-4 align-self-center`}>
                    <label htmlFor={`${type}_${index}`} className="form-label">
                      {label}
                    </label>
                  </div>
                  <div className="col cols-6 col-lg-4">
                    {type === "radio" || type === "checkbox" ? (
                      options?.map((item, index) => {
                        return (
                          <div className="form-check" key={index}>
                            <input
                              type={type}
                              className="form-check-input"
                              id={`${type}_${item.id}`}
                              name={name}
                              value={item.id}
                              onChange={onChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`${type}_${item.id}`}
                            >
                              {item.name}
                            </label>
                          </div>
                        );
                      })
                    ) : type === "select" ? (
                      <div className="m-1">
                        <select
                          className="form-select"
                          id={`${type}_${index}`}
                          onChange={onChange}
                        >
                          {options?.map((item, index) => {
                            return (
                              <option value={item.id} key={index}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : type === "text" ||
                      type === "email" ||
                      type === "password" ||
                      type === "number" ||
                      type === "tel" ||
                      type === "date" ||
                      type === "time" ? (
                      <div className="m-1 p-1">
                        <input
                          className="form-control"
                          name={name}
                          id={`${type}_${index}`}
                          type={type}
                          onChange={onChange}
                          maxLength={maxlen}
                        />
                      </div>
                    ) : (
                      <div className="m-1 p-1">
                        <textarea
                          className="form-control"
                          name={name}
                          id={`textarea_${index}`}
                          rows={rows}
                          onChange={onChange}
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="row row-cols-12  align-items-center m-1 p-1">
              {buttons
                ? buttons.map((item, index) => {
                    const { name, type, onClick, color, rank } = item;
                    return (
                      <div
                        className="col col-1 col-xxl-2 justify-self-start m-1  p-1"
                        key={index}
                      >
                        <button
                          type={type}
                          className={
                            rank
                              ? `btn btn-sm btn-${rank}`
                              : "btn btn-sm btn-primary"
                          }
                          style={{
                            backgroundColor: color ? color : " ",
                            cursor: "pointer",
                          }}
                          onClick={
                            onClick
                              ? onClick
                              : () => console.log("Button" + index + "clicked")
                          }
                        >
                          {name}
                        </button>
                      </div>
                    );
                  })
                : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateMyForm;
