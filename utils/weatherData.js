const request = require('request');

const openWeatherMap = {
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "555851795d12d674594ff62987dc9849"
}

const weatherData = (address, callback) => {
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address) + 
    "&APPID=" +
    openWeatherMap.SECRET_KEY;
    console.log(url);

    request({url, json: true}, (error, data) => {
        if(error) {
            callback(true, "Unable to fetch weather data, try again" + error);
        }
        callback(false, data?.body);
    })
}


module.exports = weatherData;