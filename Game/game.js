var dino = document.getElementById("dino");
var dragon = document.getElementById("dragon");
var bird = document.getElementById("bird");

setInterval(function(){ // This function randomly goes between the bird and dragon
    var number = Math.random();
    if (number <= 0.5){
        if (dragon.classList == "animateDragon"){
            return
        }
        dragon.classList.add("animateDragon");
        setTimeout(function(){
            dragon.classList.remove("animateDragon")
        }, 1000)
    }
    else {
        if (bird.classList == "animateBird"){
            return
        }
        bird.classList.add("animateBird");
        setTimeout(function(){
            bird.classList.remove("animateBird")
        }, 1000)
    }
}, 500)

function dinoJump() { // Makes dino jump 
    if (dino.classList == "animateDino" || dino.classList == "animateDinoDuck"){
        return
    }
    dino.classList.add("animateDino");
    setTimeout(function(){
        dino.classList.remove("animateDino");
    }, 500);
}

function dinoDuck() { // Makes dino duck
    if (dino.classList == "animateDino" || dino.classList == "animateDinoDuck"){
        return
    }
    dino.classList.add("animateDinoDuck");
    setTimeout(function(){
        dino.classList.remove("animateDinoDuck");
    }, 500);
}

var scoreIncrease = 0;
var ifHit = setInterval(function(){ // Ends game and also increases score
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var dragonLeft = parseInt(window.getComputedStyle(dragon).getPropertyValue("left"));
    var birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    if (dragonLeft<20 && dragonLeft>0 && dinoTop>= 130){
        dragon.style.animation = "none";
        dragon.style.display = "none";
        bird.style.animation = "none";
        bird.style.display = "none";
        alert("You Lose! Your Score is " + parseInt(scoreIncrease))
    }
    if (birdLeft<20 && birdLeft>0 && dinoTop<= 170){
        dragon.style.animation = "none";
        dragon.style.display = "none";
        bird.style.animation = "none";
        bird.style.display = "none";
        alert("You Lose! Your Score is " + parseInt(scoreIncrease))
    }
    else {
        scoreIncrease += 1/100;
        increaseScore(scoreIncrease)
    }
}, 10)

function increaseScore(scoreIncrease){
    document.getElementById("score").innerHTML = "Score : " + parseInt(scoreIncrease);
}