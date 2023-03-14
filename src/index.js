import styles from "../styles/style.css";

import { showWeather } from "./currentWeather";
import { showEnvironmental } from "./environmental";
import { showForecast } from "./forecast";
// import { showMap } from "./map";
import { showMiscellaneous } from "./miscellaneous";

const key = "629531abca22eb8266b74fa0de195aec";

const searchButton = document.querySelector(".search");
const searchInput = document.querySelector(".searchInput");
const loader = document.querySelector(".lds-ripple");
const content = document.querySelector(".content");
const locationWeather = document.querySelector(".locationWeather");

let cityName = "Denia, ES";

async function fetchData() {
  const data = [];

  content.style.display = "none";
  loader.style.display = "block";

  var myHeaders = new Headers();
  myHeaders.append("x-access-token", "openuv-rxv6rlf4ce9ck-io");
  myHeaders.append("Content-Type", "application/json");
  const now = new Date();
  const isoDateTime = now.toISOString();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

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
      await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}
    `);
    const airPollution = await response4.json();
    data.push(airPollution);

    const response5 = await fetch(
      `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}&alt=0&dt=${isoDateTime}`,
      requestOptions
    );
    const uvData = await response5.json();
    data.push(uvData);

    loader.style.display = "none";
    content.style.display = "grid";

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

function showData() {
  fetchData()
    .then(({ data, location }) => {
      // showMap(location);
      showWeather(data);
      showForecast(data);
      showMiscellaneous(data);
      showEnvironmental(data);

      locationWeather.innerHTML = `📌 ${data[0].name}, ${
        data[0].sys.country
      } | ${Math.round(data[0].main.temp)}°c`;
    })
    .catch((error) => {
      console.error(error);
    });
}

showData();

setInterval(() => {
  showData();
}, 500000);

function handleSearch() {
  cityName = searchInput.value.trim();
  searchInput.value = "";
}

searchButton.addEventListener("click", function () {
  handleSearch();
  showData();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {
      handleSearch();
      showData();
    } else {
      return;
    }
  }
});

window.onscroll = function () {
  myFunction();
};

const header = document.querySelector("header");

// Get the offset position of the navbar
const sticky = header.offsetTop + header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
