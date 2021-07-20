
var gamePattern= [];
var userClickedPattern= [];
var buttonColors = ["red", "blue", "green","yellow"];
var level = 0;

function nextSequence(){
  var randomNumber= Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  $('#' + randomChosenColor).animate({opacity:'0'}, 50);
  $('#' + randomChosenColor).animate({opacity:'1'}, 50);
  level++;
  $('h1').text('level ' + level);
}

function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
  console.log("success");
}else{
  console.log("wrong");
}
console.log(gamePattern);
console.log(userClickedPattern);
}


$(document).keydown(function(event){
  if (level ===0) {
    $('h1').text('level ' + level);
    nextSequence();
  }
})

$(".btn").click(function(){
  // $(this).animate({opacity:'0.5'});
  $(this).animate({opacity:'0'}, 50);
  $(this).animate({opacity:'1'}, 50);
new Audio('sounds/' + $(this).attr('id') +'.mp3').play();

var userChosenColor = $(this).attr('id');
userClickedPattern.push(userChosenColor);
checkAnswer(level);
});
