/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showWeather": () => (/* binding */ showWeather)
/* harmony export */ });
var weatherMetrics = document.querySelector(".weatherMetrics");
function showWeather(data) {
  weatherMetrics.innerHTML = "";
  var title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Current Weather";

  //   Current temperature
  var temperature = document.createElement("div");
  temperature.classList.add("temperature");
  var degrees = document.createElement("h1");
  degrees.classList.add("degrees");
  degrees.innerText = "".concat(Math.round(data[0].main.temp), "\xB0c");
  var weatherDescription = document.createElement("h4");
  weatherDescription.classList.add("weatherDescription");
  weatherDescription.innerText = "".concat(data[0].weather[0].description);
  temperature.append(degrees);
  temperature.append(weatherDescription);

  // Weather Icon
  var weatherIcon = document.createElement("img");
  weatherIcon.classList.add("weatherIcon");
  weatherIcon.src = "./images/".concat(data[0].weather[0].icon, ".svg");

  // Humidity

  var humidity = document.createElement("div");
  humidity.classList.add("metrics");
  var humidityTitle = document.createElement("h1");
  humidityTitle.innerText = "Humidity";
  humidityTitle.classList.add("metricTitle");
  var humidityIcon = document.createElement("img");
  humidityIcon.src = "./images/humidity.svg";
  humidityIcon.classList.add("metricsIcon");
  var humidityPerc = document.createElement("h1");
  humidityPerc.innerText = "".concat(data[0].main.humidity, "%");
  humidityPerc.classList.add("weatherMetric");
  humidity.append(humidityTitle);
  humidity.append(humidityIcon);
  humidity.append(humidityPerc);

  // Wind

  var wind = document.createElement("div");
  wind.classList.add("metrics");
  var windTitle = document.createElement("h1");
  windTitle.innerText = "Wind";
  windTitle.classList.add("metricTitle");
  var windIcon = document.createElement("img");
  windIcon.src = "./images/windsock.svg";
  windIcon.classList.add("metricsIcon");
  var windData = document.createElement("h1");
  windData.innerText = "".concat(Math.round(data[0].wind.speed), " KM/h");
  windData.classList.add("weatherMetric");
  wind.append(windTitle);
  wind.append(windIcon);
  wind.append(windData);

  //  Pressure

  // const pressure = document.createElement("div");
  // pressure.classList.add("metrics");
  // const pressureTitle = document.createElement("h1");
  // pressureTitle.innerText = "Pressure";
  // pressureTitle.classList.add("metricTitle");
  // const pressureIcon = document.createElement("img");
  // if (data[0].main.pressure > 1000) {
  //   pressureIcon.src = `./images/pressure-high.svg`;
  // } else {
  //   pressureIcon.src = `./images/pressure-low.svg`;
  // }
  // pressureIcon.classList.add("metricsIcon");
  // const pressureData = document.createElement("h1");
  // pressureData.innerText = `${data[0].main.pressure} hPa`;
  // pressureData.classList.add("weatherMetric");
  // pressure.append(pressureTitle);
  // pressure.append(pressureIcon);
  // pressure.append(pressureData);

  weatherMetrics.append(temperature);
  weatherMetrics.append(weatherIcon);
  weatherMetrics.append(humidity);
  weatherMetrics.append(wind);
  // weatherMetrics.append(pressure);
}



/***/ }),

/***/ "./src/environmental.js":
/*!******************************!*\
  !*** ./src/environmental.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showEnvironmental": () => (/* binding */ showEnvironmental)
/* harmony export */ });
var uvData = document.querySelector(".uvData");
var airQuality = document.querySelector(".airQuality");
function showEnvironmental(data) {
  // UV
  uvData.innerHTML = "";
  var uv = document.createElement("div");
  uv.classList.add("uv");
  var uvIcon = document.createElement("img");
  uvIcon.src = "./images/uv-index.svg";
  uv.appendChild(uvIcon);
  var uvText = document.createElement("h2");
  uvText.innerText = "UV Index";
  uv.appendChild(uvText);
  var uvMetric = document.createElement("div");
  uvMetric.classList.add("uvMetric");
  var uvIndex = document.createElement("h2");
  uvIndex.innerText = "".concat(data[3].result.uv.toFixed(1));
  uvMetric.appendChild(uvIndex);
  uv.appendChild(uvMetric);
  var uvMaxTime = "".concat(data[3].result.uv_max_time);
  var dateObj = new Date(uvMaxTime);
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  var uvMaxExposure = document.createElement("h6");
  uvMaxExposure.classList.add("maxExposure");
  uvMaxExposure.innerText = "\u26A0\uFE0F Max UV exposure at: ".concat(hours, ":").concat(minutes);
  var uvIndexValue = parseInt(data[3].result.uv);
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
  var aq = document.createElement("div");
  aq.classList.add("aq");
  var aqIcon = document.createElement("img");
  aqIcon.src = "./images/air-quality.png";
  aq.appendChild(aqIcon);
  var aqText = document.createElement("h2");
  aqText.innerText = "Air Quality Index";
  aq.appendChild(aqText);
  var aqMetric = document.createElement("div");
  aqMetric.classList.add("aqMetric");
  var aqIndex = document.createElement("h2");
  var aqIndexValue = "".concat(data[2].list[0].main.aqi);
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


/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showForecast": () => (/* binding */ showForecast)
/* harmony export */ });
var forecastMetrics = document.querySelector(".forecastMetrics");
function showForecast(data) {
  // Group the hourly forecast data by day
  var dailyForecastData = {};
  data[1].list.forEach(function (forecast) {
    // extract the date from the timestamp and format it as a string
    var date = new Date(forecast.dt * 1000);
    var dateString = date.toISOString().substr(0, 10);

    // if this is the first forecast for this day, create a new object for the day
    if (!dailyForecastData[dateString]) {
      dailyForecastData[dateString] = {
        date: dateString,
        weather: []
      };
    }

    // add this forecast to the day's weather array
    dailyForecastData[dateString].weather.push(forecast);
  });

  // Convert the daily forecast data object to an array
  var dailyForecastArray = Object.values(dailyForecastData);

  // Display the daily forecast data
  forecastMetrics.innerHTML = "";
  dailyForecastArray.slice(0, 5).forEach(function (dailyForecast) {
    var forecastDay = document.createElement("div");
    var forecastDate = document.createElement("div");
    var forecastData = document.createElement("div");
    var forecastTemp = document.createElement("div");
    var forecastDegrees = document.createElement("h1");
    var forecastDescription = document.createElement("h4");
    forecastDay.classList.add("forecastDay");
    forecastDate.classList.add("forecastDate");
    forecastData.classList.add("forecastData");
    forecastTemp.classList.add("forecastTemp");
    forecastDegrees.classList.add("forecastDegrees");
    forecastDescription.classList.add("forecastDescription");
    var date = new Date(dailyForecast.date);
    var dateOptions = {
      month: "short",
      day: "numeric"
    };
    var formattedDate = date.toLocaleDateString("en-US", dateOptions);
    forecastDate.innerHTML = "".concat(formattedDate);
    var degrees = "".concat(Math.round(dailyForecast.weather.reduce(function (total, forecast) {
      return total + forecast.main.temp;
    }, 0) / dailyForecast.weather.length), "\xB0c");
    forecastDegrees.innerText = degrees;
    var weatherDescription = dailyForecast.weather[0].weather[0].description;
    forecastDescription.innerText = weatherDescription;
    var forecastIcon = document.createElement("img");
    forecastIcon.src = "./images/".concat(dailyForecast.weather[0].weather[0].icon, ".svg");
    forecastIcon.classList.add("forecastIcon");
    forecastTemp.appendChild(forecastDegrees);
    forecastTemp.appendChild(forecastDescription);
    forecastData.appendChild(forecastTemp);
    forecastData.appendChild(forecastIcon);
    forecastDay.appendChild(forecastDate);
    forecastDay.appendChild(forecastData);
    forecastMetrics.appendChild(forecastDay);
  });
}


/***/ }),

/***/ "./src/miscellaneous.js":
/*!******************************!*\
  !*** ./src/miscellaneous.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMiscellaneous": () => (/* binding */ showMiscellaneous)
/* harmony export */ });
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browserslist */ "./node_modules/browserslist/index.js");
/* harmony import */ var browserslist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browserslist__WEBPACK_IMPORTED_MODULE_0__);

var miscellaneousMetrics = document.querySelector(".miscellaneousMetrics");
function showMiscellaneous(data) {
  miscellaneousMetrics.innerHTML = "";

  // Feels like
  var feelsLike = document.createElement("div");
  feelsLike.classList.add("misc");
  var feelsLikeIcon = document.createElement("img");
  feelsLikeIcon.src = "./images/".concat(data[0].weather[0].icon, ".svg");
  feelsLikeIcon.classList.add("miscIcon");
  var feelsLikeText = document.createElement("p");
  feelsLikeText.innerText = "Feels like";
  feelsLikeText.classList.add("miscText");
  var feelsLikeMetric = document.createElement("p");
  feelsLikeMetric.innerText = "".concat(Math.round(data[0].main.feels_like), "\xB0c");
  feelsLikeMetric.classList.add("miscMetric");
  feelsLike.appendChild(feelsLikeIcon);
  feelsLike.appendChild(feelsLikeText);
  feelsLike.appendChild(feelsLikeMetric);

  // Max temp

  var maxTemp = document.createElement("div");
  maxTemp.classList.add("misc");
  var maxTempIcon = document.createElement("img");
  maxTempIcon.src = "./images/thermometer-warmer.svg";
  maxTempIcon.classList.add("miscIcon");
  var maxTempText = document.createElement("p");
  maxTempText.innerText = "Max temp";
  maxTempText.classList.add("miscText");
  var maxTempMetric = document.createElement("p");
  maxTempMetric.innerText = "".concat(Math.round(data[0].main.temp_max), "\xB0c");
  maxTempMetric.classList.add("miscMetric");
  maxTemp.appendChild(maxTempIcon);
  maxTemp.appendChild(maxTempText);
  maxTemp.appendChild(maxTempMetric);

  // Min temp

  var minTemp = document.createElement("div");
  minTemp.classList.add("misc");
  var minTempIcon = document.createElement("img");
  minTempIcon.src = "./images/thermometer-colder.svg";
  minTempIcon.classList.add("miscIcon");
  var minTempText = document.createElement("p");
  minTempText.innerText = "Min temp";
  minTempText.classList.add("miscText");
  var minTempMetric = document.createElement("p");
  minTempMetric.innerText = "".concat(Math.round(data[0].main.temp_min), "\xB0c");
  minTempMetric.classList.add("miscMetric");
  minTemp.appendChild(minTempIcon);
  minTemp.appendChild(minTempText);
  minTemp.appendChild(minTempMetric);

  // Sunrise

  // Convert the Unix timestamp for sunrise to hours
  var sunriseTimestamp = "".concat(data[0].sys.sunrise);
  var sunriseDate = new Date(sunriseTimestamp * 1000);
  var sunriseHours = ("0" + sunriseDate.getHours()).slice(-2); // add leading zero and slice last 2 characters
  var sunriseMinutes = ("0" + sunriseDate.getMinutes()).slice(-2); // add leading zero and slice last 2 characters
  var sunriseTime = sunriseHours + ":" + sunriseMinutes;
  var sunrise = document.createElement("div");
  sunrise.classList.add("misc");
  var sunriseIcon = document.createElement("img");
  sunriseIcon.src = "./images/sunrise.svg";
  sunriseIcon.classList.add("miscIcon");
  var sunriseText = document.createElement("p");
  sunriseText.innerText = "Sunrise";
  sunriseText.classList.add("miscText");
  var sunriseMetric = document.createElement("p");
  sunriseMetric.innerText = sunriseTime;
  sunriseMetric.classList.add("miscMetric");
  sunrise.appendChild(sunriseIcon);
  sunrise.appendChild(sunriseText);
  sunrise.appendChild(sunriseMetric);

  // Sunset

  // Convert the Unix timestamp for sunrise to hours
  var sunsetTimestamp = "".concat(data[0].sys.sunset);
  var sunsetDate = new Date(sunsetTimestamp * 1000);
  var sunsetHours = ("0" + sunsetDate.getHours()).slice(-2); // add leading zero and slice last 2 characters
  var sunsetMinutes = ("0" + sunsetDate.getMinutes()).slice(-2); // add leading zero and slice last 2 characters
  var sunsetTime = sunsetHours + ":" + sunsetMinutes;
  var sunset = document.createElement("div");
  sunset.classList.add("sunset");
  var sunsetIcon = document.createElement("img");
  sunsetIcon.src = "./images/sunset.svg";
  sunsetIcon.classList.add("miscIcon");
  var sunsetText = document.createElement("p");
  sunsetText.innerText = "Sunset";
  sunsetText.classList.add("miscText");
  var sunsetMetric = document.createElement("p");
  sunsetMetric.innerText = sunsetTime;
  sunsetMetric.classList.add("miscMetric");
  sunset.appendChild(sunsetIcon);
  sunset.appendChild(sunsetText);
  sunset.appendChild(sunsetMetric);
  miscellaneousMetrics.appendChild(feelsLike);
  miscellaneousMetrics.appendChild(maxTemp);
  miscellaneousMetrics.appendChild(minTemp);
  miscellaneousMetrics.appendChild(sunrise);
  miscellaneousMetrics.appendChild(sunset);
}


