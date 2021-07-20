var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  $('#' + randomChosenColor).animate({
    opacity: '0'
  }, 100);
  $('#' + randomChosenColor).animate({
    opacity: '1'
  }, 100);
  level++;
  $('h1').text('level ' + level);
  userClickedPattern = [];
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      //GOTTEM
      setTimeout(function() {
        nextSequence();
      }, 1000);
}
    } else {
      // WRONG!
      new Audio('sounds/wrong.mp3').play();
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = 0;
}

  $(document).keydown(function(event) {
    if (!started) {
      $('h1').text('level ' + level);
      nextSequence();
      started = true;
    }
  })

  $(".btn").click(function() {
    // $(this).animate({opacity:'0.5'});
    $(this).animate({
      opacity: '0'
    }, 50);
    $(this).animate({
      opacity: '1'
    }, 50);
    new Audio('sounds/' + $(this).attr('id') + '.mp3').play();

    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    checkAnswer(level - 1);
  });
