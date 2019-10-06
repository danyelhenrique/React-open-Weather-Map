import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/WeatherDates";
import keys from "../src/keys.json";
import { WiDayRain } from "react-icons/wi";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";

const GetIpApi = "https://geoip-db.com/json/";

function App() {
  const [city, setCity] = useState({ city: "", latitude: "", longitude: "" });
  const [temp, setTemp] = useState([]);
  const [loanding, setLoanding] = useState(true);

  useEffect(() => {
    async function getData() {
      const coordinates = await axios.get(GetIpApi);
      console.log(coordinates.data);
      setCity({
        city: coordinates.data.city,
        latitude: coordinates.data.latitude,
        longitude: coordinates.data.longitude
      });
    }
    getData();
  }, []);

  useEffect(() => {
    async function getTemp() {
      const dateWeather = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${city.latitude}&lon=${city.longitude}&units=metric&cnt=7&appid=${keys.API_KEY}`;

      const tempData = await axios.get(dateWeather);
      setTemp(tempData.data);
      setLoanding(false);
    }
    getTemp();
  }, [city]);

  function showContent() {
    if (!loanding) {
      return (
        <main>
          <section>
            {/* <h1>San Fransisco</h1>
            <p>Friday, October 31</p> */}
            {currentityAndDay()}
            <div className="weather__container">
              <div className="weather__container--current__">
                <WiDayRain id="weather__container--icon" />
                <strong>75 °C</strong>
              </div>

              <div className="weather__container--__max__min__">
                <div>
                  <MdArrowUpward id="weather__container--icon" />
                  <span>76</span>
                </div>
                <div>
                  <span>45</span>
                  <MdArrowDownward id="weather__container--icon" />
                </div>
              </div>
            </div>
            <div className="weather__tem__days">{WeatherPropsComponent()}</div>
          </section>
        </main>
      );
    }
  }

  function currentityAndDay() {
    const getCurretDay = new Date(temp.list[0].dt * 1000).toUTCString();
    const showCurretDay = getCurretDay.toString();
    return (
      <>
        <h1>{city.city}</h1>
        <p>{showCurretDay}</p>
      </>
    );
  }

  function WeatherPropsComponent() {
    return temp.list.map(ele => {
      return <Weather date={ele.dt} max={ele.temp.max} min={ele.temp.min} />;
    });
  }

  return <div className="App">{showContent()}</div>;
}

export default App;
