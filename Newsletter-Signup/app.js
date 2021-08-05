
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

// provide path for static files so HTML can use CSS with relative URL
app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Server UP BOI");
});

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

})
