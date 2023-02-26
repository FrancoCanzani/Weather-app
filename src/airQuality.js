function displayAirQuality(data) {
  const aqi = data[2].list[0].main.aqi;

  const airPollution = document.querySelector(".airPollution");

  // Define the color scale
  const colorScale = {
    1: "rgb(55, 196, 0)", // Good (green)
    2: "rgb(255, 244, 79)", // Moderate (yellow)
    3: "rgb(255, 130, 50)", // Unhealthy for sensitive groups (orange)
    4: "rgb(204, 0, 0)", // Unhealthy (red)
    5: "rgb(125, 0, 35)", // Very Unhealthy (purple)
  };

  // Set the background color of the air quality div based on the AQI
  airPollution.style.backgroundColor = colorScale[aqi];

  airPollution.innerHTML = `
        <div class="airQuality">
          <div class="topInfo">Air Quality: ${aqi}</div>
          <div class="components">
            <p>CO: <span>${data[2].list[0].components.co}</span></p>
            <p>NO: <span>${data[2].list[0].components.no}</span></p>
            <p>NO2: <span>${data[2].list[0].components.no2}</span></p>
            <p>O3: <span>${data[2].list[0].components.o3}</span></p>
            <p>SO2: <span>${data[2].list[0].components.so2}</span></p>
            <p>PM2.5: <span>${data[2].list[0].components.pm2_5}</span></p>
            <p>PM10: <span>${data[2].list[0].components.pm10}</span></p>
            <p>NH3: <span>${data[2].list[0].components.nh3}</span></p>
          </div>
        </div>
      `;
}

export { displayAirQuality };
