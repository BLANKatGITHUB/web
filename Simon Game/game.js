var btnColor = ["red","blue","green","yellow"];
var userClickedPattern = [] ;
var gamePattern = [];
var level = 0;

$(".btn").click(
    function () {
        userClickedPattern.push(this.id);
        
        audio(this.id);
        aniPress(this.id);

        checkSequence(userClickedPattern.length)
    } 
)


$(document).keydown(nextSequence);
   


function nextSequence() {
    var rand = Math.floor(Math.random()*4);

    var randomcolor = btnColor[rand];

    gamePattern.push(randomcolor);

    $("h1").text("Level " + level);
    level = level+1;

    jQuery("." +  randomcolor).fadeToggle(100).fadeToggle(100);
    audio(randomcolor);
    
}

function aniPress(name) {
    jQuery("." +  name).addClass("pressed");
    setTimeout(function () {
        jQuery("." +  name).removeClass("pressed");  
    },100);
}

function audio(name) {
    let audio = new Audio("/sounds/"+name+".mp3");
    audio.play();
}

function checkSequence(index){
    if (userClickedPattern[index-1]===gamePattern[index-1]){
        console.log("success");
    }

    else {
        $("h1").text("wrong answer , better luck next time");
        $("body").addClass("game-over")
        setTimeout( function () {
            $("body").removeClass("game-over")
        },200);
        reset();



    }

    if (index==level){
        setTimeout(nextSequence,500);
        userClickedPattern = [];
    }
}

function  reset() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}



