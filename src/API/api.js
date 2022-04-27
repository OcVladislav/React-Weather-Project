import moment from "moment";

export const getData = async () => {
  try {
    const req = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=f7996d2988c749a0934191000222204&days=5&q=New-York");
    const res = await req.json()
    res.forecast.forecastday.push({ ...res.forecast.forecastday[0], date: moment(res.forecast.forecastday[2].date).add(1, "day").format(moment.HTML5_FMT.DATE) })
    res.forecast.forecastday.push({ ...res.forecast.forecastday[2], date: moment(res.forecast.forecastday[2].date).add(2, "day").format(moment.HTML5_FMT.DATE) })
    const currentHour = moment().hour();
    return {
      city: res.location.name,
      country: res.location.country,
      forecast: res.forecast.forecastday.map((item) => ({
        day: moment(item.date).format("dddd"),
        month: moment(item.date).format("MMMM Do"),
        icon: item.hour[currentHour].condition.icon,
        temperature: item.hour[currentHour].temp_f,
        conditionText: item.hour[currentHour].condition.text,
      })),
    };
  } catch (error) {
    alert(error)
  }
}







