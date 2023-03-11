const weatherMetrics = document.querySelector(".weatherMetrics");

function showWeather(data) {
  weatherMetrics.innerHTML = "";

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Current Weather";

  //   Current temperature
  const temperature = document.createElement("div");
  temperature.classList.add("temperature");
  const degrees = document.createElement("h1");
  degrees.classList.add("degrees");
  degrees.innerText = `${Math.round(data[0].main.temp)}°c`;
  const weatherDescription = document.createElement("h4");
  weatherDescription.classList.add("weatherDescription");
  weatherDescription.innerText = `${data[0].weather[0].description}`;

  temperature.append(degrees);
  temperature.append(weatherDescription);

  // Weather Icon
  const weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weatherIcon");
  weatherIcon.src = `./images/${data[0].weather[0].icon}.svg`;

  // Humidity

  const humidity = document.createElement("div");
  humidity.classList.add("metrics");
  const humidityTitle = document.createElement("h1");
  humidityTitle.innerText = "Humidity";
  humidityTitle.classList.add("metricTitle");
  const humidityIcon = document.createElement("img");
  humidityIcon.src = `./images/humidity.svg`;
  humidityIcon.classList.add("metricsIcon");
  const humidityPerc = document.createElement("h1");
  humidityPerc.innerText = `${data[0].main.humidity}%`;
  humidityPerc.classList.add("weatherMetric");
  humidity.append(humidityTitle);
  humidity.append(humidityIcon);
  humidity.append(humidityPerc);

  // Wind

  const wind = document.createElement("div");
  wind.classList.add("metrics");
  const windTitle = document.createElement("h1");
  windTitle.innerText = "Wind";
  windTitle.classList.add("metricTitle");
  const windIcon = document.createElement("img");
  windIcon.src = `./images/windsock.svg`;
  windIcon.classList.add("metricsIcon");
  const windData = document.createElement("h1");
  windData.innerText = `${Math.round(data[0].wind.speed)} KM/h`;
  windData.classList.add("weatherMetric");
  wind.append(windTitle);
  wind.append(windIcon);
  wind.append(windData);

  //  Pressure

  const pressure = document.createElement("div");
  pressure.classList.add("metrics");
  const pressureTitle = document.createElement("h1");
  pressureTitle.innerText = "Pressure";
  pressureTitle.classList.add("metricTitle");
  const pressureIcon = document.createElement("img");
  if (data[0].main.pressure > 1000) {
    pressureIcon.src = `./images/pressure-high.svg`;
  } else {
    pressureIcon.src = `./images/pressure-low.svg`;
  }
  pressureIcon.classList.add("metricsIcon");
  const pressureData = document.createElement("h1");
  pressureData.innerText = `${data[0].main.pressure} hPa`;
  pressureData.classList.add("weatherMetric");
  pressure.append(pressureTitle);
  pressure.append(pressureIcon);
  pressure.append(pressureData);

  weatherMetrics.append(temperature);
  weatherMetrics.append(weatherIcon);
  weatherMetrics.append(humidity);
  weatherMetrics.append(wind);
  weatherMetrics.append(pressure);
}

export { showWeather };
