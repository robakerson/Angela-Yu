const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req,res){


<<<<<<< HEAD
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Cedar Rapids&appid=0a7bc15e542f8a191948edeaf6aba125"

  https.get(url, function(response){
    console.log(response);
    response.on('data', function(data){
      const weatherData= JSON.parse(data);
      const temp = weatherData.main.temp;

      console.log(temp);
    });
=======
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Cedar Rapids&appid=3d77dd0cc05f68b5694ce8afe3652713"
  https.get(url, function(response){
    console.log(response);
>>>>>>> 6b72e64038d479bae0be99753a5517803f98463f
  });

  res.send('server is up and running');
})

app.listen(3000, function(){
  console.log('the server is running on port 3000');
})
