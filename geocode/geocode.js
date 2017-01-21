const request = require('request');

var geocodeAddress = (address, callback) => {
   var encodedAddress = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Google servers.');
		} else if (body.status === 'ZERO RESULTS') {
	       callback('Unable to find that address.');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address
			})
	    console.log(`Address: ${body.results[0].formatted_address}`);
	    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
	    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	   }
    });
};

module.exports.geocodeAddress = geocodeAddress;
