jQuery(function() {
    $('#send').click(function() {
      var zip = $("#zipBox").val();
      if (zip !== '') {
        $.ajax({
          url:  "https://api.openweathermap.org/data/2.5/weather?q=" +
          zip +
          "&appid=3277741fcbafb61def09de3fc5eb0344",
        //   dataType: "jsonp",
          success: function(wallOfText) {
            var city = wallOfText.name;
            var fahrenheit = ((wallOfText.main.temp - 273.15) * 1.8 + 32).toFixed(1);
            var temperatureEl = $("<h5>");
            var cityEl = $("<h2>").addClass("card-title");
            cityEl.text(city)
            temperatureEl.text("Temperature: " + fahrenheit + " \xB0F");
            // $("#result").text(city);
            // $("#result").text(temperature)
            $("#result").append(cityEl);
            cityEl.append(temperatureEl);
        }
        });
      }
    });
  });