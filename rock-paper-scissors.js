let myScore = 0;
let comScore = 0;

let reset = document.querySelector("#reset");
let me = document.querySelector("#myImg");
let com = document.querySelector("#comImg");
let myStatus = document.querySelector("#myStatus");
let comStatus = document.querySelector("#comStatus");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

reset.addEventListener("click", function() {
    myScore = 0;
    comScore = 0;
    document.querySelector("#scoreboard").innerHTML = myScore + ":" + comScore;
    me.src = "";
    com.src = "";
    myStatus.innerHTML = "Ready";
    comStatus.innerHTML = "Ready";
})

rock.addEventListener("click", function() {
    me.src = "rock.jpg";
    comActive("rock");
})

paper.addEventListener("click", function() {
    me.src = "paper.jpg";
    comActive("paper");
})

scissors.addEventListener("click", function() {
    me.src = "scissors.jpg";
    comActive("scissors");
})

function comActive(me) {
    let random = Math.floor((Math.random() * 10 )% 3);
    if(random == 0) { // rock
        com.src = "rock.jpg";
        if(me == "scissors") { // lose
            comScore++;
            myStatus.innerHTML = "Lose";
            comStatus.innerHTML = "Win";
        }
        else if (me == "paper") { // win
            myScore++;
            myStatus.innerHTML = "Win";
            comStatus.innerHTML = "Lose";
        }
        else { // draw
            myStatus.innerHTML = "Draw";
            comStatus.innerHTML = "Draw";
        }
    }
    else if(random == 1) { // paper
        com.src = "paper.jpg";
        console.log("paper");
        if(me == "rock") { // lose
            comScore++;
            myStatus.innerHTML = "Lose";
            comStatus.innerHTML = "Win";
        }
        else if(me == "scissors") { // win
            myScore++;
            myStatus.innerHTML = "Win";
            comStatus.innerHTML = "Lose";
        }
        else {
            myStatus.innerHTML = "Draw";
            comStatus.innerHTML = "Draw";
        }
    }
    else { // scissors
        com.src = "scissors.jpg";
        console.log("scissors");
        if(me == "paper") { // lose
            comScore++;
            myStatus.innerHTML = "Lose";
            comStatus.innerHTML = "Win";
        }
        else if(me == "rock") { // win
            myScore++;
            myStatus.innerHTML = "Win";
            comStatus.innerHTML = "Lose";
        }
        else {
            myStatus.innerHTML = "Draw";
            comStatus.innerHTML = "Draw";
        }
    }

    (function() {
        document.querySelector("#scoreboard").innerHTML = myScore + ":" + comScore;
    }) ();
}

