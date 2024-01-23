// player buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//score count
const scoreCount = new Map([
    ["player", 0],
    ["computer", 0],
    ["tie", 0]
]);

// display scores
const playerScore = document.querySelector(".player-score");
const ties = document.querySelector(".ties");
const computerScore = document.querySelector(".computer-score");

// round results
const roundResults = document.querySelector(".state-round-results");


// get a random float number from 0 to 1
function getRandomDecimal() {
    return Math.round(Math.random() * 100)/100;
}

// return rock, paper, or scissors depending on the float returned from getRandomDecimal()
function getComputerChoice() {
    let choice = getRandomDecimal();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.66) {
       return "paper";
    } else {
        return "scissors";
    }
}

// resets scores back to 0 for new game
function resetScores() {
    scoreCount.set("player", 0);
    scoreCount.set("computer", 0);
    scoreCount.set("tie", 0);
}

// key beats value, e.g. key = rock, which beats it's value scissors
const winningMoves = {"rock": "scissors", "paper": "rock", "scissors": "paper"};

// capitalize the first letter of a given string
const capitalizeFirstLetter = (s) => s.replace(s[0], s[0].toUpperCase());

// player moves
const moves = {"&#9994;": "rock", "&#9995;": "paper", "&#9996;": "scissors"};
let playerSelection = "";

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

// plays one round of the game
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (computerSelection === winningMoves[playerSelection]) {
        scoreCount.set("player", scoreCount.get("player") + 1);
        playerScore.textContent = `${scoreCount.get("player")}`;
        if (scoreCount.get("player") < 5) {
            roundResults.textContent = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        } else {
            roundResults.textContent = `You win the game! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        }
    } else if (playerSelection === winningMoves[computerSelection]) {
        scoreCount.set("computer", scoreCount.get("computer") + 1);
        computerScore.textContent = `${scoreCount.get("computer")}`;
        if (scoreCount.get("computer") < 5) {
            roundResults.textContent = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
        } else {
            roundResults.textContent = `You lose the game! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
        }
    } else {
        scoreCount.set("tie", scoreCount.get("tie") + 1);
        ties.textContent = `${scoreCount.get("tie")}`;
    }
}
