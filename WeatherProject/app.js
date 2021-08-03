const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req,res){


  const url = "https://api.openweathermap.org/data/2.5/weather?q=Cedar Rapids&appid=3d77dd0cc05f68b5694ce8afe3652713"
  https.get(url, function(response){
    console.log(response);
  });

  res.send('server is up and running');
})

app.listen(3000, function(){
  console.log('the server is running on port 3000');
})
