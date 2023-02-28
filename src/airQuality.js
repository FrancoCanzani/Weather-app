function displayAirQuality(data) {
  const aqi = data[2].list[0].main.aqi;

  const airPollution = document.querySelector(".airPollution");
  const components = document.querySelector(".components");

  // Define the color scale
  const colorScale = {
    1: "#b2ff9e", // Good (green)
    2: "#ffef9f", // Moderate (yellow)
    3: "#ffd449", // Unhealthy for sensitive groups (orange)
    4: "#ed4d6e", // Unhealthy (red)
    5: "#dab6fc", // Very Unhealthy (purple)
  };

  // Set the background color of the air quality div based on the AQI
  airPollution.style.backgroundColor = colorScale[aqi];

  airPollution.innerHTML = `
          <div class="topInfo">Air Quality: ${aqi}</div>
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
