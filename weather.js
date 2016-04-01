var request = require('request');

module.exports = function(location, callback){
  var encLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encLocation
   + '&units=imperial&APPID=d109f10e18ddee1f41ca6c5d3b0699b6';

  request({
    url: url,
    json: true
  }, function (error, response, body){
    if(error){
      callback('Unable to fetch weather.')
    }
    else{
      //console.log(JSON.stringify(body));
      callback('It is ' + body.main.temp + ' degrees F in ' + body.name);
    }
  });

}
