import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";
import { getForecast } from "./forecast";
import { getNews } from "./news";
import { generalInfo } from "./generalInfo";

const weatherInfo = document.querySelector(".weatherInfo");
const topInfo = document.querySelector(".topInfo");
const key = "629531abca22eb8266b74fa0de195aec";

const searchButton = document.querySelector(".search");
const loader = document.querySelector(".lds-ripple");

let cityName = "London, GB";

async function fetchData() {
  const data = [];

  loader.style.display = "block";

  try {
    const response1 = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`
    );
    const data1 = await response1.json();

    const latitude = data1[0].lat;
    const longitude = data1[0].lon;
    const country = data1[0].country;

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

    const response5 = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_181676ee5721562b81df48d143874f564e726&country=${country}`
    );
    const news = await response5.json();
    data.push(news);

    loader.style.display = "none";

    return data;
  } catch (error) {
    loader.style.display = "none";
    console.error(error);
    // Handle error gracefully and alert the user
    alert("Something went wrong. Please try again later.");
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

function showData() {
  fetchData().then((data) => {
    console.log(data);
    actualWeather(data);
    displayAirQuality(data);
    weatherInfo.innerHTML = generalInfo(data);
    getForecast(data);
    getNews(data);
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
