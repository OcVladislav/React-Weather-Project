import React from "react";
import Clock from "../Clock/Clock";
import style from "./WeatherCard.module.css";

const WeatherCard = ({ response }) => {
  const { city, country, forecast } = response;
  return (
    <div className={style.wrapper}>
      <div className={style.zona}>{`${city}, ${country}`}</div>
      <div className={style.container}>
        {forecast.map((item) => (
          <div key={Math.random()} className={style.weatherBox}>
            <div className={style.day}>{item.day}</div>
            <Clock month={item.month} />
            <img className={style.image} src={item.icon} alt="weather-icon" />
            <div className={style.temp}>{item.temperature}</div>
            <div className={style.condition}>{item.conditionText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
