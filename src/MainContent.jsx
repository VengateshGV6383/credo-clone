import React from "react";
import SearchBox from "./SearchBox";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { NavLink } from "react-router-dom";
import "./MainContent.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
const MainContent = (props) => {
  let url;
  const rowStyle = "rows";
  if (props.location.pathname.search("credo-clone")) {
    url = "/credo-clone";
  } else {
    url = props.location.pathname;
  }
  const NavLinkRenderer = (param) => {
    return (
      <span>
        <NavLink
          style={{ textDecorationLine: "none" }}
          to={{ pathname: `${url}/dashboard`, state: { id: param.value } }}
        >
          {`CredoID${param.value}`}
        </NavLink>
      </span>
    );
  };

  const records = [
    {
      id: "1",
      name: "Vengatesh",
      MailID: "Vengat.gv@yahoo.com",
      age: "20",
      Bg: "A1+ve",
      gen: "Male",
      position: "Trainee",
    },
    {
      id: "2",
      name: "Archana Devi",
      MailID: "Archana.devi@yahoo.com",
      age: "22",
      Bg: "A+ve",
      gen: "Female",
      position: "Trainee",
    },
    {
      id: "3",
      name: "Badrinath",
      MailID: "Badri.credo@yahoo.com",
      age: "22",
      Bg: "O+ve",
      gen: "Male",
      position: "Trainee",
    },
    {
      id: "4",
      name: "Balaji",
      MailID: "Balaji.credo@yahoo.com",
      age: "22",
      Bg: "O-ve",
      gen: "Male",
      position: "Trainee",
    },
    {
      id: "5",
      name: "Samuel",
      MailID: "Samuel.bardi@yahoo.com",
      age: "20",
      Bg: "O+ve",
      gen: "Male",
      position: "Trainee",
    },
    {
      id: "6",
      name: "Kishore",
      MailID: "Kishore.gv@yahoo.com",
      age: "20",
      Bg: "B+ve",
      gen: "Male",
      position: "Trainee",
    },
  ];
  const getFrameWorkComponent = {
    NavLinkRenderer: NavLinkRenderer,
  };

  return (
    <React.Fragment>
      <div className="main-content">
        <div className="heading">{`${props.name}'s Record`}</div>

        <div className="ui segment search-area">
          <SearchBox />
        </div>

        <div
          className="ui segment records ag-theme-alpine "
          style={{ width: "calc(100%-50px)" }}
        >
          <AgGridReact
            pagination={true}
            paginationPageSize={10}
            defaultColDef={{
              sortable: true,
              filter: true,

              pivotMode: false,
              rowDrag: false,
            }}
            rowData={records}
            rowClass={rowStyle}
            frameworkComponents={getFrameWorkComponent}
          >
            <AgGridColumn
              field="id"
              cellRenderer="NavLinkRenderer"
            ></AgGridColumn>

            <AgGridColumn field="name"></AgGridColumn>
            <AgGridColumn field="MailID"></AgGridColumn>
            <AgGridColumn field="age"></AgGridColumn>
            <AgGridColumn field="position"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainContent;
