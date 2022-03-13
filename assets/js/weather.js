
var formSubmitHandler = function(event) {
event.preventDefault();

};
// get current weather function
var getCurrentWeather = function(city) {
var apiKey = "1c402c82171a1708d60d6ea0950d1ece"
var queryUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey 

fetch(queryUrl)
.then(function(response) {
    response.json().then(function(data) {
        displayCurrentWeather(data, city);
    })
})
};
getCurrentWeather();
