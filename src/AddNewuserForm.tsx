import React from "react";
import CreateMyForm, { FormDefinition } from "./CreateMyForm";

const AddNewuserForm = () => {
  const buttons: FormDefinition["buttons"] = [
    {
      name: "Submit",
      type: "submit",
      rank: "primary",
      onClick: (e) => {
        e.preventDefault();
        console.log("Submit button Clicked");
      },
    },
    {
      name: "Reset All",
      type: "reset",
      rank: "secondary",
      onClick: (e) => {
        console.log("Reset button Clicked");
      },
    },
  ];
  const newGroupFields: FormDefinition["groupedfields"] = [
    {
      field: {
        totalFields: 2,
        names: ["fname", "lname"],
        labels: ["First Name", "Last Name"],
        types: ["text", "text"],
        ChangeEvents: [
          (e) => {
            console.log(e.target.value);
          },
          (e) => {
            console.log(e.target.value);
          },
        ],
      },
    },
  ];
  const newUser: FormDefinition["fields"] = [
    {
      label: "Emailid",
      name: "emailid",
      type: "email",
    },
    {
      label: "Phone number",
      name: "phno",
      type: "tel",
    },
    {
      label: "Gender",
      type: "radio",
      name: "gender",
      options: [
        {
          id: 1,
          name: "Male",
        },
        {
          id: 2,
          name: "Female",
        },
        {
          id: 3,
          name: "Neutral",
        },
      ],
    },
    {
      label: "Languages known",
      type: "checkbox",
      name: "lang",
      options: [
        {
          id: 1,
          name: "Tamil",
        },
        {
          id: 2,
          name: "English",
        },
        {
          id: 3,
          name: "Hindi",
        },
        {
          id: 4,
          name: "Telugu",
        },
        {
          id: 5,
          name: "Bengali",
        },
      ],
    },
    {
      label: "Disease",
      type: "select",
      name: "disease",
      options: [
        {
          id: 0,
          name: "Select",
        },
        {
          id: 1,
          name: "Type 2 Diabetes",
        },
        {
          id: 2,
          name: "Diabetes",
        },
        {
          id: 3,
          name: "Chronic BP",
        },
        {
          id: 4,
          name: "Diabetes",
        },
      ],
    },
  ];
  return (
    <CreateMyForm
      fields={newUser}
      heading={"Member Adding"}
      buttons={buttons}
      groupedfields={newGroupFields}
    />
  );
};
export default AddNewuserForm;