/***/ }),

/***/ "./node_modules/browserslist/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/browserslist/browser.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")

function noop() {}

module.exports = {
  loadQueries: function loadQueries() {
    throw new BrowserslistError(
      'Sharable configs are not supported in client-side build of Browserslist'
    )
  },

  getStat: function getStat(opts) {
    return opts.stats
  },

  loadConfig: function loadConfig(opts) {
    if (opts.config) {
      throw new BrowserslistError(
        'Browserslist config are not supported in client-side build'
      )
    }
  },

  loadCountry: function loadCountry() {
    throw new BrowserslistError(
      'Country statistics are not supported ' +
        'in client-side build of Browserslist'
    )
  },

  loadFeature: function loadFeature() {
    throw new BrowserslistError(
      'Supports queries are not available in client-side build of Browserslist'
    )
  },

  currentNode: function currentNode(resolve, context) {
    return resolve(['maintained node versions'], context)[0]
  },

  parseConfig: noop,

  readConfig: noop,

  findConfig: noop,

  clearCaches: noop,

  oldDataWarning: noop,

  env: {}
}


/***/ }),

/***/ "./node_modules/browserslist/error.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/error.js ***!
  \********************************************/
/***/ ((module) => {

function BrowserslistError(message) {
  this.name = 'BrowserslistError'
  this.message = message
  this.browserslist = true
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, BrowserslistError)
  }
}

BrowserslistError.prototype = Error.prototype

module.exports = BrowserslistError


/***/ }),

/***/ "./node_modules/browserslist/index.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var jsReleases = __webpack_require__(/*! node-releases/data/processed/envs.json */ "./node_modules/node-releases/data/processed/envs.json")
var agents = (__webpack_require__(/*! caniuse-lite/dist/unpacker/agents */ "./node_modules/caniuse-lite/dist/unpacker/agents.js").agents)
var jsEOL = __webpack_require__(/*! node-releases/data/release-schedule/release-schedule.json */ "./node_modules/node-releases/data/release-schedule/release-schedule.json")
var path = __webpack_require__(/*! path */ "?3465")
var e2c = __webpack_require__(/*! electron-to-chromium/versions */ "./node_modules/electron-to-chromium/versions.js")

var BrowserslistError = __webpack_require__(/*! ./error */ "./node_modules/browserslist/error.js")
var parse = __webpack_require__(/*! ./parse */ "./node_modules/browserslist/parse.js")
var env = __webpack_require__(/*! ./node */ "./node_modules/browserslist/browser.js") // Will load browser.js in webpack

var YEAR = 365.259641 * 24 * 60 * 60 * 1000
var ANDROID_EVERGREEN_FIRST = 37

// Helpers

function isVersionsMatch(versionA, versionB) {
  return (versionA + '.').indexOf(versionB + '.') === 0
}

function isEolReleased(name) {
  var version = name.slice(1)
  return browserslist.nodeVersions.some(function (i) {
    return isVersionsMatch(i, version)
  })
}

function normalize(versions) {
  return versions.filter(function (version) {
    return typeof version === 'string'
  })
}

function normalizeElectron(version) {
  var versionToUse = version
  if (version.split('.').length === 3) {
    versionToUse = version.split('.').slice(0, -1).join('.')
  }
  return versionToUse
}

function nameMapper(name) {
  return function mapName(version) {
    return name + ' ' + version
  }
}

function getMajor(version) {
  return parseInt(version.split('.')[0])
}

function getMajorVersions(released, number) {
  if (released.length === 0) return []
  var majorVersions = uniq(released.map(getMajor))
  var minimum = majorVersions[majorVersions.length - number]
  if (!minimum) {
    return released
  }
  var selected = []
  for (var i = released.length - 1; i >= 0; i--) {
    if (minimum > getMajor(released[i])) break
    selected.unshift(released[i])
  }
  return selected
}

function uniq(array) {
  var filtered = []
  for (var i = 0; i < array.length; i++) {
    if (filtered.indexOf(array[i]) === -1) filtered.push(array[i])
  }
  return filtered
}

function fillUsage(result, name, data) {
  for (var i in data) {
    result[name + ' ' + i] = data[i]
  }
}

function generateFilter(sign, version) {
  version = parseFloat(version)
  if (sign === '>') {
    return function (v) {
      return parseFloat(v) > version
    }
  } else if (sign === '>=') {
    return function (v) {
      return parseFloat(v) >= version
    }
  } else if (sign === '<') {
    return function (v) {
      return parseFloat(v) < version
    }
  } else {
    return function (v) {
      return parseFloat(v) <= version
    }
  }
}

function generateSemverFilter(sign, version) {
  version = version.split('.').map(parseSimpleInt)
  version[1] = version[1] || 0
  version[2] = version[2] || 0
  if (sign === '>') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) > 0
    }
  } else if (sign === '>=') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(v, version) >= 0
    }
  } else if (sign === '<') {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) > 0
    }
  } else {
    return function (v) {
      v = v.split('.').map(parseSimpleInt)
      return compareSemver(version, v) >= 0
    }
  }
}

function parseSimpleInt(x) {
  return parseInt(x)
}

function compare(a, b) {
  if (a < b) return -1
  if (a > b) return +1
  return 0
}

function compareSemver(a, b) {
  return (
    compare(parseInt(a[0]), parseInt(b[0])) ||
    compare(parseInt(a[1] || '0'), parseInt(b[1] || '0')) ||
    compare(parseInt(a[2] || '0'), parseInt(b[2] || '0'))
  )
}

// this follows the npm-like semver behavior
function semverFilterLoose(operator, range) {
  range = range.split('.').map(parseSimpleInt)
  if (typeof range[1] === 'undefined') {
    range[1] = 'x'
  }
  // ignore any patch version because we only return minor versions
  // range[2] = 'x'
  switch (operator) {
    case '<=':
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) <= 0
      }
    case '>=':
    default:
      return function (version) {
        version = version.split('.').map(parseSimpleInt)
        return compareSemverLoose(version, range) >= 0
      }
  }
}

// this follows the npm-like semver behavior
function compareSemverLoose(version, range) {
  if (version[0] !== range[0]) {
    return version[0] < range[0] ? -1 : +1
  }
  if (range[1] === 'x') {
    return 0
  }
  if (version[1] !== range[1]) {
    return version[1] < range[1] ? -1 : +1
  }
  return 0
}

function resolveVersion(data, version) {
  if (data.versions.indexOf(version) !== -1) {
    return version
  } else if (browserslist.versionAliases[data.name][version]) {
    return browserslist.versionAliases[data.name][version]
  } else {
    return false
  }
}

function normalizeVersion(data, version) {
  var resolved = resolveVersion(data, version)
  if (resolved) {
    return resolved
  } else if (data.versions.length === 1) {
    return data.versions[0]
  } else {
    return false
  }
}

function filterByYear(since, context) {
  since = since / 1000
  return Object.keys(agents).reduce(function (selected, name) {
    var data = byName(name, context)
    if (!data) return selected
    var versions = Object.keys(data.releaseDate).filter(function (v) {
      var date = data.releaseDate[v]
      return date !== null && date >= since
    })
    return selected.concat(versions.map(nameMapper(data.name)))
  }, [])
}

function cloneData(data) {
  return {
    name: data.name,
    versions: data.versions,
    released: data.released,
    releaseDate: data.releaseDate
  }
}

function mapVersions(data, map) {
  data.versions = data.versions.map(function (i) {
    return map[i] || i
  })
  data.released = data.released.map(function (i) {
    return map[i] || i
  })
  var fixedDate = {}
  for (var i in data.releaseDate) {
    fixedDate[map[i] || i] = data.releaseDate[i]
  }
  data.releaseDate = fixedDate
  return data
}

function byName(name, context) {
  name = name.toLowerCase()
  name = browserslist.aliases[name] || name
  if (context.mobileToDesktop && browserslist.desktopNames[name]) {
    var desktop = browserslist.data[browserslist.desktopNames[name]]
    if (name === 'android') {
      return normalizeAndroidData(cloneData(browserslist.data[name]), desktop)
    } else {
      var cloned = cloneData(desktop)
      cloned.name = name
      if (name === 'op_mob') {
        cloned = mapVersions(cloned, { '10.0-10.1': '10' })
      }
      return cloned
    }
  }
  return browserslist.data[name]
}

function normalizeAndroidVersions(androidVersions, chromeVersions) {
  var firstEvergreen = ANDROID_EVERGREEN_FIRST
  var last = chromeVersions[chromeVersions.length - 1]
  return androidVersions
    .filter(function (version) {
      return /^(?:[2-4]\.|[34]$)/.test(version)
    })
    .concat(chromeVersions.slice(firstEvergreen - last - 1))
}

function normalizeAndroidData(android, chrome) {
  android.released = normalizeAndroidVersions(android.released, chrome.released)
  android.versions = normalizeAndroidVersions(android.versions, chrome.versions)
  return android
}

