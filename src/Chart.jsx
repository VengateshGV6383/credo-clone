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
  const location = useLocation();
  const [from, setFrom] = useState([]);
  const [TO, setTO] = useState([]);
  const getDifference = () => {
    let a = moment(TO);
    let b = moment(from);
    console.log(a.diff(b, "days"));
  };
  const [showRange, SetshowRange] = useState(false);
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <React.Fragment>
      <div className="container-fluid m-1 cotainer-body">
        <UserDetails id={location.state ? location.state.id : "1"} />
        <div
          className="row justify-content-center align-items-center m-1"
          style={{ border: "2px solid rgba(0,0,0,.125)", borderRadius: "10px" }}
        >
          <div className="row row-cols-4 flex m-1 justify-content-evenly macro-details">
            <div className="col col-12">
              <div
                className="card-body"
                style={{ borderBottom: "2px solid gainsboro" }}
              >
                <div className="row row-cols-2 justify-content-between">
                  <div className="col col-9" style={{ fontFamily: "Poppins" }}>
                    <h6>
                      {location.state.heading
                        ? location.state.heading
                        : "Chart"}
                    </h6>
                  </div>
                  <div className="col col-3">
                    <button
                      className="btn btn-secondary btn-sm align-self-end"
                      onClick={goBack}
                    >
                      Back
                    </button>
                  </div>
                </div>
                <div
                  className="row row-cols-4 justify-content-start  m-1"
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
                    <h6 className="m-2">From</h6>

                    <Datetime
                      closeOnSelect={true}
                      inputProps={{ placeholder: "DD-MM-YYYY" }}
                      dateFormat={"DD-MMM-YYYY"}
                      timeFormat={false}
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
                    <h6 className="m-2">To</h6>
                    <Datetime
                      closeOnSelect={true}
                      inputProps={{ placeholder: "DD-MM-YYYY" }}
                      dateFormat={"DD-MMM-YYYY"}
                      timeFormat={false}
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
                    className="col col-4 col-lg-2 "
                    style={{
                      display: showRange ? "flex" : "none",
                    }}
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => getDifference()}
                    >
                      Show
                    </button>
                  </div>
                </div>
                <div className="row row-cols-2 justify-content-center">
                  <div className="col col-12">
                    <Graph
                      options={{
                        legend: {
                          position: "top",
                          onItemHover: {
                            highlightDataSeries: false,
                          },
                        },
                        colors: ["#D4AC0D", "#5DADE2"],
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
                          labels: {
                            show: true,
                            rotateAlways: true,
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
                        tooltip: {
                          enabled: true,
                        },
                      }}
                      series={[
                        {
                          type: "line",
                          name: "Generated Data",
                          data: location.state.value,
                        },
                        {
                          type: "line",
                          name: "Static data",
                          data: [101, 137, 205, 249, 299, 310, 400],
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
                        },
                      }}
                      series={[20, 30, 15, 50, 60, 90, 50]}
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
