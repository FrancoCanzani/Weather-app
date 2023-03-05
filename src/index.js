import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";
import { getForecast } from "./forecast";
import { getNews } from "./news";
import { generalInfo } from "./generalInfo";
import { data } from "browserslist";

const weatherInfo = document.querySelector(".weatherInfo");
const locationWeather = document.querySelector(".locationWeather");
const key = "629531abca22eb8266b74fa0de195aec";
const ipToken = "2a032ca2831336";

const searchButton = document.querySelector(".search");
const loader = document.querySelector(".lds-ripple");

let cityName = "London, GB";

async function userLocation() {
  return fetch(`https://ipinfo.io/json?token=${ipToken}`)
    .then((response) => response.json())
    .then((data) => {
      const location = data.loc.split(",");
      const lat = location[0];
      const long = location[1];

      return { lat, long };
    })
    .catch((error) => {
      console.error(error);
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
      `https://restcountries.com/v3.1/name/${country}`
    );
    const countryInfo = await response6.json();
    data.push(countryInfo);

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
  locationWeather.innerHTML = `${data[0].name}, ${
    data[0].sys.country
  } | ${Math.round(data[0].main.temp)}° | `;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
  locationWeather.appendChild(weatherIcon);
}

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
