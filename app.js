// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//    a: {
//    	 demand: true,
//    	 alias: 'address',
//    	 describe: 'Address to fetch weather for',
//    	 string: true
//    }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//     	console.log(errorMessage);
//     } else {
//     	console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/51e75aca7a008ec7c34bb9530ec53ae8/45.0911599,-93.01124569999999',
	json: true
}, (error, response, body) =>{
    console.log(body.currently.temperature);
});



