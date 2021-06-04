//*API key//
var APIKey="a0aca8a89948154a4182dcecc780b513";



var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;


    //}

function getWeather(zipCode) {
    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?='+ zipCode + "&APPID=" + APIKey;
   
   
    $.ajax({
        url:queryUrl,
        method: "GET",
    })
    .then (function (response){
        return response.json();
        console.log(response);
    }
    )
    .then (function (response){
        callback (response);
    });
}
 //Display weather results
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
//*function linkActions() {
    $(document).ready(function() {
        
        $(searchButtonId).click(function () {
          var input = $(searchInputId).val();
         
          //we parse the input as int to see if its valid
          //if (isValidUSZip(input)) {
           // presentZip(input);
         // } else {
           // presentZipError();
         // }
        });
        });

$(document).on("click", ".historyEntry", function() {
    console.log("clicked history item")
    let thisElement = $(this);
    getWeather(thisElement.text());
    getWeather(zipCode)
});