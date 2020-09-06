"use strict";

let scoreboard = {
    player: 0,
    round: 0,
    computer: 0
};

let result_div = document.getElementById("resultText");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

let reset_btn = document.getElementById("reset");
let choice_message = document.getElementById("choiceMessage");

//EventListner
//player chooses between rock/paper/scissors
function playerPick() {
    rock_div.addEventListener("click", function () {
        document.getElementById('playerChoice').src = 'images/rock.jpg';
        game("rock");
    });
    paper_div.addEventListener("click", function () {
        document.getElementById('playerChoice').src = 'images/paper.jpg';
        game("paper");

    });
    scissors_div.addEventListener("click", function () {
        document.getElementById('playerChoice').src = 'images/scissors.jpg';
        game("scissors");
    });
}

//function to decides winner and updates the scoreboard
function game(userAction) {
    let computerAction = compChoice();
    if (computerAction == userAction) {
        //draw
        scoreboard.round++;
        result_div.innerHTML = "!! DRAW !!";
    } else if ((userAction == "paper" && computerAction == "rock") ||
        (userAction == "rock" && computerAction == "scissors") ||
        (userAction == "scissors" && computerAction == "paper")) {
        //player win
        scoreboard.player++;
        scoreboard.round++;
        result_div.innerHTML = "You Win!";
    } else {
        //computer win
        scoreboard.computer++;
        scoreboard.round++;
        result_div.innerHTML = "Computer Wins!";
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Round: ${scoreboard.round}</p>
        <p>Computer: ${scoreboard.computer}</p>`;

    //when player or computer reaches 3 wins, displayes game over message
    if (scoreboard.player == 3 || scoreboard.computer == 3) {
        let final_result = "";
        rock_div.style.visibility = 'hidden';
        paper_div.style.visibility = 'hidden';
        scissors_div.style.visibility = 'hidden';
        choice_message.innerHTML = '';
        if (scoreboard.player > scoreboard.computer) {
            final_result = "Game Over! You Win!";
        } else {
            final_result = "Game Over! Computer Wins!";
        }
        result_div.innerHTML = final_result;
        result_div.style.color = "#ff0000";
    }
}

//function for computer to chooses between rock, paper and scissors
function compChoice() {
    let rand = Math.floor(Math.random() * 3); // output: 0, 1 or 2
    if (rand == 0) {
        document.getElementById('computerChoice').src = 'images/rock.jpg';
        return "rock";
    } else if (rand == 1) {
        document.getElementById('computerChoice').src = 'images/paper.jpg';
        return "paper";
    } else {
        document.getElementById('computerChoice').src = 'images/scissors.jpg';
        return "scissors";
    }
}

playerPick();

//game reset function
function restartGame() {
    scoreboard.player = 0;
    scoreboard.round = 0;
    scoreboard.computer = 0;
    document.getElementById('playerChoice').src = 'images/human.jpg';
    document.getElementById('computerChoice').src = 'images/computer.jpg';
    result_div.innerHTML = "Score has been reset! Let's see who wins this time!";
    result_div.style.color = "#61882f";
    rock_div.style.visibility = 'visible';
    paper_div.style.visibility = 'visible';
    scissors_div.style.visibility = 'visible';
    choice_message.innerHTML = 'Take your pick';
    score.innerHTML = `
      <p>Player: 0</p>
      <p>Round: 0</p>
      <p>Computer: 0</p>`;
}

// runs resetGame function when restart button gets clicked
restart.addEventListener('click', restartGame);