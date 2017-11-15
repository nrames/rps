var userChoice = prompt("rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
    if (userChoice  === computerChoice) {
        document.getElementById("choice").innerHTML = "The result is a TIE. Refresh to play again.";
    } else if(userChoice === "rock") {
        if (computerChoice === "scissors") {
            document.getElementById("choice").innerHTML = "SCISSORS. You win!";
        } else {
            document.getElementById("choice").innerHTML = "PAPER. You lose!";
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            document.getElementById("choice").innerHTML = "ROCK. You win!";
        } else {
            document.getElementById("choice").innerHTML = "SCISSORS. You lose!";
        }
    } else if(userChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("choice").innerHTML = "ROCK. You lose!";
        } else {
            document.getElementById("choice").innerHTML = "SCISSORS. You win!";
        }
    }
};
