

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  // new Audio("sounds/tom-1.mp3").play();
// this.style.color= "white";

// Play sound based on which button is pressed
switch (this.innerHTML) {
  case "w": new Audio("sounds/tom-1.mp3").play();
    break;
  case "a": new Audio("sounds/tom-2.mp3").play();
    break;
  case "s": new Audio("sounds/tom-3.mp3").play();
    break;
  case "d": new Audio("sounds/tom-4.mp3").play();
    break;
  case "j": new Audio("sounds/crash.mp3").play();
    break;
  case "k": new Audio("sounds/kick-bass.mp3").play();
    break;
  case "l": new Audio("sounds/snare.mp3").play();
    break;
  default:console.log(this.innerHTML);
}
}




// Constructor function
//
// function BellBoy (name, age, hasWorkPermit, languages) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
//  this.clean = function(){
//  alert("I'm cleaning!");
//  }
// }
//
// calling constructor function
//
// var bellBoy1 = new BellBoy("Timmy", 19, true, ["English","German"]);
