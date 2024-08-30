var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomnumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomnumber];

  gamePattern.push(randomChosenColour);


  $("#"+randomChosenColour).fadeIn(100).fadeOut(100);


}
