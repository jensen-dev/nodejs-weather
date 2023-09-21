const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59a1004429e7cca8e26635eb60d119fa&query=' + latitude + ',' + longitude;

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            temperature = body.current.temperature,
            feelsLike = body.current.feelslike;
            callback(undefined, `The current temperature is ${temperature} degrees out. It feels like ${feelsLike} degrees`);
        }
    })
}

module.exports = forecast;