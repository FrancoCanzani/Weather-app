import { data } from "browserslist";

const miscellaneousMetrics = document.querySelector(".miscellaneousMetrics");

function showMiscellaneous(data) {
  miscellaneousMetrics.innerHTML = "";

  // Feels like
  const feelsLike = document.createElement("div");
  feelsLike.classList.add("misc");
  const feelsLikeIcon = document.createElement("img");
  feelsLikeIcon.src = `./images/${data[0].weather[0].icon}.svg`;
  feelsLikeIcon.classList.add("miscIcon");
  const feelsLikeText = document.createElement("p");
  feelsLikeText.innerText = "Feels like";
  feelsLikeText.classList.add("miscText");
  const feelsLikeMetric = document.createElement("p");
  feelsLikeMetric.innerText = `${Math.round(data[0].main.feels_like)}°c`;
  feelsLikeMetric.classList.add("miscMetric");

  feelsLike.appendChild(feelsLikeIcon);
  feelsLike.appendChild(feelsLikeText);
  feelsLike.appendChild(feelsLikeMetric);

  // Max temp

  const maxTemp = document.createElement("div");
  maxTemp.classList.add("misc");
  const maxTempIcon = document.createElement("img");
  maxTempIcon.src = `./images/thermometer-warmer.svg`;
  maxTempIcon.classList.add("miscIcon");
  const maxTempText = document.createElement("p");
  maxTempText.innerText = "Max temp";
  maxTempText.classList.add("miscText");
  const maxTempMetric = document.createElement("p");
  maxTempMetric.innerText = `${Math.round(data[0].main.temp_max)}°c`;
  maxTempMetric.classList.add("miscMetric");

  maxTemp.appendChild(maxTempIcon);
  maxTemp.appendChild(maxTempText);
  maxTemp.appendChild(maxTempMetric);

  // Min temp

  const minTemp = document.createElement("div");
  minTemp.classList.add("misc");
  const minTempIcon = document.createElement("img");
  minTempIcon.src = `./images/thermometer-colder.svg`;
  minTempIcon.classList.add("miscIcon");
  const minTempText = document.createElement("p");
  minTempText.innerText = "Min temp";
  minTempText.classList.add("miscText");
  const minTempMetric = document.createElement("p");
  minTempMetric.innerText = `${Math.round(data[0].main.temp_min)}°c`;
  minTempMetric.classList.add("miscMetric");

  minTemp.appendChild(minTempIcon);
  minTemp.appendChild(minTempText);
  minTemp.appendChild(minTempMetric);

  // Sunrise

  // Convert the Unix timestamp for sunrise to hours
  var sunriseTimestamp = `${data[0].sys.sunrise}`;
  var sunriseDate = new Date(sunriseTimestamp * 1000);
  var sunriseHours = ("0" + sunriseDate.getHours()).slice(-2); // add leading zero and slice last 2 characters
  var sunriseMinutes = ("0" + sunriseDate.getMinutes()).slice(-2); // add leading zero and slice last 2 characters
  var sunriseTime = sunriseHours + ":" + sunriseMinutes;

  const sunrise = document.createElement("div");
  sunrise.classList.add("misc");
  const sunriseIcon = document.createElement("img");
  sunriseIcon.src = `./images/sunrise.svg`;
  sunriseIcon.classList.add("miscIcon");
  const sunriseText = document.createElement("p");
  sunriseText.innerText = "Sunrise";
  sunriseText.classList.add("miscText");
  const sunriseMetric = document.createElement("p");
  sunriseMetric.innerText = sunriseTime;
  sunriseMetric.classList.add("miscMetric");

  sunrise.appendChild(sunriseIcon);
  sunrise.appendChild(sunriseText);
  sunrise.appendChild(sunriseMetric);

  // Sunset

  // Convert the Unix timestamp for sunrise to hours
  var sunsetTimestamp = `${data[0].sys.sunset}`;
  var sunsetDate = new Date(sunsetTimestamp * 1000);
  var sunsetHours = ("0" + sunsetDate.getHours()).slice(-2); // add leading zero and slice last 2 characters
  var sunsetMinutes = ("0" + sunsetDate.getMinutes()).slice(-2); // add leading zero and slice last 2 characters
  var sunsetTime = sunsetHours + ":" + sunsetMinutes;

  const sunset = document.createElement("div");
  sunset.classList.add("sunset");
  const sunsetIcon = document.createElement("img");
  sunsetIcon.src = `./images/sunset.svg`;
  sunsetIcon.classList.add("miscIcon");
  const sunsetText = document.createElement("p");
  sunsetText.innerText = "Sunset";
  sunsetText.classList.add("miscText");
  const sunsetMetric = document.createElement("p");
  sunsetMetric.innerText = sunsetTime;
  sunsetMetric.classList.add("miscMetric");

  sunset.appendChild(sunsetIcon);
  sunset.appendChild(sunsetText);
  sunset.appendChild(sunsetMetric);

  miscellaneousMetrics.appendChild(feelsLike);
  miscellaneousMetrics.appendChild(maxTemp);
  miscellaneousMetrics.appendChild(minTemp);
  miscellaneousMetrics.appendChild(sunrise);
  miscellaneousMetrics.appendChild(sunset);
}

export { showMiscellaneous };
