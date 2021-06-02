//*API key//
let apiKey = "d107326fbabd2ac9b6880e26ef4fe2bd";


var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;

//*function linkActions() {
    $(searchButtonId).click(function () {
      var input = $(searchInputId).val();
      //we parse the input as int to see if its valid
      if (isValidUSZip(input)) {
        presentZip(input);
      } else {
        presentZipError();
      }
    });
    //}

function getWeather(zipcode) {
    let queryUrl = 'https://api.openweathermap.org/data/2.5/weather?appidq&zip='+zipCode;
    fetch (url)
    .then (function (response){
        return response.json();
    }
    )
    .then (function (response){
        callback (response);
    });
}


$(document).on("click", ".historyEntry", function() {
    console.log("clicked history item")
    let thisElement = $(this);
    getWeather(thisElement.text());
});