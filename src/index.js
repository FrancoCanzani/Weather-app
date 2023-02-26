import styles from "../styles/style.css";

const weatherInfo = document.querySelector(".weatherInfo");
const topInfo = document.querySelector(".topInfo");

const searchButton = document.querySelector(".search");

let cityName = "London, GB";

async function fetchData() {
  try {
    const response1 = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=629531abca22eb8266b74fa0de195aec`
    );
    const data1 = await response1.json();

    const latitude = data1[0].lat;
    const longitude = data1[0].lon;

    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=629531abca22eb8266b74fa0de195aec&units=metric`
    );
    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.error(error);
  }
}

function keyData(data) {
  const weatherData = {
    feels_like: `Feels like: ${data.main.feels_like}°`,
    cloud: `Cloud cover: ${data.clouds.all}%`,
    humidity: `Humidity: ${data.main.humidity}%`,
    pressure: `Pressure: ${data.main.pressure} Milibars`,
    wind_speed: `Wind speed: ${data.wind.speed} KM/h`,
  };
  return Object.values(weatherData).join("\n");
}

function showData() {
  fetchData().then((data) => {
    console.log(data);
    topInfo.innerHTML = `${data.name}, ${data.sys.country} | ${Math.round(
      data.main.temp
    )}° | `;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    topInfo.appendChild(weatherIcon);
    weatherInfo.innerText = keyData(data);
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