function checkName(name, context) {
  var data = byName(name, context)
  if (!data) throw new BrowserslistError('Unknown browser ' + name)
  return data
}

function unknownQuery(query) {
  return new BrowserslistError(
    'Unknown browser query `' +
      query +
      '`. ' +
      'Maybe you are using old Browserslist or made typo in query.'
  )
}

function filterAndroid(list, versions, context) {
  if (context.mobileToDesktop) return list
  var released = browserslist.data.android.released
  var last = released[released.length - 1]
  var diff = last - ANDROID_EVERGREEN_FIRST - versions
  if (diff > 0) {
    return list.slice(-1)
  } else {
    return list.slice(diff - 1)
  }
}

function resolve(queries, context) {
  return parse(QUERIES, queries).reduce(function (result, node, index) {
    if (node.not && index === 0) {
      throw new BrowserslistError(
        'Write any browsers query (for instance, `defaults`) ' +
          'before `' +
          node.query +
          '`'
      )
    }
    var type = QUERIES[node.type]
    var array = type.select.call(browserslist, context, node).map(function (j) {
      var parts = j.split(' ')
      if (parts[1] === '0') {
        return parts[0] + ' ' + byName(parts[0], context).versions[0]
      } else {
        return j
      }
    })

    if (node.compose === 'and') {
      if (node.not) {
        return result.filter(function (j) {
          return array.indexOf(j) === -1
        })
      } else {
        return result.filter(function (j) {
          return array.indexOf(j) !== -1
        })
      }
    } else {
      if (node.not) {
        var filter = {}
        array.forEach(function (j) {
          filter[j] = true
        })
        return result.filter(function (j) {
          return !filter[j]
        })
      }
      return result.concat(array)
    }
  }, [])
}

function prepareOpts(opts) {
  if (typeof opts === 'undefined') opts = {}

  if (typeof opts.path === 'undefined') {
    opts.path = path.resolve ? path.resolve('.') : '.'
  }

  return opts
}

function prepareQueries(queries, opts) {
  if (typeof queries === 'undefined' || queries === null) {
    var config = browserslist.loadConfig(opts)
    if (config) {
      queries = config
    } else {
      queries = browserslist.defaults
    }
  }

  return queries
}

function checkQueries(queries) {
  if (!(typeof queries === 'string' || Array.isArray(queries))) {
    throw new BrowserslistError(
      'Browser queries must be an array or string. Got ' + typeof queries + '.'
    )
  }
}

var cache = {}

function browserslist(queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)

  var context = {
    ignoreUnknownVersions: opts.ignoreUnknownVersions,
    dangerousExtend: opts.dangerousExtend,
    mobileToDesktop: opts.mobileToDesktop,
    path: opts.path,
    env: opts.env
  }

  env.oldDataWarning(browserslist.data)
  var stats = env.getStat(opts, browserslist.data)
  if (stats) {
    context.customUsage = {}
    for (var browser in stats) {
      fillUsage(context.customUsage, browser, stats[browser])
    }
  }

  var cacheKey = JSON.stringify([queries, context])
  if (cache[cacheKey]) return cache[cacheKey]

  var result = uniq(resolve(queries, context)).sort(function (name1, name2) {
    name1 = name1.split(' ')
    name2 = name2.split(' ')
    if (name1[0] === name2[0]) {
      // assumptions on caniuse data
      // 1) version ranges never overlaps
      // 2) if version is not a range, it never contains `-`
      var version1 = name1[1].split('-')[0]
      var version2 = name2[1].split('-')[0]
      return compareSemver(version2.split('.'), version1.split('.'))
    } else {
      return compare(name1[0], name2[0])
    }
  })
  if (!env.env.BROWSERSLIST_DISABLE_CACHE) {
    cache[cacheKey] = result
  }
  return result
}

browserslist.parse = function (queries, opts) {
  opts = prepareOpts(opts)
  queries = prepareQueries(queries, opts)
  checkQueries(queries)
  return parse(QUERIES, queries)
}

// Will be filled by Can I Use data below
browserslist.cache = {}
browserslist.data = {}
browserslist.usage = {
  global: {},
  custom: null
}

// Default browsers query
browserslist.defaults = ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']

// Browser names aliases
browserslist.aliases = {
  fx: 'firefox',
  ff: 'firefox',
  ios: 'ios_saf',
  explorer: 'ie',
  blackberry: 'bb',
  explorermobile: 'ie_mob',
  operamini: 'op_mini',
  operamobile: 'op_mob',
  chromeandroid: 'and_chr',
  firefoxandroid: 'and_ff',
  ucandroid: 'and_uc',
  qqandroid: 'and_qq'
}

// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
browserslist.desktopNames = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  op_mob: 'opera',
  android: 'chrome' // has extra processing logic
}

// Aliases to work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = {}

browserslist.clearCaches = env.clearCaches
browserslist.parseConfig = env.parseConfig
browserslist.readConfig = env.readConfig
browserslist.findConfig = env.findConfig
browserslist.loadConfig = env.loadConfig

browserslist.coverage = function (browsers, stats) {
  var data
  if (typeof stats === 'undefined') {
    data = browserslist.usage.global
  } else if (stats === 'my stats') {
    var opts = {}
    opts.path = path.resolve ? path.resolve('.') : '.'
    var customStats = env.getStat(opts)
    if (!customStats) {
      throw new BrowserslistError('Custom usage statistics was not provided')
    }
    data = {}
    for (var browser in customStats) {
      fillUsage(data, browser, customStats[browser])
    }
  } else if (typeof stats === 'string') {
    if (stats.length > 2) {
      stats = stats.toLowerCase()
    } else {
      stats = stats.toUpperCase()
    }
    env.loadCountry(browserslist.usage, stats, browserslist.data)
    data = browserslist.usage[stats]
  } else {
    if ('dataByBrowser' in stats) {
      stats = stats.dataByBrowser
    }
    data = {}
    for (var name in stats) {
      for (var version in stats[name]) {
        data[name + ' ' + version] = stats[name][version]
      }
    }
  }

  return browsers.reduce(function (all, i) {
    var usage = data[i]
    if (usage === undefined) {
      usage = data[i.replace(/ \S+$/, ' 0')]
    }
    return all + (usage || 0)
  }, 0)
}

function nodeQuery(context, node) {
  var matched = browserslist.nodeVersions.filter(function (i) {
    return isVersionsMatch(i, node.version)
  })
  if (matched.length === 0) {
    if (context.ignoreUnknownVersions) {
      return []
    } else {
      throw new BrowserslistError(
        'Unknown version ' + node.version + ' of Node.js'
      )
    }
  }
  return ['node ' + matched[matched.length - 1]]
}

function sinceQuery(context, node) {
  var year = parseInt(node.year)
  var month = parseInt(node.month || '01') - 1
  var day = parseInt(node.day || '01')
  return filterByYear(Date.UTC(year, month, day, 0, 0, 0), context)
}

