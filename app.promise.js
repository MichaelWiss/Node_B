const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
  .options({
   a: {
   	 demand: true,
   	 alias: 'address',
   	 describe: 'Address to fetch weather for',
   	 string: true
   }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
   if (response.data.status === 'ZERO_RESULTS') {
       throw new Error('Unable to find that address.');
   }

   var lat = response.data.results[0].geometry.location.lat;
   var long = response.data.results[0].geometry.locatio.long;
   var weatherUrl = `https://api.darksky.net/forecast/51e75aca7a008ec7c34bb9530ec53ae8/${lat},${lng}`;
   console.log(response.data);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});






