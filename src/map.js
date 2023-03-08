const key = "629531abca22eb8266b74fa0de195aec";

const map = L.map("map").setView([0, 0], 15);

// Add a TileLayer for the map background
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
}).addTo(map);

const temperatureLayer = L.tileLayer(
  `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${key}`,
  {
    maxZoom: 20,
  }
);

let marker;

function showMap(location) {
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

  map.setZoom(5);
}

export { showMap };
