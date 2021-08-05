
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// provide path for static files so HTML can use CSS with relative URL
app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Server UP BOI");
});

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var firstName = req.body.firstName;
  var lastName= req.body.lastName;
  var email = req.body.email;
  console.log(firstName, lastName, email);
})
