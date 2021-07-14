
// Generate 2 random numbers 1-6
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// Set dice images to dice 1-6 based on random number
document.querySelector("img.img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

// Replace header text with victor declaration based on random numbers
if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
