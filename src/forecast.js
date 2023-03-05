const forecastInfo = document.querySelector(".forecastInfo");
const forecastTitle = document.querySelector(".forecastTitle");

function getForecast(data) {
  forecastInfo.innerHTML = "";
  forecastTitle.innerHTML = `<h1>Forecast</h1>`;
  for (let index = 0; index < 3; index++) {
    const forecastDay = document.createElement("div");
    const forecastDate = document.createElement("div");
    const forecastData = document.createElement("div");
    forecastDay.classList.add("forecastDay");
    forecastDate.classList.add("forecastDate");
    forecastData.classList.add("forecastData");

    const date = new Date(data[1].list[index].dt_txt);
    const dateOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    forecastDate.innerHTML = `${formattedDate}`;
    forecastData.innerHTML = `${data[1].list[index].main.temp}`;
    const forecastIcon = document.createElement("img");
    forecastIcon.src = `http://openweathermap.org/img/w/${data[1].list[index].weather[0].icon}.png`;
    forecastData.appendChild(forecastIcon);
    forecastDay.appendChild(forecastDate);
    forecastDay.appendChild(forecastData);
    forecastInfo.appendChild(forecastDay);
  }
}

export { getForecast };
