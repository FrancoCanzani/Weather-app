const uvData = document.querySelector(".uvData");

function showEnvironmental(data) {
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
  uvData.appendChild(uvMetric);
}

export { showEnvironmental };
