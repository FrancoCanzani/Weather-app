import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";
import { getForecast } from "./forecast";

const weatherInfo = document.querySelector(".weatherInfo");
const topInfo = document.querySelector(".topInfo");
const key = "629531abca22eb8266b74fa0de195aec";

const searchButton = document.querySelector(".search");

let cityName = "London, GB";

async function fetchData() {
  const data = [];

  try {
    const response1 = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`
    );
    const data1 = await response1.json();

    const latitude = data1[0].lat;
    const longitude = data1[0].lon;

    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );
    const currentWeather = await response2.json();
    data.push(currentWeather);

    const response3 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );
    const forecast = await response3.json();
    data.push(forecast);

    const response4 =
      await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}
    `);
    const airPollution = await response4.json();
    data.push(airPollution);

    return data;
  } catch (error) {
    console.error(error);
  }
}

function actualWeather(data) {
  topInfo.innerHTML = `${data[0].name}, ${data[0].sys.country} | ${Math.round(
    data[0].main.temp
  )}° | `;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
  topInfo.appendChild(weatherIcon);
}

function generalInfo(data) {
  const weatherData = {
    feels_like: `<p>Feels like: <span>${Math.round(
      data[0].main.feels_like
    )}°</span></p>`,
    cloud: `<p>Cloud cover: <span>${data[0].clouds.all}%</span></p>`,
    humidity: `<p>Humidity: <span>${data[0].main.humidity}%</span></p>`,
    pressure: `<p>Pressure: <span>${data[0].main.pressure} Milibars</span></p>`,
    wind_speed: `<p>Wind speed: <span>${data[0].wind.speed} KM/h</span></p>`,
    visibility: `<p>Visibility: <span>${
      data[0].visibility / 1000
    } KM</span></p>`,
  };
  return Object.values(weatherData).join("\n");
}

function showData() {
  fetchData().then((data) => {
    console.log(data);
    actualWeather(data);
    displayAirQuality(data);
    weatherInfo.innerHTML = generalInfo(data);
    getForecast(data);
  });
}

showData();

function handleSearch() {
  const searchInput = document.querySelector(".searchInput");
  cityName = searchInput.value;
  searchInput.value = "";
}

searchButton.addEventListener("click", function () {
  handleSearch();
  showData();
});
