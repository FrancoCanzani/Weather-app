import styles from "../styles/style.css";
import { displayAirQuality } from "./airQuality.js";
import { getForecast } from "./forecast";
import { getNews } from "./news";
import { currentWeather } from "./currentWeather";

const weatherInfo = document.querySelector(".weatherInfo");
const topInfo = document.querySelector(".topInfo");
const key = "629531abca22eb8266b74fa0de195aec";

const searchButton = document.querySelector(".search");
const loader = document.querySelector(".lds-ripple");
const weatherDescription = document.querySelector(".weatherDescription");

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

    // Create a new object with latitude and longitude to return alongside other fetched data
    const location = {
      latitude,
      longitude,
    };
    return { data, location };
  } catch (error) {
    loader.style.display = "none";
    console.error(error);
    // Handle error gracefully and alert the user
    alert("Something went wrong. Please try again later.");
  }
}

function actualWeather(data) {
  const city = document.querySelector(".city");
  city.innerHTML = `${data[0].name}, ${data[0].sys.country}`;
  weatherDescription.innerHTML = `${data[0].weather[0].description}`;

  topInfo.innerHTML = `${Math.round(data[0].main.temp)}°c`;
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `http://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
  topInfo.appendChild(weatherIcon);
}

const map = L.map("map").setView([0, 0], 1);

// Add a TileLayer for the map background
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 3,
}).addTo(map);

const temperatureLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${key}`,
  {
    maxZoom: 18,
  }
);

let marker;

function showData() {
  fetchData()
    .then(({ data, location }) => {
      console.log(data);
      actualWeather(data);
      displayAirQuality(data);
      weatherInfo.innerHTML = currentWeather(data);
      getForecast(data);
      getNews(data);

      // Update map view with the location data
      const { latitude, longitude } = location;
      map.setView([latitude, longitude], 12);

      // Remove the temperature layer if it exists
      if (temperatureLayer) {
        temperatureLayer.remove();
      }

      temperatureLayer.addTo(map);

      // Remove previous marker, if any
      if (marker) {
        map.removeLayer(marker);
      }

      marker = L.marker([latitude, longitude]).addTo(map);
    })
    .catch((error) => {
      console.error(error);
      // Handle error gracefully and alert the user
      alert("Something went wrong. Please try again later.");
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
