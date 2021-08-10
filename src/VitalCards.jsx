import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { useContext } from "react";

const VitalCards = (props) => {
  const theme = useContext(props.ThemeContext);
  const { vitalcards } = theme;
  const date = new Date();
  const records = [
    {
      id: "1",
      name: "Vengatesh",
      MailID: "Vengat.gv@yahoo.com",
      age: "20",
      Bg: "A1+ve",
      gen: "Male",
      glucose: "90",
      pulse: "97",
      sleep: "4",
      weight: "60",
      MC: "Allergy,Diabetes",
      sugar: "140/150",
      steps: "10000",
      bp: "150",
      active: "9",
      water: "10",
    },
    {
      id: "2",
      name: "Archana Devi",
      MailID: "Archana.devi@yahoo.com",
      age: "22",
      Bg: "A+ve",
      gen: "Female",
      glucose: "150",
      pulse: "96",
      sleep: "3.5",
      weight: "65",
      MC: "Allergy T2",
      sugar: "150/160",
      steps: "20000",
      bp: "140",
      active: "8.30",
      water: "9",
    },
    {
      id: "3",
      name: "Badrinath",
      MailID: "Badri.credo@yahoo.com",
      age: "22",
      Bg: "O+ve",
      gen: "Male",
      glucose: "120",
      pulse: "97",
      sleep: "4.5",
      weight: "70",
      MC: "Blue Syndrom",
      sugar: "170/160",
      steps: "24000",
      bp: "130",
      active: "10",
      water: "8.25",
    },
    {
      id: "4",
      name: "Balaji",
      MailID: "Balaji.credo@yahoo.com",
      age: "22",
      Bg: "O-ve",
      gen: "Male",
      glucose: "110",
      pulse: "96",
      sleep: "6",
      weight: "80",
      MC: "Nosil Allergy",
      sugar: "150/170",
      steps: "20200",
      bp: "135",
      active: "9.45",
      water: "6",
    },
    {
      id: "5",
      name: "Samuel",
      MailID: "Samuel.bardi@yahoo.com",
      age: "20",
      Bg: "O+ve",
      gen: "Male",
      glucose: "110",
      pulse: "98",
      sleep: "6.45",
      weight: "85",
      MC: "Chronic Diabetes T2",
      sugar: "130/150",
      steps: "25000",
      bp: "141",
      active: "10",
      water: "8",
    },
    {
      id: "6",
      name: "Kishore",
      MailID: "Kishore.gv@yahoo.com",
      age: "20",
      Bg: "B+ve",
      gen: "Male",
      glucose: "120",
      pulse: "99",
      sleep: "4.5",
      weight: "90",
      MC: "Chronic Diabetes",
      sugar: "150/170",
      steps: "25000",
      bp: "140",
      active: "7.5",
      water: "5.5",
    },
  ];
  const arr = records.filter((item) => item.id === props.id);
  const { glucose, sleep, pulse, sugar, steps, weight, bp, active, water } =
    arr[0];
  const handleOnclick = (value, heading) => {
    const arr = [];
    let i = 1;
    for (i = 1; i <= 7; i++) {
      arr.push(i + value);
    }

    props.history.push(`${props.location.pathname}/Chart`, {
      id: props.id,
      value: arr,
      heading: heading,
    });
  };

  return (
    <React.Fragment>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(glucose, "Glucose")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`tint icon`}
                style={{ color: vitalcards.glucoseColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.glucoseColor }}
              >
                <small>Glucose</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.glucoseColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Readings</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.glucoseColor }}
              >
                {glucose}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.glucoseColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(pulse, "Pulse Rate")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`heartbeat icon`}
                style={{ color: vitalcards.pulseColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.pulseColor }}
              >
                <small>Pulse</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.pulseColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Ratings</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.pulseColor }}
              >
                {pulse}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.pulseColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(weight, "Weight")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`weight icon`}
                style={{ color: vitalcards.weightColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.weightColor }}
              >
                <small>Weight</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.weightColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Kilograms</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.weightColor }}
              >
                {weight}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.weightColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(sleep, "Sleeping Hours")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`moon icon`}
                style={{ color: vitalcards.sleepColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.sleepColor }}
              >
                <small>Sleep</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.sleepColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Hours</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.sleepColor }}
              >
                {sleep}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.sleepColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(11, "Sugar")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`tint icon`}
                style={{ color: vitalcards.sugarColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.sugarColor }}
              >
                <small>Sugar</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.sugarColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Asy/Dsy</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.sugarColor }}
              >
                {sugar}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.sugarColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(steps, "Steps")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`hourglass half icon`}
                style={{ color: vitalcards.stepsColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.stepsColor }}
              >
                <small>Steps</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.stepsColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Kilometers</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.stepsColor }}
              >
                {steps}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.stepsColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(bp, "Blood Pressure")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`thermometer half icon`}
                style={{ color: vitalcards.bpColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.bpColor }}
              >
                <small>Blood Pressure</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span className="col col-6" style={{ color: vitalcards.bpColor }}>
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Readings</span>
              <span className="col col-6" style={{ color: vitalcards.bpColor }}>
                {bp}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.bpColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(active, "Active Timings")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`clock icon`}
                style={{ color: vitalcards.activeTimeColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.activeTimeColor }}
              >
                <small>Active Hours</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.activeTimeColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Hours</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.activeTimeColor }}
              >
                {active}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.activeTimeColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={() => handleOnclick(water, "Water Consumption")}
        style={{
          color: vitalcards.foreColor,
          backgroundColor: vitalcards.backgroundColor,
          borderColor: vitalcards.borderColor,
        }}
      >
        <div className="card-body mt-1 param-card">
          <div className="row row-cols-2 param-head">
            <span className="col col-6">
              <i
                className={`tint icon`}
                style={{ color: vitalcards.waterColor }}
              ></i>
            </span>
            <span className="col col-6">
              <span
                className="param-head align-self-start"
                style={{ color: vitalcards.waterColor }}
              >
                <small>Water</small>
              </span>
            </span>
          </div>
          <div className="card-text param-value">
            <div className="row row-cols-2 ">
              <span className="col col-6">Active Date</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.waterColor }}
              >
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
              </span>
            </div>
            <div className="row row-cols-2 ">
              <span className="col col-6">Liter/day</span>
              <span
                className="col col-6"
                style={{ color: vitalcards.waterColor }}
              >
                {water}
              </span>
            </div>
            <div className="row row-cols-2">
              <span className="col col-sm-6">Target</span>
              <span
                className="col col-sm-6 "
                style={{ color: vitalcards.waterColor }}
              >
                N/A
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VitalCards;
