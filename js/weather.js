function weatherSearch(zipCode, callback) {
  //TODO replace this byfetch
  callback(SampleWeatherResponse);
}

var SampleWeatherResponse = {
  coord: { lon: -118.4065, lat: 34.0901 },
  weather: [{ id: 721, main: "Haze", description: "haze", icon: "50d" }],
  base: "stations",
  main: {
    temp: 75.54,
    feels_like: 75.61,
    temp_min: 62.06,
    temp_max: 98.2,
    pressure: 1008,
    humidity: 60,
  },
  visibility: 10000,
  wind: { speed: 1.99, deg: 258, gust: 4 },
  clouds: { all: 1 },
  dt: 1622751021,
  sys: {
    type: 2,
    id: 2002107,
    country: "US",
    sunrise: 1622724166,
    sunset: 1622775676,
  },
  timezone: -25200,
  id: 0,
  name: "Beverly Hills",
  cod: 200,
};
