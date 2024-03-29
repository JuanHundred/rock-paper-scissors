// select the player buttons
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// keep track of score of the game
const scoreCount = new Map([
    ["player", 0],
    ["computer", 0],
    ["tie", 0]
]);

// get elements that update the scores after every round
const playerScore = document.querySelector(".player-score");
const ties = document.querySelector(".ties");
const computerScore = document.querySelector(".computer-score");

// get heading that will show the results of the round
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

// get the play again button
const playAgain = document.querySelector(".play-again");

// change choices
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

// after a player reaches 5, hide the rock, paper, scissors buttons
function hideButtons() {
    resetScores();
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    playAgain.style.display = "inline-block";
}

// if the player wants to start a new game, hit the play again button
playAgain.addEventListener("click", () => restartGame());

// reset the scores back to 0, add the choices back, and hide the play again button to play again
function restartGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    ties.textContent = 0;
    rockButton.style.display = "inline-block";
    paperButton.style.display = "inline-block";
    scissorsButton.style.display = "inline-block";
    playAgain.style.display = "none";
    roundResults.textContent = "Rock, Paper, Scissors... SHOOT!";
    playerChoice.textContent = "❔";
    computerChoice.textContent = "❔";
}

// key beats value, e.g. key = rock, which beats it's value scissors
const winningMoves = {"rock": "scissors", "paper": "rock", "scissors": "paper"};

// capitalize the first letter of a given string
const capitalizeFirstLetter = (s) => s.replace(s[0], s[0].toUpperCase());

// player moves
const moves = {"rock": "🪨", "paper": "📄", "scissors": "✂️"};
let playerSelection = "";

// plays round every time a player clicks one of the choices
rockButton.addEventListener("click", () => {
    playRound("rock");
    playerChoice.textContent = "🪨";
});
paperButton.addEventListener("click", () => {
    playRound("paper");
    playerChoice.textContent = "📄";
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
    playerChoice.textContent = "✂️";
});

// plays one round of the game
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    computerChoice.textContent = `${moves[computerSelection]}`;
    // if player choice beats computer choice
    let winner = "";
    if (computerSelection === winningMoves[playerSelection]) {
        scoreCount.set("player", scoreCount.get("player") + 1);
        playerScore.textContent = `${scoreCount.get("player")}`;
        winner = "player";
        roundResults.textContent = `You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
    // else computer beats player
    } else if (playerSelection === winningMoves[computerSelection]) {
        winner = "computer";
        scoreCount.set("computer", scoreCount.get("computer") + 1);
        computerScore.textContent = `${scoreCount.get("computer")}`;
        roundResults.textContent = `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
    } else {
        scoreCount.set("tie", scoreCount.get("tie") + 1);
        ties.textContent = `${scoreCount.get("tie")}`;
    }
    
    /* 
        If the player or computer reaches 5 wins, display who won the game
        and add a span tag describing the winning move
        uses the same class as roundResults, plus changing display to block and changing some css to text correctly
    */

    if (scoreCount.get(winner) == 5) {
        winner = winner == "player" ? "You" : "Computer";
        roundResults.textContent = `Game over! ${winner} won the game!`;
        const newLine = document.createElement("span");
        newLine.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
        newLine.classList.add("state-round-results");
        newLine.style.margin = 0;
        newLine.style.textAlign = "center";
        newLine.style.display = "block";
        roundResults.append(newLine);
        hideButtons();
    }
}
