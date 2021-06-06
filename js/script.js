// GLOBAL
var homeScreenId = "#home-screen";
var resultsScreenId = "#results-screen";

var searchInputId = "#search-input";
var searchButtonId = "#search-button";
var homeButtonId = "#home-button";
var randomButtonId = "#random-button";
var zipErrorId = "#zip-error";
var currentDateId = "#current-date";
var currentZipId = "#current-zip";
var currentTempId = "#current-temp";
var currentHumidityId = "#current-humidity";
var currentDescriptionId = "#current-description";

var currentZip = undefined;
var currentWeather = undefined;
var currentGiphyResponse = undefined;
var currentGiphyItem = undefined;
var lastGiphyResults = undefined;

$(document).ready(function () {
  restorePersistedZipCode();
  linkActions();
  presentCurrenScreen();
});

///////////////
// OBSERVERS
function linkActions() {
  $(searchButtonId).click(function () {
    var input = $(searchInputId).val();
    //we parse the input as int to see if its valid
    if (isValidUSZip(input)) {
      presentZip(input);
    } else {
      presentZipError();
    }
  });

  $(homeButtonId).click(function () {
    newSearch();
  });

  $(randomButtonId).click(function () {
    displayRandomGifFromlastGiphyResults();
  });
}

///////////////
// NAVIGATION FUNCTIONS
// In here we only have navigation logic not DOM actions
function presentZip(zip) {
  preferedScreen = undefined;

  //TODO: check if we can obtain a weather result if so set it and save
  resolveMemeWeather(zip, function (weather, giphyItems) {
    currentZip = zip;
    currentWeather = weather;
    lastGiphyResults = giphyItems;
    displayRandomGifFromlastGiphyResults();
    saveZipCode(zip);
    presentCurrenScreen();
  });
}

function newSearch() {
  currentWeather = undefined;
  presentCurrenScreen();
}

// check if there's a currentZip then navigate to results
// ignore if there's a prefered screen
function presentCurrenScreen() {
  // we always present a giphy if its already set
  displayCurrentGiphy();

  // if the currentZip has been set before then we show the results
  if (currentWeather) {
    presentResults(currentWeather);
  } else {
    // else by default we present the home
    presentHome();
  }
}

///////////////
// DISPLAY FUNCTIONS
function displayRandomGifFromlastGiphyResults() {
  var randomIndex = parseInt(Math.random() * (lastGiphyResults.length - 1));
  currentGiphyItem = lastGiphyResults[randomIndex];
  displayCurrentGiphy();
}

// this functions helps to hide all screens
function resetScreens() {
  $(zipErrorId).hide();
  $(homeScreenId).hide();
  $(resultsScreenId).hide();
}

// display only the home
function presentHome() {
  resetScreens();
  $(homeScreenId).show();
  $(searchInputId).val(currentZip || "");
}

function presentZipError() {
  $(zipErrorId).show();
}

// display only the results
function presentResults() {
  resetScreens();
  $(resultsScreenId).show();

  $(currentDateId).text(moment().format("MM/DD/YYYY"));
  $(currentZipId).text(currentZip || "");
  $(currentDescriptionId).text(getCurrentWeatherDesc());
  $(currentTempId).text(getCurrentWeatherTemp() + "F");
  $(currentHumidityId).text(getCurrentWeatherHumidity() + "%");
}

function displayCurrentGiphy() {
  var url = getCurrentGifURL();
  if (url == undefined) {
    return;
  }
  setBackgroundImage(url);
}

///////////////
// HELPER FUNCTIONS
function restorePersistedZipCode() {
  currentZip = loadZipCode();
  if (currentZip == undefined) {
    return;
  }
  presentZip(currentZip);
}

function getCurrentWeatherDesc() {
  return (
    currentWeather &&
    currentWeather.weather &&
    currentWeather.weather[0] &&
    currentWeather.weather[0].description
  );
}

function getCurrentWeatherTemp() {
  return (
    currentWeather &&
    currentWeather.main &&
    currentWeather.main &&
    currentWeather.main.temp
  );
}

function getCurrentWeatherHumidity() {
  return (
    currentWeather &&
    currentWeather.main &&
    currentWeather.main &&
    currentWeather.main.humidity
  );
}
// this is a popular function that checks using `regular expressions` if the zip code is valid
function isValidUSZip(sZip) {
  return /^\d{5}(-\d{4})?$/.test(sZip);
}

function getCurrentGifURL() {
  return (
    currentGiphyItem &&
    currentGiphyItem.images &&
    currentGiphyItem.images.fixed_height &&
    currentGiphyItem.images.fixed_height.url
  );
}

function setBackgroundImage(image) {
  //this is equivalent to setting the CSS style like
  //background-image: url('https://media.giphy.com/media/oXpZ1sLkbCZ9jFhBMx/giphy.gif');
  //keep in mind the single quotes required by the url('link')
  $(document.body).css("background-image", "url('" + image + "')");
  $(document.body).css("background-size", "cover");
}
