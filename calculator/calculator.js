
const express = require('express');
const bodyParser = require('body-parser');

//require express.js
const app = express();
//Expresss use bodyparser so we can use values POSTED from user in our script
app.use(bodyParser.urlencoded({extended: true}));

//start server on port 3000
app.listen(3000, function(){
  console.log("Server started on port 3000");
})

// when user goes to root of server, serve them index.html
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
// Calculate the sum
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;
// Send result to user
  res.send("Your result is: " + result);
})