function coverQuery(context, node) {
  var coverage = parseFloat(node.coverage)
  var usage = browserslist.usage.global
  if (node.place) {
    if (node.place.match(/^my\s+stats$/i)) {
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      usage = context.customUsage
    } else {
      var place
      if (node.place.length === 2) {
        place = node.place.toUpperCase()
      } else {
        place = node.place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      usage = browserslist.usage[place]
    }
  }
  var versions = Object.keys(usage).sort(function (a, b) {
    return usage[b] - usage[a]
  })
  var coveraged = 0
  var result = []
  var version
  for (var i = 0; i < versions.length; i++) {
    version = versions[i]
    if (usage[version] === 0) break
    coveraged += usage[version]
    result.push(version)
    if (coveraged >= coverage) break
  }
  return result
}

var QUERIES = {
  last_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = getMajorVersions(data.released, node.versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, node.versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  last_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.released.slice(-node.versions)
        list = list.map(nameMapper(data.name))
        if (data.name === 'android') {
          list = filterAndroid(list, node.versions, context)
        }
        return selected.concat(list)
      }, [])
    }
  },
  last_electron_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function (context, node) {
      var validVersions = getMajorVersions(Object.keys(e2c), node.versions)
      return validVersions.map(function (i) {
        return 'chrome ' + e2c[i]
      })
    }
  },
  last_node_major_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function (context, node) {
      return getMajorVersions(browserslist.nodeVersions, node.versions).map(
        function (version) {
          return 'node ' + version
        }
      )
    }
  },
  last_browser_major_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var validVersions = getMajorVersions(data.released, node.versions)
      var list = validVersions.map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, node.versions, context)
      }
      return list
    }
  },
  last_electron_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function (context, node) {
      return Object.keys(e2c)
        .slice(-node.versions)
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  last_node_versions: {
    matches: ['versions'],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .slice(-node.versions)
        .map(function (version) {
          return 'node ' + version
        })
    }
  },
  last_browser_versions: {
    matches: ['versions', 'browser'],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var list = data.released.slice(-node.versions).map(nameMapper(data.name))
      if (data.name === 'android') {
        list = filterAndroid(list, node.versions, context)
      }
      return list
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function (context) {
      return Object.keys(agents).reduce(function (selected, name) {
        var data = byName(name, context)
        if (!data) return selected
        var list = data.versions.filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        list = list.map(nameMapper(data.name))
        return selected.concat(list)
      }, [])
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function () {
      return []
    }
  },
  unreleased_browser_versions: {
    matches: ['browser'],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      return data.versions
        .filter(function (v) {
          return data.released.indexOf(v) === -1
        })
        .map(nameMapper(data.name))
    }
  },
  last_years: {
    matches: ['years'],
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function (context, node) {
      return filterByYear(Date.now() - YEAR * node.years, context)
    }
  },
  since_y: {
    matches: ['year'],
    regexp: /^since (\d+)$/i,
    select: sinceQuery
  },
  since_y_m: {
    matches: ['year', 'month'],
    regexp: /^since (\d+)-(\d+)$/i,
    select: sinceQuery
  },
  since_y_m_d: {
    matches: ['year', 'month', 'day'],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: sinceQuery
  },
  popularity: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var usage = browserslist.usage.global
      return Object.keys(usage).reduce(function (result, version) {
        if (node.sign === '>') {
          if (usage[version] > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (usage[version] < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (usage[version] <= popularity) {
            result.push(version)
          }
        } else if (usage[version] >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_my_stats: {
    matches: ['sign', 'popularity'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_config_stats: {
    matches: ['sign', 'popularity', 'config'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var stats = env.loadStat(context, node.config, browserslist.data)
      if (stats) {
        context.customUsage = {}
        for (var browser in stats) {
          fillUsage(context.customUsage, browser, stats[browser])
        }
      }
      if (!context.customUsage) {
        throw new BrowserslistError('Custom usage statistics was not provided')
      }
      var usage = context.customUsage
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  popularity_in_place: {
    matches: ['sign', 'popularity', 'place'],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function (context, node) {
      var popularity = parseFloat(node.popularity)
      var place = node.place
      if (place.length === 2) {
        place = place.toUpperCase()
      } else {
        place = place.toLowerCase()
      }
      env.loadCountry(browserslist.usage, place, browserslist.data)
      var usage = browserslist.usage[place]
      return Object.keys(usage).reduce(function (result, version) {
        var percentage = usage[version]
        if (percentage == null) {
          return result
        }

        if (node.sign === '>') {
          if (percentage > popularity) {
            result.push(version)
          }
        } else if (node.sign === '<') {
          if (percentage < popularity) {
            result.push(version)
          }
        } else if (node.sign === '<=') {
          if (percentage <= popularity) {
            result.push(version)
          }
        } else if (percentage >= popularity) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  cover: {
    matches: ['coverage'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: coverQuery
  },
  cover_in: {
    matches: ['coverage', 'place'],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: coverQuery
  },
  supports: {
    matches: ['feature'],
    regexp: /^supports\s+([\w-]+)$/,
    select: function (context, node) {
      env.loadFeature(browserslist.cache, node.feature)
      var features = browserslist.cache[node.feature]
      return Object.keys(features).reduce(function (result, version) {
        var flags = features[version]
        if (flags.indexOf('y') >= 0 || flags.indexOf('a') >= 0) {
          result.push(version)
        }
        return result
      }, [])
    }
  },
  electron_range: {
    matches: ['from', 'to'],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var fromToUse = normalizeElectron(node.from)
      var toToUse = normalizeElectron(node.to)
      var from = parseFloat(node.from)
      var to = parseFloat(node.to)
      if (!e2c[fromToUse]) {
        throw new BrowserslistError('Unknown version ' + from + ' of electron')
      }
      if (!e2c[toToUse]) {
        throw new BrowserslistError('Unknown version ' + to + ' of electron')
      }
      return Object.keys(e2c)
        .filter(function (i) {
          var parsed = parseFloat(i)
          return parsed >= from && parsed <= to
        })
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_range: {
    matches: ['from', 'to'],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(semverFilterLoose('>=', node.from))
        .filter(semverFilterLoose('<=', node.to))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_range: {
    matches: ['browser', 'from', 'to'],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function (context, node) {
      var data = checkName(node.browser, context)
      var from = parseFloat(normalizeVersion(data, node.from) || node.from)
      var to = parseFloat(normalizeVersion(data, node.to) || node.to)
      function filter(v) {
        var parsed = parseFloat(v)
        return parsed >= from && parsed <= to
      }
      return data.released.filter(filter).map(nameMapper(data.name))
    }
  },
  electron_ray: {
    matches: ['sign', 'version'],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      return Object.keys(e2c)
        .filter(generateFilter(node.sign, versionToUse))
        .map(function (i) {
          return 'chrome ' + e2c[i]
        })
    }
  },
  node_ray: {
    matches: ['sign', 'version'],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function (context, node) {
      return browserslist.nodeVersions
        .filter(generateSemverFilter(node.sign, node.version))
        .map(function (v) {
          return 'node ' + v
        })
    }
  },
  browser_ray: {
    matches: ['browser', 'sign', 'version'],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function (context, node) {
      var version = node.version
      var data = checkName(node.browser, context)
      var alias = browserslist.versionAliases[data.name][version]
      if (alias) version = alias
      return data.released
        .filter(generateFilter(node.sign, version))
        .map(function (v) {
          return data.name + ' ' + v
        })
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function () {
      return ['firefox 102']
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function () {
      return ['op_mini all']
    }
  },
  electron_version: {
    matches: ['version'],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function (context, node) {
      var versionToUse = normalizeElectron(node.version)
      var chrome = e2c[versionToUse]
      if (!chrome) {
        throw new BrowserslistError(
          'Unknown version ' + node.version + ' of electron'
        )
      }
      return ['chrome ' + chrome]
    }
  },
  node_major_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+)$/i,
    select: nodeQuery
  },
  node_minor_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: nodeQuery
  },
  node_patch_version: {
    matches: ['version'],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: nodeQuery
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function (context) {
      return [env.currentNode(resolve, context)]
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function (context) {
      var now = Date.now()
      var queries = Object.keys(jsEOL)
        .filter(function (key) {
          return (
            now < Date.parse(jsEOL[key].end) &&
            now > Date.parse(jsEOL[key].start) &&
            isEolReleased(key)
          )
        })
        .map(function (key) {
          return 'node ' + key.slice(1)
        })
      return resolve(queries, context)
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function () {
      return ['safari 5']
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function () {
      return ['safari 6']
    }
  },
  browser_version: {
    matches: ['browser', 'version'],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function (context, node) {
      var version = node.version
      if (/^tp$/i.test(version)) version = 'TP'
      var data = checkName(node.browser, context)
      var alias = normalizeVersion(data, version)
      if (alias) {
        version = alias
      } else {
        if (version.indexOf('.') === -1) {
          alias = version + '.0'
        } else {
          alias = version.replace(/\.0$/, '')
        }
        alias = normalizeVersion(data, alias)
        if (alias) {
          version = alias
        } else if (context.ignoreUnknownVersions) {
          return []
        } else {
          throw new BrowserslistError(
            'Unknown version ' + version + ' of ' + node.browser
          )
        }
      }
      return [data.name + ' ' + version]
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    select: function (context) {
      return browserslist(undefined, context)
    }
  },
  extends: {
    matches: ['config'],
    regexp: /^extends (.+)$/i,
    select: function (context, node) {
      return resolve(env.loadQueries(context, node.config), context)
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function (context) {
      return resolve(browserslist.defaults, context)
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function (context) {
      var dead = [
        'Baidu >= 0',
        'ie <= 11',
        'ie_mob <= 11',
        'bb <= 10',
        'op_mob <= 12.1',
        'samsung 4'
      ]
      return resolve(dead, context)
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function (context, node) {
      if (byName(node.query, context)) {
        throw new BrowserslistError(
          'Specify versions in Browserslist query for browser ' + node.query
        )
      } else {
        throw unknownQuery(node.query)
      }
    }
  }
}

// Get and convert Can I Use data

;(function () {
  for (var name in agents) {
    var browser = agents[name]
    browserslist.data[name] = {
      name: name,
      versions: normalize(agents[name].versions),
      released: normalize(agents[name].versions.slice(0, -3)),
      releaseDate: agents[name].release_date
    }
    fillUsage(browserslist.usage.global, name, browser.usage_global)

    browserslist.versionAliases[name] = {}
    for (var i = 0; i < browser.versions.length; i++) {
      var full = browser.versions[i]
      if (!full) continue

      if (full.indexOf('-') !== -1) {
        var interval = full.split('-')
        for (var j = 0; j < interval.length; j++) {
          browserslist.versionAliases[name][interval[j]] = full
        }
      }
    }
  }

  browserslist.versionAliases.op_mob['59'] = '58'

  browserslist.nodeVersions = jsReleases.map(function (release) {
    return release.version
  })
})()

module.exports = browserslist


/***/ }),

/***/ "./node_modules/browserslist/parse.js":
/*!********************************************!*\
  !*** ./node_modules/browserslist/parse.js ***!
  \********************************************/
/***/ ((module) => {

var AND_REGEXP = /^\s+and\s+(.*)/i
var OR_REGEXP = /^(?:,\s*|\s+or\s+)(.*)/i

function flatten(array) {
  if (!Array.isArray(array)) return [array]
  return array.reduce(function (a, b) {
    return a.concat(flatten(b))
  }, [])
}

function find(string, predicate) {
  for (var n = 1, max = string.length; n <= max; n++) {
    var parsed = string.substr(-n, n)
    if (predicate(parsed, n, max)) {
      return string.slice(0, -n)
    }
  }
  return ''
}

function matchQuery(all, query) {
  var node = { query: query }
  if (query.indexOf('not ') === 0) {
    node.not = true
    query = query.slice(4)
  }

  for (var name in all) {
    var type = all[name]
    var match = query.match(type.regexp)
    if (match) {
      node.type = name
      for (var i = 0; i < type.matches.length; i++) {
        node[type.matches[i]] = match[i + 1]
      }
      return node
    }
  }

  node.type = 'unknown'
  return node
}

function matchBlock(all, string, qs) {
  var node
  return find(string, function (parsed, n, max) {
    if (AND_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(AND_REGEXP)[1])
      node.compose = 'and'
      qs.unshift(node)
      return true
    } else if (OR_REGEXP.test(parsed)) {
      node = matchQuery(all, parsed.match(OR_REGEXP)[1])
      node.compose = 'or'
      qs.unshift(node)
      return true
    } else if (n === max) {
      node = matchQuery(all, parsed.trim())
      node.compose = 'or'
      qs.unshift(node)
      return true
    }
    return false
  })
}

module.exports = function parse(all, queries) {
  if (!Array.isArray(queries)) queries = [queries]
  return flatten(
    queries.map(function (block) {
      var qs = []
      do {
        block = matchBlock(all, block, qs)
      } while (block)
      return qs
    })
  )
}


/***/ }),

/***/ "./node_modules/caniuse-lite/data/agents.js":
/*!**************************************************!*\
  !*** ./node_modules/caniuse-lite/data/agents.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports={A:{A:{J:0.0131217,E:0.00621152,F:0.0530043,G:0.074206,A:0.0106009,B:0.508841,CC:0.009298},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","CC","J","E","F","G","A","B","","",""],E:"IE",F:{CC:962323200,J:998870400,E:1161129600,F:1237420800,G:1300060800,A:1346716800,B:1381968000}},B:{A:{C:0.007886,K:0.004267,L:0.004268,H:0.003943,M:0.003702,N:0.003943,O:0.015772,P:0,Q:0.004298,R:0.00944,S:0.004043,T:0.007886,U:0.007886,V:0.003943,W:0.003943,X:0.003943,Y:0.007886,Z:0.003943,a:0.003943,b:0.011829,c:0.004118,d:0.003939,e:0.003943,g:0.003943,h:0.003943,i:0.003929,j:0.003901,k:0.011829,l:0.007886,m:0.003943,n:0.011829,o:0.011829,p:0.011829,q:0.019715,r:0.102518,s:2.13316,D:1.95967,t:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","C","K","L","H","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","D","t","","",""],E:"Edge",F:{C:1438128000,K:1447286400,L:1470096000,H:1491868800,M:1508198400,N:1525046400,O:1542067200,P:1579046400,Q:1581033600,R:1586736000,S:1590019200,T:1594857600,U:1598486400,V:1602201600,W:1605830400,X:1611360000,Y:1614816000,Z:1618358400,a:1622073600,b:1626912000,c:1630627200,d:1632441600,e:1634774400,g:1637539200,h:1641427200,i:1643932800,j:1646265600,k:1649635200,l:1651190400,m:1653955200,n:1655942400,o:1659657600,p:1661990400,q:1664755200,r:1666915200,s:1670198400,D:1673481600,t:1675900800},D:{C:"ms",K:"ms",L:"ms",H:"ms",M:"ms",N:"ms",O:"ms"}},C:{A:{"0":0.008786,"1":0.004118,"2":0.004317,"3":0.004393,"4":0.004418,"5":0.008834,"6":0.008322,"7":0.008928,"8":0.004471,"9":0.009284,DC:0.004118,tB:0.004271,I:0.011703,u:0.004879,J:0.020136,E:0.005725,F:0.004525,G:0.00533,A:0.004283,B:0.007886,C:0.004471,K:0.004486,L:0.00453,H:0.008322,M:0.004417,N:0.004425,O:0.004161,v:0.004443,w:0.004283,x:0.008322,y:0.013698,z:0.004161,AB:0.004707,BB:0.009076,CB:0.003943,DB:0.004783,EB:0.003929,FB:0.004783,GB:0.00487,HB:0.005029,IB:0.0047,JB:0.027601,KB:0.003943,LB:0.003867,MB:0.004525,NB:0.004293,OB:0.007886,PB:0.004538,QB:0.008282,RB:0.011601,SB:0.047316,TB:0.011601,UB:0.003929,VB:0.003974,WB:0.007886,XB:0.011601,YB:0.003939,uB:0.003943,ZB:0.003929,vB:0.004356,aB:0.004425,bB:0.008322,cB:0.00415,dB:0.004267,eB:0.003801,fB:0.004267,gB:0.003943,hB:0.00415,iB:0.004293,jB:0.004425,kB:0.003943,f:0.00415,lB:0.00415,mB:0.004318,nB:0.004356,oB:0.003974,pB:0.035487,P:0.003943,Q:0.003943,R:0.003943,wB:0.003943,S:0.003943,T:0.003929,U:0.004268,V:0.003801,W:0.011829,X:0.007886,Y:0.003943,Z:0.003943,a:0.011829,b:0.003801,c:0.003855,d:0.015772,e:0.003773,g:0.007886,h:0.003901,i:0.003901,j:0.003943,k:0.003943,l:0.003943,m:0.094632,n:0.043373,o:0.011829,p:0.023658,q:0.023658,r:0.047316,s:1.33668,D:0.760999,t:0.007886,xB:0,yB:0,EC:0.008786,FC:0.00487},B:"moz",C:["DC","tB","EC","FC","I","u","J","E","F","G","A","B","C","K","L","H","M","N","O","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","uB","ZB","vB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","f","lB","mB","nB","oB","pB","P","Q","R","wB","S","T","U","V","W","X","Y","Z","a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","D","t","xB","yB",""],E:"Firefox",F:{"0":1375747200,"1":1379376000,"2":1386633600,"3":1391472000,"4":1395100800,"5":1398729600,"6":1402358400,"7":1405987200,"8":1409616000,"9":1413244800,DC:1161648000,tB:1213660800,EC:1246320000,FC:1264032000,I:1300752000,u:1308614400,J:1313452800,E:1317081600,F:1317081600,G:1320710400,A:1324339200,B:1327968000,C:1331596800,K:1335225600,L:1338854400,H:1342483200,M:1346112000,N:1349740800,O:1353628800,v:1357603200,w:1361232000,x:1364860800,y:1368489600,z:1372118400,AB:1417392000,BB:1421107200,CB:1424736000,DB:1428278400,EB:1431475200,FB:1435881600,GB:1439251200,HB:1442880000,IB:1446508800,JB:1450137600,KB:1453852800,LB:1457395200,MB:1461628800,NB:1465257600,OB:1470096000,PB:1474329600,QB:1479168000,RB:1485216000,SB:1488844800,TB:1492560000,UB:1497312000,VB:1502150400,WB:1506556800,XB:1510617600,YB:1516665600,uB:1520985600,ZB:1525824000,vB:1529971200,aB:1536105600,bB:1540252800,cB:1544486400,dB:1548720000,eB:1552953600,fB:1558396800,gB:1562630400,hB:1567468800,iB:1571788800,jB:1575331200,kB:1578355200,f:1581379200,lB:1583798400,mB:1586304000,nB:1588636800,oB:1591056000,pB:1593475200,P:1595894400,Q:1598313600,R:1600732800,wB:1603152000,S:1605571200,T:1607990400,U:1611619200,V:1614038400,W:1616457600,X:1618790400,Y:1622505600,Z:1626134400,a:1628553600,b:1630972800,c:1633392000,d:1635811200,e:1638835200,g:1641859200,h:1644364800,i:1646697600,j:1649116800,k:1651536000,l:1653955200,m:1656374400,n:1658793600,o:1661212800,p:1663632000,q:1666051200,r:1668470400,s:1670889600,D:1673913600,t:1676332800,xB:null,yB:null}},D:{A:{"0":0.003939,"1":0.004461,"2":0.004141,"3":0.004326,"4":0.0047,"5":0.004538,"6":0.008322,"7":0.008596,"8":0.004566,"9":0.004118,I:0.004706,u:0.004879,J:0.004879,E:0.005591,F:0.005591,G:0.005591,A:0.004534,B:0.004464,C:0.010424,K:0.0083,L:0.004706,H:0.015087,M:0.004393,N:0.004393,O:0.008652,v:0.008322,w:0.004393,x:0.004317,y:0.003901,z:0.008786,AB:0.007886,BB:0.007886,CB:0.004335,DB:0.004464,EB:0.015772,FB:0.003867,GB:0.015772,HB:0.003773,IB:0.003974,JB:0.003943,KB:0.007948,LB:0.003974,MB:0.003867,NB:0.007886,OB:0.019715,PB:0.043373,QB:0.003867,RB:0.003929,SB:0.007886,TB:0.007886,UB:0.003867,VB:0.003943,WB:0.086746,XB:0.003943,YB:0.015772,uB:0.003773,ZB:0.011829,vB:0.011319,aB:0.003773,bB:0.007886,cB:0.003943,dB:0.007886,eB:0.031544,fB:0.007886,gB:0.011829,hB:0.059145,iB:0.027601,jB:0.015772,kB:0.031544,f:0.011829,lB:0.043373,mB:0.047316,nB:0.031544,oB:0.015772,pB:0.027601,P:0.126176,Q:0.035487,R:0.03943,S:0.070974,T:0.043373,U:0.086746,V:0.074917,W:0.07886,X:0.027601,Y:0.043373,Z:0.051259,a:0.074917,b:0.063088,c:0.059145,d:0.051259,e:0.03943,g:0.067031,h:0.070974,i:0.126176,j:0.082803,k:0.094632,l:0.07886,m:0.110404,n:0.268124,o:0.11829,p:0.149834,q:0.138005,r:0.417958,s:11.2218,D:9.7471,t:0.019715,xB:0.019715,yB:0,GC:0},B:"webkit",C:["","","","","","I","u","J","E","F","G","A","B","C","K","L","H","M","N","O","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","uB","ZB","vB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","f","lB","mB","nB","oB","pB","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","D","t","xB","yB","GC"],E:"Chrome",F:{"0":1352246400,"1":1357862400,"2":1361404800,"3":1364428800,"4":1369094400,"5":1374105600,"6":1376956800,"7":1384214400,"8":1389657600,"9":1392940800,I:1264377600,u:1274745600,J:1283385600,E:1287619200,F:1291248000,G:1296777600,A:1299542400,B:1303862400,C:1307404800,K:1312243200,L:1316131200,H:1316131200,M:1319500800,N:1323734400,O:1328659200,v:1332892800,w:1337040000,x:1340668800,y:1343692800,z:1348531200,AB:1397001600,BB:1400544000,CB:1405468800,DB:1409011200,EB:1412640000,FB:1416268800,GB:1421798400,HB:1425513600,IB:1429401600,JB:1432080000,KB:1437523200,LB:1441152000,MB:1444780800,NB:1449014400,OB:1453248000,PB:1456963200,QB:1460592000,RB:1464134400,SB:1469059200,TB:1472601600,UB:1476230400,VB:1480550400,WB:1485302400,XB:1489017600,YB:1492560000,uB:1496707200,ZB:1500940800,vB:1504569600,aB:1508198400,bB:1512518400,cB:1516752000,dB:1520294400,eB:1523923200,fB:1527552000,gB:1532390400,hB:1536019200,iB:1539648000,jB:1543968000,kB:1548720000,f:1552348800,lB:1555977600,mB:1559606400,nB:1564444800,oB:1568073600,pB:1571702400,P:1575936000,Q:1580860800,R:1586304000,S:1589846400,T:1594684800,U:1598313600,V:1601942400,W:1605571200,X:1611014400,Y:1614556800,Z:1618272000,a:1621987200,b:1626739200,c:1630368000,d:1632268800,e:1634601600,g:1637020800,h:1641340800,i:1643673600,j:1646092800,k:1648512000,l:1650931200,m:1653350400,n:1655769600,o:1659398400,p:1661817600,q:1664236800,r:1666656000,s:1669680000,D:1673308800,t:1675728000,xB:null,yB:null,GC:null}},E:{A:{I:0,u:0.008322,J:0.004656,E:0.004465,F:0.003974,G:0.003929,A:0.004425,B:0.004318,C:0.003801,K:0.023658,L:0.098575,H:0.023658,HC:0,zB:0.008692,IC:0.007886,JC:0.00456,KC:0.004283,LC:0.047316,"0B":0.007802,qB:0.007886,rB:0.031544,"1B":0.177435,MC:0.252352,NC:0.03943,"2B":0.03943,"3B":0.090689,"4B":0.181378,"5B":1.13558,sB:0.126176,"6B":0.410072,"7B":0.808315,"8B":0.055202,"9B":0,OC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","HC","zB","I","u","IC","J","JC","E","KC","F","G","LC","A","0B","B","qB","C","rB","K","1B","L","MC","H","NC","2B","3B","4B","5B","sB","6B","7B","8B","9B","OC",""],E:"Safari",F:{HC:1205798400,zB:1226534400,I:1244419200,u:1275868800,IC:1311120000,J:1343174400,JC:1382400000,E:1382400000,KC:1410998400,F:1413417600,G:1443657600,LC:1458518400,A:1474329600,"0B":1490572800,B:1505779200,qB:1522281600,C:1537142400,rB:1553472000,K:1568851200,"1B":1585008000,L:1600214400,MC:1619395200,H:1632096000,NC:1635292800,"2B":1639353600,"3B":1647216000,"4B":1652745600,"5B":1658275200,sB:1662940800,"6B":1666569600,"7B":1670889600,"8B":1674432000,"9B":null,OC:null}},F:{A:{"0":0.006702,"1":0.006015,"2":0.005595,"3":0.004393,"4":0.007886,"5":0.004879,"6":0.004879,"7":0.003943,"8":0.005152,"9":0.005014,G:0.0082,B:0.016581,C:0.004317,H:0.00685,M:0.00685,N:0.00685,O:0.005014,v:0.006015,w:0.004879,x:0.006597,y:0.006597,z:0.013434,AB:0.009758,BB:0.004879,CB:0.007886,DB:0.004283,EB:0.004367,FB:0.004534,GB:0.007886,HB:0.004227,IB:0.004418,JB:0.004161,KB:0.004227,LB:0.004725,MB:0.011829,NB:0.008942,OB:0.004707,PB:0.004827,QB:0.004707,RB:0.004707,SB:0.004326,TB:0.008922,UB:0.014349,VB:0.004425,WB:0.00472,XB:0.004425,YB:0.004425,ZB:0.00472,aB:0.004532,bB:0.004566,cB:0.02283,dB:0.00867,eB:0.004656,fB:0.004642,gB:0.003929,hB:0.00944,iB:0.004293,jB:0.003929,kB:0.004298,f:0.096692,lB:0.004201,mB:0.004141,nB:0.004257,oB:0.003939,pB:0.008236,P:0.003855,Q:0.003939,R:0.008514,wB:0.003939,S:0.003939,T:0.003702,U:0.007886,V:0.003855,W:0.003855,X:0.003929,Y:0.003943,Z:0.011703,a:0.007546,b:0.011829,c:0.496818,d:0.690025,e:0,PC:0.00685,QC:0,RC:0.008392,SC:0.004706,qB:0.006229,AC:0.004879,TC:0.008786,rB:0.00472},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","G","PC","QC","RC","SC","B","qB","AC","TC","C","rB","H","M","N","O","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","f","lB","mB","nB","oB","pB","P","Q","R","wB","S","T","U","V","W","X","Y","Z","a","b","c","d","e","","",""],E:"Opera",F:{"0":1409616000,"1":1413331200,"2":1417132800,"3":1422316800,"4":1425945600,"5":1430179200,"6":1433808000,"7":1438646400,"8":1442448000,"9":1445904000,G:1150761600,PC:1223424000,QC:1251763200,RC:1267488000,SC:1277942400,B:1292457600,qB:1302566400,AC:1309219200,TC:1323129600,C:1323129600,rB:1352073600,H:1372723200,M:1377561600,N:1381104000,O:1386288000,v:1390867200,w:1393891200,x:1399334400,y:1401753600,z:1405987200,AB:1449100800,BB:1454371200,CB:1457308800,DB:1462320000,EB:1465344000,FB:1470096000,GB:1474329600,HB:1477267200,IB:1481587200,JB:1486425600,KB:1490054400,LB:1494374400,MB:1498003200,NB:1502236800,OB:1506470400,PB:1510099200,QB:1515024000,RB:1517961600,SB:1521676800,TB:1525910400,UB:1530144000,VB:1534982400,WB:1537833600,XB:1543363200,YB:1548201600,ZB:1554768000,aB:1561593600,bB:1566259200,cB:1570406400,dB:1573689600,eB:1578441600,fB:1583971200,gB:1587513600,hB:1592956800,iB:1595894400,jB:1600128000,kB:1603238400,f:1613520000,lB:1612224000,mB:1616544000,nB:1619568000,oB:1623715200,pB:1627948800,P:1631577600,Q:1633392000,R:1635984000,wB:1638403200,S:1642550400,T:1644969600,U:1647993600,V:1650412800,W:1652745600,X:1654646400,Y:1657152000,Z:1660780800,a:1663113600,b:1668816000,c:1668643200,d:1671062400,e:1675209600},D:{G:"o",B:"o",C:"o",PC:"o",QC:"o",RC:"o",SC:"o",qB:"o",AC:"o",TC:"o",rB:"o"}},G:{A:{F:0,zB:0,UC:0,BC:0.00157571,VC:0.00315142,WC:0.00315142,XC:0.0126057,YC:0.00630284,ZC:0.0157571,aC:0.0583013,bC:0.00630284,cC:0.1103,dC:0.0267871,eC:0.0252114,fC:0.0220599,gC:0.395503,hC:0.0330899,iC:0.0236357,jC:0.0346656,kC:0.105573,lC:0.288355,mC:0.567256,nC:0.157571,"2B":0.207994,"3B":0.250538,"4B":0.472713,"5B":1.89085,sB:1.7837,"6B":4.8784,"7B":3.17191,"8B":0.237932,"9B":0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","zB","UC","BC","VC","WC","XC","F","YC","ZC","aC","bC","cC","dC","eC","fC","gC","hC","iC","jC","kC","lC","mC","nC","2B","3B","4B","5B","sB","6B","7B","8B","9B","",""],E:"Safari on iOS",F:{zB:1270252800,UC:1283904000,BC:1299628800,VC:1331078400,WC:1359331200,XC:1394409600,F:1410912000,YC:1413763200,ZC:1442361600,aC:1458518400,bC:1473724800,cC:1490572800,dC:1505779200,eC:1522281600,fC:1537142400,gC:1553472000,hC:1568851200,iC:1572220800,jC:1580169600,kC:1585008000,lC:1600214400,mC:1619395200,nC:1632096000,"2B":1639353600,"3B":1647216000,"4B":1652659200,"5B":1658275200,sB:1662940800,"6B":1666569600,"7B":1670889600,"8B":1674432000,"9B":null}},H:{A:{oC:1.01498},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","oC","","",""],E:"Opera Mini",F:{oC:1426464000}},I:{A:{tB:0,I:0.0286543,D:0,pC:0,qC:0,rC:0,sC:0.0764114,BC:0.0764114,tC:0,uC:0.315197},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pC","qC","rC","tB","I","sC","BC","tC","uC","D","","",""],E:"Android Browser",F:{pC:1256515200,qC:1274313600,rC:1291593600,tB:1298332800,I:1318896000,sC:1341792000,BC:1374624000,tC:1386547200,uC:1401667200,D:1673568000}},J:{A:{E:0,A:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","E","A","","",""],E:"Blackberry Browser",F:{E:1325376000,A:1359504000}},K:{A:{A:0,B:0,C:0,f:0.0111391,qB:0,AC:0,rB:0},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","qB","AC","C","rB","f","","",""],E:"Opera Mobile",F:{A:1287100800,B:1300752000,qB:1314835200,AC:1318291200,C:1330300800,rB:1349740800,f:1673827200},D:{f:"webkit"}},L:{A:{D:41.3632},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","","",""],E:"Chrome for Android",F:{D:1673568000}},M:{A:{D:0.30285},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","","",""],E:"Firefox for Android",F:{D:1673913600}},N:{A:{A:0.0115934,B:0.022664},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","","",""],E:"IE Mobile",F:{A:1340150400,B:1353456000}},O:{A:{vC:0.890379},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","vC","","",""],E:"UC Browser for Android",F:{vC:1634688000},D:{vC:"webkit"}},P:{A:{I:0.147734,wC:0.0103543,xC:0.010304,yC:0.0527621,zC:0.0103584,"0C":0.0104443,"0B":0.0105043,"1C":0.0211049,"2C":0.0105524,"3C":0.0316573,"4C":0.0316573,"5C":0.0211049,sB:0.073867,"6C":0.0844194,"7C":0.126629,"8C":2.09993},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","I","wC","xC","yC","zC","0C","0B","1C","2C","3C","4C","5C","sB","6C","7C","8C","","",""],E:"Samsung Internet",F:{I:1461024000,wC:1481846400,xC:1509408000,yC:1528329600,zC:1546128000,"0C":1554163200,"0B":1567900800,"1C":1582588800,"2C":1593475200,"3C":1605657600,"4C":1618531200,"5C":1629072000,sB:1640736000,"6C":1651708800,"7C":1659657600,"8C":1667260800}},Q:{A:{"1B":0.145368},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","1B","","",""],E:"QQ Browser",F:{"1B":1663718400}},R:{A:{"9C":0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","9C","","",""],E:"Baidu Browser",F:{"9C":1663027200}},S:{A:{AD:0.066627},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","AD","","",""],E:"KaiOS Browser",F:{AD:1527811200}}};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browserVersions.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browserVersions.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports={"0":"24","1":"25","2":"26","3":"27","4":"28","5":"29","6":"30","7":"31","8":"32","9":"33",A:"10",B:"11",C:"12",D:"109",E:"7",F:"8",G:"9",H:"15",I:"4",J:"6",K:"13",L:"14",M:"16",N:"17",O:"18",P:"79",Q:"80",R:"81",S:"83",T:"84",U:"85",V:"86",W:"87",X:"88",Y:"89",Z:"90",a:"91",b:"92",c:"93",d:"94",e:"95",f:"73",g:"96",h:"97",i:"98",j:"99",k:"100",l:"101",m:"102",n:"103",o:"104",p:"105",q:"106",r:"107",s:"108",t:"110",u:"5",v:"19",w:"20",x:"21",y:"22",z:"23",AB:"34",BB:"35",CB:"36",DB:"37",EB:"38",FB:"39",GB:"40",HB:"41",IB:"42",JB:"43",KB:"44",LB:"45",MB:"46",NB:"47",OB:"48",PB:"49",QB:"50",RB:"51",SB:"52",TB:"53",UB:"54",VB:"55",WB:"56",XB:"57",YB:"58",ZB:"60",aB:"62",bB:"63",cB:"64",dB:"65",eB:"66",fB:"67",gB:"68",hB:"69",iB:"70",jB:"71",kB:"72",lB:"74",mB:"75",nB:"76",oB:"77",pB:"78",qB:"11.1",rB:"12.1",sB:"16.0",tB:"3",uB:"59",vB:"61",wB:"82",xB:"111",yB:"112",zB:"3.2","0B":"10.1","1B":"13.1","2B":"15.2-15.3","3B":"15.4","4B":"15.5","5B":"15.6","6B":"16.1","7B":"16.2","8B":"16.3","9B":"16.4",AC:"11.5",BC:"4.2-4.3",CC:"5.5",DC:"2",EC:"3.5",FC:"3.6",GC:"113",HC:"3.1",IC:"5.1",JC:"6.1",KC:"7.1",LC:"9.1",MC:"14.1",NC:"15.1",OC:"TP",PC:"9.5-9.6",QC:"10.0-10.1",RC:"10.5",SC:"10.6",TC:"11.6",UC:"4.0-4.1",VC:"5.0-5.1",WC:"6.0-6.1",XC:"7.0-7.1",YC:"8.1-8.4",ZC:"9.0-9.2",aC:"9.3",bC:"10.0-10.2",cC:"10.3",dC:"11.0-11.2",eC:"11.3-11.4",fC:"12.0-12.1",gC:"12.2-12.5",hC:"13.0-13.1",iC:"13.2",jC:"13.3",kC:"13.4-13.7",lC:"14.0-14.4",mC:"14.5-14.8",nC:"15.0-15.1",oC:"all",pC:"2.1",qC:"2.2",rC:"2.3",sC:"4.1",tC:"4.4",uC:"4.4.3-4.4.4",vC:"13.4",wC:"5.0-5.4",xC:"6.2-6.4",yC:"7.2-7.4",zC:"8.2","0C":"9.2","1C":"11.1-11.2","2C":"12.0","3C":"13.0","4C":"14.0","5C":"15.0","6C":"17.0","7C":"18.0","8C":"19.0","9C":"13.18",AD:"2.5"};


/***/ }),

/***/ "./node_modules/caniuse-lite/data/browsers.js":
/*!****************************************************!*\
  !*** ./node_modules/caniuse-lite/data/browsers.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports={A:"ie",B:"edge",C:"firefox",D:"chrome",E:"safari",F:"opera",G:"ios_saf",H:"op_mini",I:"android",J:"bb",K:"op_mob",L:"and_chr",M:"and_ff",N:"ie_mob",O:"and_uc",P:"samsung",Q:"and_qq",R:"baidu",S:"kaios"};


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/agents.js":
/*!***********************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/agents.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const browsers = (__webpack_require__(/*! ./browsers */ "./node_modules/caniuse-lite/dist/unpacker/browsers.js").browsers)
const versions = (__webpack_require__(/*! ./browserVersions */ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js").browserVersions)
const agentsData = __webpack_require__(/*! ../../data/agents */ "./node_modules/caniuse-lite/data/agents.js")

function unpackBrowserVersions(versionsData) {
  return Object.keys(versionsData).reduce((usage, version) => {
    usage[versions[version]] = versionsData[version]
    return usage
  }, {})
}

module.exports.agents = Object.keys(agentsData).reduce((map, key) => {
  let versionsData = agentsData[key]
  map[browsers[key]] = Object.keys(versionsData).reduce((data, entry) => {
    if (entry === 'A') {
      data.usage_global = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'C') {
      data.versions = versionsData[entry].reduce((list, version) => {
        if (version === '') {
          list.push(null)
        } else {
          list.push(versions[version])
        }
        return list
      }, [])
    } else if (entry === 'D') {
      data.prefix_exceptions = unpackBrowserVersions(versionsData[entry])
    } else if (entry === 'E') {
      data.browser = versionsData[entry]
    } else if (entry === 'F') {
      data.release_date = Object.keys(versionsData[entry]).reduce(
        (map2, key2) => {
          map2[versions[key2]] = versionsData[entry][key2]
          return map2
        },
        {}
      )
    } else {
      // entry is B
      data.prefix = versionsData[entry]
    }
    return data
  }, {})
  return map
}, {})


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browserVersions.js":
/*!********************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browserVersions.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.browserVersions = __webpack_require__(/*! ../../data/browserVersions */ "./node_modules/caniuse-lite/data/browserVersions.js")


/***/ }),

/***/ "./node_modules/caniuse-lite/dist/unpacker/browsers.js":
/*!*************************************************************!*\
  !*** ./node_modules/caniuse-lite/dist/unpacker/browsers.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports.browsers = __webpack_require__(/*! ../../data/browsers */ "./node_modules/caniuse-lite/data/browsers.js")


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  font-family: helvetica, sans-serif;\n}\n\nheader {\n  height: 8vh;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.87);\n}\n\n.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.sticky > * {\n  transform: translateY(0);\n}\n\n.sticky > .content {\n  padding-top: 7vh;\n}\n\n.locationWeather {\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  font-weight: bolder;\n  font-style: italic;\n  margin: 1rem;\n}\n\n.searchBar {\n  display: flex;\n  align-items: center;\n  margin: 1rem;\n  background-color: #f2f2f2;\n  border-radius: 4px;\n  padding: 0 0 0 5px;\n  max-width: 500px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.searchBar input[type=text] {\n  flex: 1;\n  border: none;\n  padding: 10px;\n  font-size: 1rem;\n  color: #212121;\n  background-color: transparent;\n}\n\n.searchBar input[type=text]::-moz-placeholder {\n  color: #7b7b7b;\n}\n\n.searchBar input[type=text]::placeholder {\n  color: #7b7b7b;\n}\n\n.searchBar input[type=text]:focus {\n  outline: none;\n}\n\n.searchBar .search {\n  background-color: #dcf2ff;\n  color: #fff;\n  border: none;\n  padding: 10px 15px;\n  border-radius: 10px;\n  margin-left: 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.searchBar .search svg {\n  fill: #dcf2ff;\n  width: 20px;\n  height: 20px;\n}\n\n.searchBar .search:hover {\n  background-color: #a9dfff;\n}\n\n.searchBar .search:hover svg {\n  fill: #a9dfff;\n}\n\n.searchBar .search:active {\n  background-color: #76ccff;\n}\n\n.searchBar .search:active svg {\n  fill: #76ccff;\n}\n\n.content {\n  display: flex;\n  align-items: center;\n  background: #eff8ff;\n  box-shadow: 50px 50px 65px 0px #fff9e1 inset;\n  height: 92vh;\n}\n\n.lds-ripple {\n  display: none;\n  position: relative;\n  margin: 0 auto;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #ff7300;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n  4.9% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n  5% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n.weather {\n  padding: 1rem;\n  color: black;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.title {\n  text-transform: uppercase;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n\n.currentWeather {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  flex-wrap: wrap;\n}\n.currentWeather .weatherMetrics {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.currentWeather .weatherMetrics .temperature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-left: 1rem;\n}\n.currentWeather .weatherMetrics .temperature .degrees {\n  font-size: 2.5rem;\n  font-weight: bold;\n}\n.currentWeather .weatherMetrics .temperature .weatherDescription {\n  text-transform: uppercase;\n  font-size: 0.6rem;\n  font-style: italic;\n}\n.currentWeather .weatherMetrics .weatherIcon {\n  width: 150px;\n  height: 150px;\n  margin-right: 1rem;\n}\n.currentWeather .metrics {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n.currentWeather .metricTitle {\n  font-weight: bold;\n  font-style: italic;\n  text-transform: uppercase;\n}\n.currentWeather .metricsIcon {\n  width: 70px;\n  height: 70px;\n}\n.currentWeather .weatherMetric {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.miscellaneous {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  margin-bottom: 1rem;\n}\n.miscellaneous .miscellaneousMetrics {\n  min-width: 250px;\n}\n.miscellaneous .miscellaneousMetrics .misc {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid rgb(209, 209, 209);\n  padding-bottom: 0.1rem;\n  margin-bottom: 0.3rem;\n}\n.miscellaneous .miscellaneousMetrics .misc .miscIcon {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n.miscellaneous .miscellaneousMetrics .misc .miscText {\n  min-width: 60%;\n  font-weight: bold;\n  font-style: italic;\n}\n.miscellaneous .miscellaneousMetrics .misc .miscMetric {\n  font-style: italic;\n}\n.miscellaneous .miscellaneousMetrics .sunset {\n  display: flex;\n  align-items: center;\n}\n.miscellaneous .miscellaneousMetrics .sunset .miscIcon {\n  height: 30px;\n  width: 30px;\n  margin-right: 5px;\n}\n.miscellaneous .miscellaneousMetrics .sunset .miscText {\n  min-width: 60%;\n  font-weight: bold;\n  font-style: italic;\n}\n.miscellaneous .miscellaneousMetrics .sunset .miscMetric {\n  font-style: italic;\n}\n\n.environmental {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  margin-bottom: 1rem;\n}\n.environmental .uvData {\n  padding: 0.2rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.environmental .uvData .uv {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-style: italic;\n}\n.environmental .uvData .uv img {\n  width: 60px;\n  height: 60px;\n  margin-right: 5px;\n}\n.environmental .uvData .uvMetric {\n  margin: 1rem;\n  border: 2px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  font-weight: bolder;\n}\n.environmental .uvData .maxExposure {\n  font-size: 0.6rem;\n}\n.environmental .airQuality {\n  padding: 0.2rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.environmental .airQuality .aq {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n  font-style: italic;\n  padding-left: 0.5rem;\n}\n.environmental .airQuality .aq img {\n  width: 40px;\n  height: 40px;\n  margin-right: 5px;\n}\n.environmental .airQuality .aqMetric {\n  margin: 1rem;\n  border: 2px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  font-weight: bolder;\n}\n\n.mapWrapper {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  height: 220px;\n  width: 200px;\n}\n\n#map {\n  height: 180px;\n  width: 200px;\n  border-radius: 2px;\n}\n\n.forecast {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n}\n.forecast .forecastMetrics {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.forecast .forecastDay {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n  margin: 0 1rem 1rem 0;\n  width: 100px;\n}\n.forecast .forecastDate {\n  font-weight: bolder;\n  font-size: 1.2rem;\n}\n.forecast .forecastData {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bolder;\n}\n.forecast .forecastData .forecastTemp {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.forecast .forecastData .forecastTemp .forecastDegrees {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n.forecast .forecastData .forecastTemp .forecastDescription {\n  text-transform: uppercase;\n  font-size: 0.5rem;\n  font-style: italic;\n}\n.forecast .forecastData .forecastIcon {\n  width: 60px;\n  height: 60px;\n}\n.forecast .forecastTitle {\n  font-weight: bold;\n  font-style: italic;\n  text-transform: uppercase;\n}\n\n.countryInfo {\n  padding: 1rem;\n  margin: 1rem;\n  background-color: rgba(255, 255, 255, 0.87);\n  border-radius: 1px;\n  box-shadow: 0 0 2px rgba(192, 225, 255, 0.6), 0 0 2px rgba(115, 185, 255, 0.4), 0 0 2px rgba(0, 185, 241, 0.2), inset 0 0 2px rgba(212, 127, 0, 0.1), inset 0 0 2px rgba(0, 149, 255, 0.2);\n  width: 100%;\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./styles/partials/_reset.scss","webpack://./styles/style.css","webpack://./styles/style.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACEF;;ADAA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;ACGF;;ADDA;EACE,cAAA;ACIF;;ADFA;;EAEE,gBAAA;ACKF;;ADHA;;EAEE,YAAA;ACMF;;ADJA;;;;EAIE,WAAA;EACA,aAAA;ACOF;;ADLA;EACE,yBAAA;EACA,iBAAA;ACQF;;ACjHA;EACE,kCALa;ADyHf;;AC/GA;EACE,WAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;ADkHF;;AC/GA;EACE,eAAA;EACA,MAAA;EACA,WAAA;ADkHF;;AC/GA;EACE,wBAAA;ADkHF;;AC/GA;EACE,gBAAA;ADkHF;;AC/GA;EACE,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;ADkHF;;AC/GA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,0CAAA;ADkHF;;AC/GA;EACE,OAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,cAAA;EACA,6BAAA;ADkHF;;AC/GA;EACE,cAAA;ADkHF;;AC/GA;EACE,cAAA;ADkHF;;AC/GA;EACE,aAAA;ADkHF;;AC/GA;EACE,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADkHF;;AC/GA;EACE,aAAA;EACA,WAAA;EACA,YAAA;ADkHF;;AC/GA;EACE,yBAAA;ADkHF;;AC/GA;EACE,aAAA;ADkHF;;AC/GA;EACE,yBAAA;ADkHF;;AC/GA;EACE,aAAA;ADkHF;;AC7GA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,4CAAA;EACA,YAAA;ADgHF;;AC3GA;EACE,aAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;AD8GF;;AC3GA;EACE,kBAAA;EACA,yBAAA;EACA,UAAA;EACA,kBAAA;EACA,8DAAA;AD8GF;;AC3GA;EACE,sBAAA;AD8GF;;AC3GA;EACE;IACE,SAAA;IACA,UAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;ED8GF;EC5GA;IACE,SAAA;IACA,UAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;ED8GF;EC5GA;IACE,SAAA;IACA,UAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;ED8GF;EC5GA;IACE,QAAA;IACA,SAAA;IACA,WAAA;IACA,YAAA;IACA,UAAA;ED8GF;AACF;ACzGA;EACE,aAAA;EACA,YA7Ka;EA8Kb,aAAA;EACA,uBAAA;EACA,eAAA;AD2GF;;ACxGA;EACE,yBAAA;EACA,iBAAA;EACA,mBAAA;AD2GF;;ACtGA;EAtME,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAoMA,eAAA;AD6GF;AC3GE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AD6GJ;AC3GI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,iBAAA;AD6GN;AC3GM;EACE,iBAAA;EACA,iBAAA;AD6GR;AC1GM;EACE,yBAAA;EACA,iBAAA;EACA,kBAAA;AD4GR;ACxGI;EACE,YAAA;EACA,aAAA;EACA,kBAAA;AD0GN;ACtGE;EA1OA,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAwOE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,sBAAA;EACA,oBAAA;AD4GJ;ACzGE;EACE,iBAAA;EACA,kBAAA;EACA,yBAAA;AD2GJ;ACxGE;EACE,WAAA;EACA,YAAA;AD0GJ;ACvGE;EACE,iBAAA;EACA,iBAAA;ADyGJ;;ACnGA;EAtQE,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAoQA,mBAAA;AD0GF;ACxGE;EACE,gBAAA;AD0GJ;ACxGI;EACE,aAAA;EACA,mBAAA;EACA,2CAAA;EACA,sBAAA;EACA,qBAAA;AD0GN;ACxGM;EACE,YAAA;EACA,WAAA;EACA,iBAAA;AD0GR;ACvGM;EACE,cAAA;EACA,iBAAA;EACA,kBAAA;ADyGR;ACtGM;EACE,kBAAA;ADwGR;ACpGI;EACE,aAAA;EACA,mBAAA;ADsGN;ACpGM;EACE,YAAA;EACA,WAAA;EACA,iBAAA;ADsGR;ACnGM;EACE,cAAA;EACA,iBAAA;EACA,kBAAA;ADqGR;AClGM;EACE,kBAAA;ADoGR;;AC9FA;EA5TE,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EA0TA,mBAAA;ADqGF;ACnGE;EACE,eAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAGA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;ADmGJ;ACjGI;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;ADmGN;ACjGM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;ADmGR;AC/FI;EACE,YAAA;EACA,WAAA;EACA,0LAAA;EAIA,oBAAA;EACA,kBAAA;EACA,mBAAA;AD8FN;AC3FI;EACE,iBAAA;AD6FN;ACzFE;EACE,eAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAGA,aAAA;EACA,mBAAA;EACA,sBAAA;ADyFJ;ACvFI;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;ADyFN;ACvFM;EACE,WAAA;EACA,YAAA;EACA,iBAAA;ADyFR;ACrFI;EACE,YAAA;EACA,WAAA;EACA,0LAAA;EAIA,oBAAA;EACA,kBAAA;EACA,mBAAA;ADoFN;;AC7EA;EAnZE,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAiZA,aAAA;EACA,YAAA;ADoFF;;ACjFA;EACE,aAAA;EACA,YAAA;EACA,kBAAA;ADoFF;;AC/EA;EAjaE,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;ADofF;ACpFE;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,eAAA;ADsFJ;ACnFE;EA3aA,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EAyaE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,sBAAA;EACA,aAAA;EACA,qBAAA;EACA,YAAA;ADyFJ;ACtFE;EACE,mBAAA;EACA,iBAAA;ADwFJ;ACrFE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;ADuFJ;ACrFI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;ADuFN;ACrFM;EACE,iBAAA;EACA,iBAAA;ADuFR;ACpFM;EACE,yBAAA;EACA,iBAAA;EACA,kBAAA;ADsFR;AClFI;EACE,WAAA;EACA,YAAA;ADoFN;AChFE;EACE,iBAAA;EACA,kBAAA;EACA,yBAAA;ADkFJ;;AC9EA;EAheE,aAAA;EACA,YAAA;EACA,2CAAA;EACA,kBAAA;EACA,0LAAA;EA8dA,WAAA;ADqFF,CAAA,oCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/electron-to-chromium/versions.js":
/*!*******************************************************!*\
  !*** ./node_modules/electron-to-chromium/versions.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {
	"0.20": "39",
	"0.21": "41",
	"0.22": "41",
	"0.23": "41",
	"0.24": "41",
	"0.25": "42",
	"0.26": "42",
	"0.27": "43",
	"0.28": "43",
	"0.29": "43",
	"0.30": "44",
	"0.31": "45",
	"0.32": "45",
	"0.33": "45",
	"0.34": "45",
	"0.35": "45",
	"0.36": "47",
	"0.37": "49",
	"1.0": "49",
	"1.1": "50",
	"1.2": "51",
	"1.3": "52",
	"1.4": "53",
	"1.5": "54",
	"1.6": "56",
	"1.7": "58",
	"1.8": "59",
	"2.0": "61",
	"2.1": "61",
	"3.0": "66",
	"3.1": "66",
	"4.0": "69",
	"4.1": "69",
	"4.2": "69",
	"5.0": "73",
	"6.0": "76",
	"6.1": "76",
	"7.0": "78",
	"7.1": "78",
	"7.2": "78",
	"7.3": "78",
	"8.0": "80",
	"8.1": "80",
	"8.2": "80",
	"8.3": "80",
	"8.4": "80",
	"8.5": "80",
	"9.0": "83",
	"9.1": "83",
	"9.2": "83",
	"9.3": "83",
	"9.4": "83",
	"10.0": "85",
	"10.1": "85",
	"10.2": "85",
	"10.3": "85",
	"10.4": "85",
	"11.0": "87",
	"11.1": "87",
	"11.2": "87",
	"11.3": "87",
	"11.4": "87",
	"11.5": "87",
	"12.0": "89",
	"12.1": "89",
	"12.2": "89",
	"13.0": "91",
	"13.1": "91",
	"13.2": "91",
	"13.3": "91",
	"13.4": "91",
	"13.5": "91",
	"13.6": "91",
	"14.0": "93",
	"14.1": "93",
	"14.2": "93",
	"15.0": "94",
	"15.1": "94",
	"15.2": "94",
	"15.3": "94",
	"15.4": "94",
	"15.5": "94",
	"16.0": "96",
	"16.1": "96",
	"16.2": "96",
	"17.0": "98",
	"17.1": "98",
	"17.2": "98",
	"17.3": "98",
	"17.4": "98",
	"18.0": "100",
	"18.1": "100",
	"18.2": "100",
	"18.3": "100",
	"19.0": "102",
	"19.1": "102",
	"20.0": "104",
	"20.1": "104",
	"20.2": "104",
	"20.3": "104",
	"21.0": "106",
	"21.1": "106",
	"21.2": "106",
	"21.3": "106",
	"21.4": "106",
	"22.0": "108",
	"22.1": "108",
	"22.2": "108",
	"22.3": "108",
	"23.0": "110",
	"23.1": "110",
	"24.0": "111"
};

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "?3465":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/node-releases/data/processed/envs.json":
/*!*************************************************************!*\
  !*** ./node_modules/node-releases/data/processed/envs.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false}]');

/***/ }),

/***/ "./node_modules/node-releases/data/release-schedule/release-schedule.json":
/*!********************************************************************************!*\
  !*** ./node_modules/node-releases/data/release-schedule/release-schedule.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":""}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentWeather */ "./src/currentWeather.js");
/* harmony import */ var _environmental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environmental */ "./src/environmental.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");
/* harmony import */ var _miscellaneous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous */ "./src/miscellaneous.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




// import { showMap } from "./map";

var key = "629531abca22eb8266b74fa0de195aec";
var searchButton = document.querySelector(".search");
var searchInput = document.querySelector(".searchInput");
var loader = document.querySelector(".lds-ripple");
var content = document.querySelector(".content");
var locationWeather = document.querySelector(".locationWeather");
var cityName = "Denia, ES";
function fetchData() {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data, myHeaders, now, isoDateTime, requestOptions, response1, data1, latitude, longitude, response2, currentWeather, response3, forecast, response4, airPollution, response5, uvData, location;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = [];
          content.style.display = "none";
          loader.style.display = "block";
          myHeaders = new Headers();
          myHeaders.append("x-access-token", "openuv-rxv6rlf4ce9ck-io");
          myHeaders.append("Content-Type", "application/json");
          now = new Date();
          isoDateTime = now.toISOString();
          requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };
          _context.prev = 9;
          _context.next = 12;
          return fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(cityName, "&limit=1&appid=").concat(key));
        case 12:
          response1 = _context.sent;
          _context.next = 15;
          return response1.json();
        case 15:
          data1 = _context.sent;
          latitude = data1[0].lat;
          longitude = data1[0].lon;
          _context.next = 20;
          return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(key, "&units=metric"));
        case 20:
          response2 = _context.sent;
          _context.next = 23;
          return response2.json();
        case 23:
          currentWeather = _context.sent;
          data.push(currentWeather);
          _context.next = 27;
          return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(key, "&units=metric"));
        case 27:
          response3 = _context.sent;
          _context.next = 30;
          return response3.json();
        case 30:
          forecast = _context.sent;
          data.push(forecast);
          _context.next = 34;
          return fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(key, "\n    "));
        case 34:
          response4 = _context.sent;
          _context.next = 37;
          return response4.json();
        case 37:
          airPollution = _context.sent;
          data.push(airPollution);
          _context.next = 41;
          return fetch("https://api.openuv.io/api/v1/uv?lat=".concat(latitude, "&lng=").concat(longitude, "&alt=0&dt=").concat(isoDateTime), requestOptions);
        case 41:
          response5 = _context.sent;
          _context.next = 44;
          return response5.json();
        case 44:
          uvData = _context.sent;
          data.push(uvData);
          loader.style.display = "none";
          content.style.display = "grid";

          // Create a new object with latitude and longitude to return alongside other fetched data
          location = {
            latitude: latitude,
            longitude: longitude
          };
          return _context.abrupt("return", {
            data: data,
            location: location
          });
        case 52:
          _context.prev = 52;
          _context.t0 = _context["catch"](9);
          loader.style.display = "none";
          console.error(_context.t0);
          // Handle error gracefully and alert the user
          alert("Something went wrong. Please try again later.");
        case 57:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[9, 52]]);
  }));
  return _fetchData.apply(this, arguments);
}
function showData() {
  fetchData().then(function (_ref) {
    var data = _ref.data,
      location = _ref.location;
    // showMap(location);
    (0,_currentWeather__WEBPACK_IMPORTED_MODULE_1__.showWeather)(data);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_3__.showForecast)(data);
    (0,_miscellaneous__WEBPACK_IMPORTED_MODULE_4__.showMiscellaneous)(data);
    (0,_environmental__WEBPACK_IMPORTED_MODULE_2__.showEnvironmental)(data);
    locationWeather.innerHTML = "\uD83D\uDCCC ".concat(data[0].name, ", ").concat(data[0].sys.country, " | ").concat(Math.round(data[0].main.temp), "\xB0c");
  })["catch"](function (error) {
    console.error(error);
  });
}
showData();
setInterval(function () {
  showData();
}, 500000);
function handleSearch() {
  cityName = searchInput.value.trim();
  searchInput.value = "";
}
searchButton.addEventListener("click", function () {
  handleSearch();
  showData();
});
searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      handleSearch();
      showData();
    } else {
      return;
    }
  }
});
window.onscroll = function () {
  myFunction();
};
var header = document.querySelector("header");

// Get the offset position of the navbar
var sticky = header.offsetTop + header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map