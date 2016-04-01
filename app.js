var weather = require('./weather.js');
var location = require('./location.js');

weather(function (currentWeather){
  console.log(currentWeather);
});

location(function(location){

  if(!location){
    console.log('Could not find location');
    return;
  }

  console.log('City: ' + location.city);
  console.log('Long/Lat: ' + location.loc);
})
