import React from "react";
import "./styles.css";
import { WiDayRain } from "react-icons/wi";

export default function index({ date, max, min }) {
  const getDate = new Date(date * 1000);

  var gsDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <div id="weather__tem__days--dates">
      <WiDayRain id="weather__tem__days--icon" />
      <h4>
        {gsDayNames[getDate.getDay()]}
      </h4>
      <div>
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  );
}
