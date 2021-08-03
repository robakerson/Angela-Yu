const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req,res){


  const url = "https://api.openweathermap.org/data/2.5/weather?q=Cedar Rapids&appid=[key]"

  https.get(url, function(response){
    console.log(response);
    response.on('data', function(data){
      const weatherData= JSON.parse(data);
      const temp = weatherData.main.temp;

      console.log(temp);
    });
  });

  res.send('server is up and running');
})

app.listen(3000, function(){
  console.log('the server is running on port 3000');
})
