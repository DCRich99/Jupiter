// TODO WE NEED TO INTEGRATE getWeather(zipCode) INTO weatherSearch(zipCode, callback)
// After that it will connect with the UI (notice; we dont need to manipulate the dom here, we just need to call the api and execute the callback)

//*API key//
// var APIKey="a0aca8a89948154a4182dcecc780b513";

// var today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0');
// let yyyy = today.getFullYear();
// var today = mm + '/' + dd + '/' + yyyy;

//     //}

// function getWeather(zipCode) {
//     var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?='+ zipCode + "&APPID=" + APIKey;

//     $.ajax({
//         url:queryUrl,
//         method: "GET",
//     })
//     .then (function (response){
//         return response.json();
//         console.log(response);
//     }
//     )
//     .then (function (response){
//         callback (response);
//     });
// }
//  //Display weather results
// function displayWeather(event){
//     event.preventDefault();
//     if(searchCity.val().trim()!==""){
//         city=searchCity.val().trim();
//         currentWeather(city);
//     }
// }
// //*function linkActions() {
//     $(document).ready(function() {

//         $(searchButtonId).click(function () {
//           var input = $(searchInputId).val();

//           //we parse the input as int to see if its valid
//           //if (isValidUSZip(input)) {
//            // presentZip(input);
//          // } else {
//            // presentZipError();
//          // }
//         });
//         });

// $(document).on("click", ".historyEntry", function() {
//     console.log("clicked history item")
//     let thisElement = $(this);
//     getWeather(thisElement.text());
//     getWeather(zipCode)
// });

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
