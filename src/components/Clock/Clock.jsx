import React, { useEffect, useState } from "react";
import moment from "moment";

import style from "../body/WeatherCard.module.css";

const Clock = ({ month }) => {
  const [currentTime, setCurrentTime] = useState(moment().format("LTS"));

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().format("LTS"));
    }, 1000);
  }, []);

  return (
    <div className={style.weatherBoxTime}>
      {month},{currentTime}
    </div>
  );
};

export default Clock;
