const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
		url: `https://api.darksky.net/forecast/51e75aca7a008ec7c34bb9530ec53ae8/${lat},${lng}`,
		json: true
	}, (error, response, body) =>{
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else if (response.statusCode ===400) {
			callback('Unable to fetch weather.');
		}
	});
};

module.exports.getWeather = getWeather;