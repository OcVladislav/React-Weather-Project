import React, { useEffect, useState } from "react";
import { getData } from "../../API/api";
import WeatherCard from "./WeatherCard";

const initial = {
  city: "",
  country: "",
  forecast: [],
};

class WeatherCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      response: initial,
    };
  }
  componentDidMount() {
    getData().then((data) => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return <WeatherCard response={response} />;
  }
}

//With hooks
//==================================================================================================================================

// const WeatherCardContainer = () => {
//   const [state, setState] = useState(initial);

//   useEffect(() => {
//     getData().then((data) => setState(data));
//   }, []);

//   return <WeatherCard response={state} />;
// };

export default WeatherCardContainer;
