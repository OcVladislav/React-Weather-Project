import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import WeatherCardContainer from "./components/body/WeatherCardContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <WeatherCardContainer />
    </div>
  );
};

export default App;
