var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var  userClickedPattern=[];

$(".btn").click(function(){
   var userChosenColour=$(this).attr("id");
});
  




function nextSequence() {
  var randomnumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomnumber];

  gamePattern.push(randomChosenColour);


  $("#"+randomChosenColour).fadeIn(100).fadeOut(100);
  
  var audio= Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();

}
