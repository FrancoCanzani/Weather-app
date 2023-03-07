import L from "leaflet";

const key = "YOUR_API_KEY";

const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const units = "metric";
const params = {
  appid: key,
  units: units,
};

const map = L.map("map").setView([0, 0], 1);

// Add a TileLayer for the map background
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; OpenStreetMap contributors",
  maxZoom: 18,
}).addTo(map);

function getWeatherData(latitude, longitude) {
  const apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}`;
  return fetch(apiUrl, { params }).then((response) => response.json());
}

function addMarkerToMap(latitude, longitude, popupContent) {
  const marker = L.marker([latitude, longitude]).addTo(map);
  const popup = L.popup().setContent(popupContent);
  marker.bindPopup(popup).openPopup();
}

export { map, key, getWeatherData, addMarkerToMap };
