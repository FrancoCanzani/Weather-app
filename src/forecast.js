const forecastMetrics = document.querySelector(".forecastMetrics");

function showForecast(data) {
  // Group the hourly forecast data by day
  const dailyForecastData = {};

  data[1].list.forEach((forecast) => {
    // extract the date from the timestamp and format it as a string
    const date = new Date(forecast.dt * 1000);
    const dateString = date.toISOString().substr(0, 10);

    // if this is the first forecast for this day, create a new object for the day
    if (!dailyForecastData[dateString]) {
      dailyForecastData[dateString] = {
        date: dateString,
        weather: [],
      };
    }

    // add this forecast to the day's weather array
    dailyForecastData[dateString].weather.push(forecast);
  });

  // Convert the daily forecast data object to an array
  const dailyForecastArray = Object.values(dailyForecastData);

  // Display the daily forecast data
  forecastMetrics.innerHTML = "";
  dailyForecastArray.slice(0, 5).forEach((dailyForecast) => {
    const forecastDay = document.createElement("div");
    const forecastDate = document.createElement("div");
    const forecastData = document.createElement("div");
    const forecastTemp = document.createElement("div");
    const forecastDegrees = document.createElement("h1");
    const forecastDescription = document.createElement("h4");

    forecastDay.classList.add("forecastDay");
    forecastDate.classList.add("forecastDate");
    forecastData.classList.add("forecastData");
    forecastTemp.classList.add("forecastTemp");
    forecastDegrees.classList.add("forecastDegrees");
    forecastDescription.classList.add("forecastDescription");

    const date = new Date(dailyForecast.date);
    const dateOptions = {
      month: "short",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    forecastDate.innerHTML = `${formattedDate}`;

    const degrees = `${Math.round(
      dailyForecast.weather.reduce(
        (total, forecast) => total + forecast.main.temp,
        0
      ) / dailyForecast.weather.length
    )}°c`;
    forecastDegrees.innerText = degrees;

    const weatherDescription = dailyForecast.weather[0].weather[0].description;
    forecastDescription.innerText = weatherDescription;

    const forecastIcon = document.createElement("img");
    forecastIcon.src = `./images/${dailyForecast.weather[0].weather[0].icon}.svg`;
    forecastIcon.classList.add("forecastIcon");

    forecastTemp.appendChild(forecastDegrees);
    forecastTemp.appendChild(forecastDescription);
    forecastData.appendChild(forecastTemp);
    forecastData.appendChild(forecastIcon);
    forecastDay.appendChild(forecastDate);
    forecastDay.appendChild(forecastData);
    forecastMetrics.appendChild(forecastDay);
  });
}

export { showForecast };
