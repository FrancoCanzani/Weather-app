import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";
import { getForecast } from "./forecast";
import { getNews } from "./news";
import { generalInfo } from "./generalInfo";
import { data } from "browserslist";

const weatherInfo = document.querySelector(".weatherInfo");
const locationWeather = document.querySelector(".locationWeather");
const ipToken = "2a032ca2831336";
const key = "629531abca22eb8266b74fa0de195aec";
const ipToken = "2a032ca2831336";

const searchButton = document.querySelector(".search");
const loader = document.querySelector(".lds-ripple");

  return fetch(`https://ipinfo.io/json?token=${ipToken}`)
  return fetch(`https://ipinfo.io/json?token=${ipToken}`)
    .then((response) => response.json())
    .then((data) => {
      const lat = location[0];
      const long = location[1];

      return { lat, long };
      const long = location[1];

      return { lat, long };
    })
    .catch((error) => {
      console.error(error);
async function fetchData(latitude, longitude) {
}

async function fetchData(latitude, longitude) {

async function userLocation() {
  return fetch(`https://ipinfo.io/json?token=${ipToken}`)
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${key}`
    .then((data) => {
      const location = data.loc.split(",");
      const lat = location[0];
    });
}

async function fetchData(latitude, longitude) {
  const data = [];

  loader.style.display = "block";

  try {
    const response1 = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${key}`
    );
    const data1 = await response1.json();
      await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}
      await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}

    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    );
      `https://restcountries.com/v3.1/alpha/${data1[0].country}`
    data.push(currentWeather);
    const countryInfo = await response5.json();
    const response4 =
      await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}
    `);
    const airPollution = await response4.json();
    data.push(airPollution);

    const response5 = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_181676ee5721562b81df48d143874f564e726&country=${country}`
    );
    const news = await response5.json();
    data.push(news);

    const response6 = await fetch(
function showData() {
  userLocation().then((location) => {
    fetchData(location.lat, location.long).then((data) => {
      console.log(data);
      actualWeather(data);
      displayAirQuality(data);
      weatherInfo.innerHTML = generalInfo(data);
      getForecast(data);
      getNews(data);
    });
  });
}

showData();

      `https://restcountries.com/v3.1/name/${country}`
    );
    const countryInfo = await response6.json();
    data.push(countryInfo);

    loader.style.display = "none";

    return data;
  } catch (error) {
async function handleSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchedCity = searchInput.value;
  searchInput.value = "";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=${key}`
    );
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("City not found.");
    }
    loader.style.display = "none";
    cityName = `${data[0].name}, ${data[0].country}`;
    const { lat, lon } = data[0];

    fetchData(lat, lon).then((data) => {
    fetchData(location.lat, location.long).then((data) => {
    alert("Something went wrong. Please try again later.");
  }
}

function actualWeather(data) {
  } catch (error) {
    console.error(error);
    // Handle error gracefully and alert the user
    alert("City not found. Please try again.");
  locationWeather.innerHTML = `${data[0].name}, ${
  const searchInput = document.querySelector(".searchInput");
  const searchedCity = searchInput.value;
  searchInput.value = "";

    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=${key}`
// Update the location and weather data every 5 minutes
setInterval(showData, 300000);
    );
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("City not found.");
  } | ${Math.round(data[0].main.temp)}° | `;
  const weatherIcon = document.createElement("img");
    cityName = `${data[0].name}, ${data[0].country}`;
    const { lat, lon } = data[0];
  locationWeather.appendChild(weatherIcon);
    fetchData(lat, lon).then((data) => {
      actualWeather(data);
      displayAirQuality(data);
      weatherInfo.innerHTML = generalInfo(data);
      getForecast(data);
      getNews(data);
    });
  } catch (error) {
    console.error(error);
    // Handle error gracefully and alert the user
    alert("City not found. Please try again.");
  }
    fetchData(location.lat, location.long).then((data) => {
      console.log(data);
      actualWeather(data);
      displayAirQuality(data);
      getForecast(data);
      getNews(data);
// Update the location and weather data every 5 minutes
setInterval(showData, 300000);
    });
  });
}

showData();

async function handleSearch() {
  const searchInput = document.querySelector(".searchInput");
  const searchedCity = searchInput.value;
  searchInput.value = "";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=${key}`
    );
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("City not found.");
    }

    cityName = `${data[0].name}, ${data[0].country}`;
    const { lat, lon } = data[0];

    fetchData(lat, lon).then((data) => {
      actualWeather(data);
      displayAirQuality(data);
      weatherInfo.innerHTML = generalInfo(data);
      getForecast(data);
      getNews(data);
    });
  } catch (error) {
    console.error(error);
    // Handle error gracefully and alert the user
    alert("City not found. Please try again.");
  }
}

searchButton.addEventListener("click", function () {
  handleSearch();
});

// Update the location and weather data every 5 minutes
setInterval(showData, 300000);
