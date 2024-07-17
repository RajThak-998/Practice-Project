var buttonColors= ["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var level =0;
var started = false;

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){

    $('#'+currentColor).addClass('pressed');
setTimeout(function() {
    $('#'+currentColor).removeClass('pressed');
}, 100);
}

$(document).on('keydown',function(){
    if(!started){
        $("h1").text("level "+ level);
        started=true;
        nextSequence();
    }
})



function nextSequence(){
    userClickedPattern=[];
    level++;
    $('h1').text('Level ' +level);
    var randomNumber = Math.floor(Math.random()*4) ;
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //fadein out
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function checkAns(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    
    if(userClickedPattern.length === gamePattern.length){

        setTimeout(function(){
            nextSequence();
        },1000);
    }
  }  
else{
    playSound('wrong');

    $('body').addClass('game-over');
    setTimeout(function() {
        $('body').removeClass('game-over');
    }, 200);
    $('h1').text('You messed Up!, Press any key to restart.');
    startOver();


}
}

var mybtn =  $(".btn");

mybtn.trigger('click').on('click',function(){
    
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAns(userClickedPattern.length-1);
});




