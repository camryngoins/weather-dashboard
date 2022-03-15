var searchButton = document.querySelector("#searchButton");
var searchCity = document.querySelector("#searchCity");
var cityName = document.querySelector("#cityName");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#windSpeed");
var uvIndex = document.querySelector("#uvIndex");

var apiKey = "1c402c82171a1708d60d6ea0950d1ece"

searchButton.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.value + "&appid=" + apiKey)
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

    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey)
    .then(function(response) {
      response.json().then(function(data) {
        var uvi = data.current.uvi
        uvIndex.innerHTML = uvi;
      })
    })



    cityName.innerHTML= name;
    temperature.innerHTML = temp;
    humidity.innerHTML = humid;
    windSpeed.innerHTML = wind;
    };







