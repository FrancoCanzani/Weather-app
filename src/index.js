import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";

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
    const data2 = await response2.json();
    data.push(data2);

    const response3 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
    );
    const data3 = await response3.json();
    data.push(data3);

    const response4 =
      await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}
    `);
    const data4 = await response4.json();
    data.push(data4);

    return data;
  } catch (error) {
    console.error(error);
  }
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

function showWeatherIcon(data) {
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
  topInfo.appendChild(weatherIcon);
}

function showData() {
  fetchData().then((data) => {
    console.log(data);
    topInfo.innerHTML = `${data[0].name}, ${data[0].sys.country} | ${Math.round(
      data[0].main.temp
    )}° | `;
    showWeatherIcon(data);
    displayAirQuality(data);
    weatherInfo.innerHTML = generalInfo(data);
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
