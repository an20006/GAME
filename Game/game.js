var dino = document.getElementById("dino");
var dragon = document.getElementById("dragon");
var bird = document.getElementById("bird");
music = new Audio("music.mp3")
gameOverMusic = new Audio("gameover.mp3")
dead = false;

function restart() {
    dead = false;
    scoreIncrease = 0;
    moveObjects();
    hit();
}

music.play()
var move = moveObjects();
function moveObjects() {
setInterval(function(){ // This function randomly goes between the bird and dragon
    var number = Math.random();
    if (dead == true) {
        return;
    }
    else if (number <= 0.5){
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
}


function dinoJump() { // Makes dino jump 
    if (dead == true) {
        return;
    }
    else if (dino.classList == "animateDino" || dino.classList == "animateDinoDuck"){
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

scoreIncrease = 0;
var hit = hit()
function hit(){
setInterval(function(){ // Ends game and also increases score
    var dragonLeft = parseInt(window.getComputedStyle(dragon).getPropertyValue("left"));
    var birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if ((dragonLeft<150 && dragonLeft>0 && dinoTop>= 345) || (birdLeft<150 && birdLeft>0 && dinoTop<= 385)){
        dead = true;
        music.pause();
        gameOverMusic.play();    
        scoreIncrease = 0;
        delete scoreIncrease;
        return;
    }
    else {
        scoreIncrease += 1/100;
        increaseScore(scoreIncrease)
    }
}, 10)
}

function increaseScore(scoreIncrease){
    document.getElementById("score").innerHTML = "Score : " + parseInt(scoreIncrease);
}

