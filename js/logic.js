function resolveMemeWeather(zipCode, callback) {
  weatherSearch(zipCode, function (weatherResponse) {
    var searchTerm =
      weatherResponse &&
      weatherResponse.weather &&
      weatherResponse.weather[0] &&
      weatherResponse.weather[0].description;

    giphySearch(searchTerm, function (giphyItems) {
      callback(weatherResponse, giphyItems);
    });
  });
}
