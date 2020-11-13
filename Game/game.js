var dino = document.getElementById("dino");
var dragon = document.getElementById("dragon");
function dinoJump() {
    if (dino.classList != "animateDino"){
        dino.classList.add("animateDino");
    }
    setTimeout(function(){
        dino.classList.remove("animateDino");
    }, 500);
}

var scoreIncrease = 0;
var score = document.getElementById("score");
var ifHit = setInterval(function(){
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var dragonLeft = parseInt(window.getComputedStyle(dragon).getPropertyValue("left"));
    if (dragonLeft<20 && dragonLeft>0 && dinoTop>= 130){
        dragon.style.animation = "none";
        dragon.style.display = "none";
        alert("You Lose!")
    }
    if (dragonLeft == -40){
        scoreIncrease += 1;
        increaseScore(scoreIncrease)
    }
}, 10)

function increaseScore(scoreIncrease){
    document.getElementById("score") = "Score : " + scoreIncrease;
}