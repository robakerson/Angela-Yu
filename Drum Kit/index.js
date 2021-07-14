
// Make sound for clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  // new Audio("sounds/tom-1.mp3").play();
// this.style.color= "white";

// Play sound based on which button is pressed
makeSound(this.innerHTML);
buttonAnimation(this.innerHTML);
}

// make sound for button press
document.addEventListener("keydown", function(event){
makeSound(event.key);
buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
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
    default:console.log(key);
}
}

function buttonAnimation(key){
    var activeButton= document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 50)
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
