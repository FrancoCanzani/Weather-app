function displayAirQuality(data) {
  const aqi = data[2].list[0].main.aqi;

  // Define the color scale
  const colorScale = {
    1: "Good",
    2: "Fair",
    3: "Bad",
    4: "Unhealthy",
    5: "Very Unhealthy",
  };

  // Get the corresponding color for the AQI word
  const aqiColor = {
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
    5: "purple",
  }[aqi];

  const airPollution = document.querySelector(".airPollution");

  // Set the color of the AQI word

  airPollution.innerHTML = `
    <div class="topInfo">Air Quality: <span style="color:${aqiColor}">${colorScale[aqi]}</span></div>
    <div class="components">
      <div class="leftComponents">
        <p>CO: <span>${data[2].list[0].components.co}</span></p>
        <p>NO: <span>${data[2].list[0].components.no}</span></p>
        <p>NO2: <span>${data[2].list[0].components.no2}</span></p>
        <p>O3: <span>${data[2].list[0].components.o3}</span></p>
      </div>
      <div class="rightComponents">
              <p>SO2: <span>${data[2].list[0].components.so2}</span></p>
              <p>PM2.5: <span>${data[2].list[0].components.pm2_5}</span></p>
              <p>PM10: <span>${data[2].list[0].components.pm10}</span></p>
              <p>NH3: <span>${data[2].list[0].components.nh3}</span></p>
            </div>
          </div>
      `;
}

export { displayAirQuality };
