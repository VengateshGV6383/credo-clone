import React from "react";
import Graph from "react-apexcharts";
import "./Dashboard.css";
import Datetime from "react-datetime";
import { useLocation } from "react-router-dom";
import "react-datetime/css/react-datetime.css";
import UserDetails from "./UserDetails";
import moment from "moment";
import { useState } from "react";
const Chart = (props) => {
  const { ThemeContext, theme, dashboardtheme } = props;
  console.log(dashboardtheme);
  const location = useLocation();
  const [chartOneType, setChartoneType] = useState("line");
  const [chartTwoType, setCharttwoType] = useState("line");
  const [dataSeries, setDataSeries] = useState([]);
  const [from, setFrom] = useState([]);
  const [TO, setTO] = useState([]);
  const valueArr = location.state ? location.state.value : [];

  const validateTO = function (current) {
    return (
      current.isBefore(new Date()) && current.isAfter(new Date(2020, 8, 30))
    );
  };
  const validateFrom = function (current) {
    return (
      current.isBefore(new Date()) && current.isAfter(new Date(2020, 8, 30))
    );
  };

  const getDifference = () => {
    let a, b;
    if (from.length === 0 && TO.length === 0)
      window.alert("Please select range...");
    else {
      if (from.length === 0) window.alert("Select a starting date...");
      else {
        a = moment(TO);
      }
      if (TO.length === 0) window.alert("Select a Ending date...");
      else {
        b = moment(from);
      }
    }
    if (a && b) {
      let getRange = a.diff(b, "days", false);
      if (getRange < 0) {
        window.alert("Please do selections  range correctly");
      } else {
        let arr = [];

        valueArr.forEach((item) => {
          arr.push(parseInt(item) + getRange);
        });

        setDataSeries(arr);
      }
    }
  };

  const [showRange, SetshowRange] = useState(false);
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <React.Fragment>
      <div className="container-fluid m-1 cotainer-body">
        <ThemeContext.Provider
          value={theme ? dashboardtheme.dark : dashboardtheme.light}
        >
          <UserDetails
            id={location.state ? location.state.id : "1"}
            ThemeContext={ThemeContext}
          />
        </ThemeContext.Provider>
        <div
          className="row justify-content-center align-items-center m-1"
          style={{
            border: "2px solid",
            borderColor: theme ? "#ffff" : "rgba(0, 0, 0, 0.125)",
            borderRadius: "10px",
            backgroundColor: theme ? "#1F1B24" : "#ffff",
          }}
        >
          <div className="row row-cols-4 flex m-1 justify-content-evenly macro-details">
            <div className="col col-12">
              <div
                className="card-body"
                style={{ borderBottom: "2px solid gainsboro" }}
              >
                <div className="row row-cols-3 justify-content-start">
                  <div className="col col-9" style={{ fontFamily: "Poppins" }}>
                    <h6>
                      {location.state.heading
                        ? location.state.heading
                        : "Chart"}
                    </h6>
                  </div>
                  <div className="col col-3">
                    <button
                      className={`btn ${
                        theme ? "btn-primary" : "btn-secondary"
                      } btn-md align-self-end`}
                      style={{
                        fontFamily: "Poppins",
                        letterSpacing: "1px",
                        backgroundColor: theme ? "#00E396" : null,
                        borderColor: theme ? "#00E396" : null,
                      }}
                      onClick={goBack}
                    >
                      Back
                    </button>
                  </div>
                </div>
                <div className="row row-cols-12 justify-content-start  m-1 chart-type">
                  <div className="col col-4 col-3 col-lg-4  p-1">
                    <h6 style={{ color: theme ? "#ffff" : "black" }}>
                      D1 Chart type&emsp;
                    </h6>
                    <select
                      className="ui dropdown select p-2"
                      style={{ fontFamily: "Poppins" }}
                      onChange={(e) => setChartoneType(`${e.target.value}`)}
                    >
                      <option className="option" value="line">
                        Line
                      </option>
                      <option className="option" value="area">
                        Area
                      </option>
                      <option className="option" value="column">
                        Column
                      </option>
                    </select>
                  </div>

                  <div className="col col-4 col-lg-4 p-1">
                    <h6 style={{ color: theme ? "#ffff" : "black" }}>
                      D2 Chart type&emsp;
                    </h6>
                    <select
                      className="ui dropdown select p-2"
                      style={{ fontFamily: "Poppins" }}
                      onChange={(e) => setCharttwoType(`${e.target.value}`)}
                    >
                      <option className="option" value="line">
                        Line
                      </option>
                      <option className="option" value="area">
                        Area
                      </option>
                      <option className="option" value="column">
                        Column
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="row row-cols-7 justify-content-start  m-1"
                  style={{ height: "30px" }}
                >
                  <div className="col col-4 col-lg-2 p-1 ">
                    <div className="form-check form-switch ">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="setRangeCheckBox"
                        onChange={() => SetshowRange(!showRange)}
                      />
                      <label
                        htmlFor="setRangeCheckBox"
                        style={{
                          fontFamily: "Poppins,sanserif",
                          fontWeight: "500",
                          color: theme ? "#ffff" : "black",
                        }}
                      >
                        Range
                      </label>
                    </div>
                  </div>
                  <div
                    className="col col-4 col-lg-2"
                    style={{
                      display: showRange ? "flex" : "none",
                      transitionProperty: "display",
                      transitionTimingFunction: "ease-in-out",
                      transitionDuration: "1s",
                    }}
                  >
                    <h6
                      className="m-2"
                      style={{ color: theme ? "#ffff" : "black" }}
                    >
                      From
                    </h6>

                    <Datetime
                      closeOnSelect={true}
                      inputProps={{
                        placeholder: "DD-MM-YYYY",
                        readOnly: true,
                        style: { backgroundColor: "white" },
                      }}
                      dateFormat={"DD-MMM-YYYY"}
                      timeFormat={false}
                      isValidDate={validateFrom}
                      onChange={(date) =>
                        setFrom([
                          moment(date._d).format("YYYY"),
                          moment(date._d).format("MM"),
                          moment(date._d).format("DD"),
                        ])
                      }
                    />
                  </div>

                  <div
                    className="col col-4 col-lg-2"
                    style={{
                      display: showRange ? "flex" : "none",
                      transitionProperty: "display",
                      transitionTimingFunction: "ease-in-out",
                      transitionDuration: "1s",
                    }}
                  >
                    <h6
                      className="m-2"
                      style={{ color: theme ? "#ffff" : "black" }}
                    >
                      To
                    </h6>
                    <Datetime
                      closeOnSelect={true}
                      inputProps={{
                        placeholder: "DD-MM-YYYY",
                        readOnly: true,
                        style: { backgroundColor: "white" },
                      }}
                      dateFormat={"DD-MMM-YYYY"}
                      timeFormat={false}
                      isValidDate={validateTO}
                      onChange={(date) =>
                        setTO([
                          moment(date._d).format("YYYY"),
                          moment(date._d).format("MM"),
                          moment(date._d).format("DD"),
                        ])
                      }
                    />
                  </div>
                  <div
                    className="col col-3 col-lg-2 "
                    style={{
                      display: showRange ? "flex" : "none",
                    }}
                  >
                    <button
                      className="btn btn-primary btn-md"
                      onClick={() => getDifference()}
                      style={{
                        backgroundColor: theme ? "#00E396" : null,
                        borderColor: theme ? "#00E396" : null,
                        fontFamily: "Poppins",
                      }}
                    >
                      Show
                    </button>
                  </div>
                </div>

                <div className="row row-cols-3 justify-content-center m-2">
                  <div className="col col-12">
                    <Graph
                      options={{
                        legend: {
                          position: "top",
                          showForNullSeries: false,
                          showForZeroSeries: false,
                          labels: {
                            colors: theme ? "#ffff" : "black",
                          },

                          onItemHover: {
                            highlightDataSeries: false,
                          },
                        },
                        grid: {
                          show: true,
                        },
                        noData: {
                          text: "No Data to show",
                          align: "center",
                          style: {
                            fontFamily: "Poppins",
                          },
                        },
                        colors: [
                          `${chartOneType !== "line" ? "#00E396" : "#D4AC0D"}`,
                          `${chartTwoType !== "line" ? "#008FEB" : "#00E396"}`,
                        ],
                        chart: {
                          toolbar: {
                            show: true,
                            tools: {
                              download: true,
                              reset: false,
                              zoom: false,
                              zoomin: false,
                              zoomout: false,
                              pan: false,
                            },
                          },
                          animations: {
                            enabled: true,
                            easing: "easein",
                            speed: 1000,
                          },
                        },
                        stroke: {
                          width: [2, 2],
                        },

                        markers: {
                          size: 5,
                        },

                        xaxis: {
                          tooltip: {
                            enabled: false,
                          },
                          tickPlacement: "on",
                          tickAmount: 6,
                          labels: {
                            show: true,
                            rotateAlways: true,
                            hideOverlappingLabels: true,
                            style: {
                              colors: theme ? "white" : "black",
                            },
                            rotate: -45,
                          },

                          categories: [
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ],
                        },

                        yaxis: {
                          decimalsInFloat: 0,
                          labels: {
                            style: {
                              colors: theme ? "white" : "black",
                            },
                          },
                          showForNullSeries: false,
                          showForZeroSeries: false,
                        },
                        tooltip: {
                          enabled: true,
                        },
                        plotOptions: {
                          bar: {
                            columnWidth: "40%",
                          },
                        },
                      }}
                      series={[
                        {
                          type: chartOneType,
                          name: "Data Series-1",
                          data: valueArr,
                        },
                        {
                          type: chartTwoType,
                          name: "Data Series-2",
                          data: showRange ? dataSeries : [],
                        },
                      ]}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-4  m-1 flex justify-content-evenly macro-details">
            <div className="col col-12">
              <div className="card-body">
                <div className="row row-cols-2">
                  <div className="col col-12">
                    <Graph
                      type="pie"
                      options={{
                        labels: [
                          "Glucose",
                          "Active Time",
                          "Sleep",
                          "Walking",
                          "Bp",
                          "Pulse",
                          "Water Consumption",
                        ],
                        fill: {
                          color: [
                            "#F54949",
                            "#18A6AA",
                            "#18A4A8",
                            "#498BF5",
                            "#FD7112",
                            "#F54949",
                            "#18A448",
                          ],
                          type: "solid",
                        },
                        chart: {
                          toolbar: {
                            show: true,
                          },
                        },
                        legend: {
                          position: "top",
                          labels: {
                            colors: theme ? "white" : "black",
                          },
                          onItemHover: {
                            highlightDataSeries: false,
                          },
                        },
                      }}
                      series={[30, 40, 50, 60, 70, 28, 80]}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Chart;
