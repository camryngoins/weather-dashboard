var searchButton = document.querySelector("#searchButton");
var searchCity = document.querySelector("#searchCity");
var cityName = document.querySelector("#cityName");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#windSpeed");
var uvIndex = document.querySelector("#uvIndex");
var temp1 = document.querySelector("#temp1");
var humidity1 = document.querySelector("#humidity1");
var temp2 = document.querySelector("#temp2");
var humidity2 = document.querySelector("#humidity2");
var temp3 = document.querySelector("#temp3");
var humidity3 = document.querySelector("#humidity3");
var temp4 = document.querySelector("#temp4");
var humidity4 = document.querySelector("#humidity4");
var temp5 = document.querySelector("#temp5");
var humidity5 = document.querySelector("#humidity5");

var apiKey = "1c402c82171a1708d60d6ea0950d1ece"

searchButton.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.value + "&appid=" + apiKey + "&units=imperial")
    .then(function(response) {
    response.json().then(function(data) {
      displayWeather(data);
    })
  })
});

var displayWeather = function(data) {
  console.log(data)
    var name = data.name
    var temp = data.main.temp
    var humid = data.main.humidity
    var wind = data.wind.speed

    fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey)
    .then(function(response) {
      response.json().then(function(data) {
        uvIndex.innerHTML = data.current.uvi
        getNextFiveDays(data.daily);
      })
    })

    cityName.innerHTML= name;
    temperature.innerHTML = temp;
    humidity.innerHTML = humid;
    windSpeed.innerHTML = wind;
    };

    var getNextFiveDays = function(days) {
      console.log(days)
      temp1.innerHTML = days[0].temp.day
      humidity1.innerHTML = days[0].humidity
    }







