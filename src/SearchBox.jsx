import React from "react";
import { useHistory } from "react-router";
const SearchBox = (props) => {
  const history = useHistory();
  return (
    <form
      className="ui form"
      onSubmit={() => {
        window.alert("To be implented with apis");
      }}
    >
      <div className="field">
        <label
          style={{
            color: props.theme ? "#ffff" : "black",
            fontFamily: "Poppins",
            fontWeight: "500",
          }}
        >
          Type Records to Search
        </label>
        <input type="text" name="q" placeholder="Search records" />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" name="fleg-ID" tabIndex="0" />
          <label
            style={{
              color: props.theme ? "#ffff" : "black",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            ID
          </label>
        </div>
        <div className="ui checkbox" style={{ margin: "5px" }}>
          <input type="checkbox" name="flag-name" tabIndex="0" />
          <label
            style={{
              color: props.theme ? "#ffff" : "black",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Name
          </label>
        </div>
        <div className="ui checkbox" style={{ margin: "5px" }}>
          <input type="checkbox" name="flag-mailid" tabIndex="0" />
          <label
            style={{
              color: props.theme ? "#ffff" : "black",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            Mailid
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="ui primary button m-1"
        style={{ backgroundColor: props.theme ? "#00E396" : null }}
      >
        Search
      </button>
      <button
        type="button"
        className="ui secondary button m-1"
        style={{ backgroundColor: props.theme ? "#BB86FC" : null }}
        onClick={() => history.push("/credo-clone/newmember")}
      >
        Add
      </button>
    </form>
  );
};

export default SearchBox;
