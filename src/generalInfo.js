function generalInfo(data) {
  // Convert Unix timestamp values for sunrise and sunset
  const sunriseDate = new Date(data[0].sys.sunrise * 1000);
  const sunsetDate = new Date(data[0].sys.sunset * 1000);

  const weatherData = {
    feels_like: `<p>Feels like: <span>${Math.round(
      data[0].main.feels_like
    )}°</span></p>`,
    cloud: `<p>Cloud cover: <span>${data[0].clouds.all}%</span></p>`,
    humidity: `<p>Humidity: <span>${data[0].main.humidity}%</span></p>`,
    pressure: `<p>Pressure: <span>${data[0].main.pressure} Milibars</span></p>`,
    wind_speed: `<p>Wind speed: <span>${data[0].wind.speed} KM/h</span></p>`,
    visibility: `<p>Visibility: <span>${
      data[0].visibility / 1000
    } KM</span></p>`,
    sunrise: `<p>Sunrise: <span>${sunriseDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}</span></p>`,
    sunset: `<p>Sunset: <span>${sunsetDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}</span></p>`,
  };
  return Object.values(weatherData).join("\n");
}

export { generalInfo };
