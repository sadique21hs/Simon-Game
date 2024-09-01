var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];


$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);


  playSound(userChosenColour);
});



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


function nextSequence() {
  var randomnumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomnumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100);

 /* var audio = Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();*/

  playSound(randomChosenColour);


}

function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
  var self=$("#"+currentColour);

  setTimeout(function(){
    self.removeClass("pressed");
  },100);
}
