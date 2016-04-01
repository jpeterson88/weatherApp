var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle,WA&units=imperial&APPID=d109f10e18ddee1f41ca6c5d3b0699b6';

module.exports = function(callback){

  request({
    url: url,
    json: true
  }, function (error, response, body){
    if(error){
      callback('Unable to fetch weather.')
    }
    else{
      callback('It is ' + body.main.temp + ' degrees Fahrenheit in' + body.name)
    }
  });

}
