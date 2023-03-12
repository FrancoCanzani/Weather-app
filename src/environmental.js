const uvData = document.querySelector(".uvData");
const airQuality = document.querySelector(".airQuality");

function showEnvironmental(data) {
  // UV
  uvData.innerHTML = "";

  const uv = document.createElement("div");
  uv.classList.add("uv");
  const uvIcon = document.createElement("img");
  uvIcon.src = `./images/uv-index.svg`;
  uv.appendChild(uvIcon);
  const uvText = document.createElement("h2");
  uvText.innerText = "UV Index";
  uv.appendChild(uvText);
  const uvMetric = document.createElement("div");
  uvMetric.classList.add("uvMetric");
  const uvIndex = document.createElement("h2");
  uvIndex.innerText = `${data[3].result.uv.toFixed(1)}`;
  uvMetric.appendChild(uvIndex);
  uv.appendChild(uvMetric);

  const uvMaxTime = `${data[3].result.uv_max_time}`;
  const dateObj = new Date(uvMaxTime);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const uvMaxExposure = document.createElement("h6");
  uvMaxExposure.classList.add("maxExposure");
  uvMaxExposure.innerText = `⚠️ Max UV exposure at: ${hours}:${minutes}`;

  const uvIndexValue = parseInt(data[3].result.uv);

  if (uvIndexValue >= 0 && uvIndexValue < 3) {
    uvMetric.style.backgroundColor = "#20bf55";
  } else if (uvIndexValue >= 3 && uvIndexValue < 6) {
    uvMetric.style.backgroundColor = "#ffee32";
  } else if (uvIndexValue >= 6 && uvIndexValue < 8) {
    uvMetric.style.backgroundColor = "#ff6700";
  } else if (uvIndexValue >= 8 && uvIndexValue < 11) {
    uvMetric.style.backgroundColor = "#e5383b";
  } else {
    uvMetric.style.backgroundColor = "#b5179e";
  }

  uvData.appendChild(uv);
  uvData.appendChild(uvMaxExposure);

  // Air Quality

  airQuality.innerHTML = "";

  const aq = document.createElement("div");
  aq.classList.add("aq");
  const aqIcon = document.createElement("img");
  aqIcon.src = `./images/air-quality.png`;
  aq.appendChild(aqIcon);
  const aqText = document.createElement("h2");
  aqText.innerText = "Air Quality Index";
  aq.appendChild(aqText);
  const aqMetric = document.createElement("div");
  aqMetric.classList.add("aqMetric");
  const aqIndex = document.createElement("h2");
  const aqIndexValue = `${data[2].list[0].main.aqi}`;
  aqIndex.innerText = aqIndexValue;
  aqMetric.appendChild(aqIndex);
  aq.appendChild(aqMetric);

  if (aqIndexValue == 0) {
    aqMetric.style.backgroundColor = "#20bf55";
  } else if (aqIndexValue == 2) {
    aqMetric.style.backgroundColor = "#ffee32";
  } else if (aqIndexValue == 3) {
    aqMetric.style.backgroundColor = "#ff6700";
  } else if (aqIndexValue == 4) {
    aqMetric.style.backgroundColor = "#e5383b";
  } else {
    aqMetric.style.backgroundColor = "#b5179e";
  }

  uvData.appendChild(uv);
  uvData.appendChild(uvMaxExposure);
  airQuality.appendChild(aq);
}

export { showEnvironmental };
