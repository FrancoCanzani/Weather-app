async function fetchData() {
  try {
    const response1 = await fetch(
      "https://api.openweathermap.org/geo/1.0/direct?q=Moscu&limit=1&appid=629531abca22eb8266b74fa0de195aec"
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

fetchData().then((data) => {
  console.log(data);
});
