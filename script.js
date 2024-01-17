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

// key beats value, e.g. key = rock, which beats it's value scissors
const moves = {"rock": "scissors", "paper": "rock", "scissors": "paper"};

// capitalize the first letter of a given string
const capitalizeFirstLetter = (s) => s.replace(s[0], s[0].toUpperCase());

function playRound(playerSelection, computerSelection){
    if (computerSelection === moves[playerSelection]) {
        console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`);
        return "player";
    } else if (playerSelection === moves[computerSelection]) {
        console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`);
        return "computer";
    } else {
        return "tie";
    }
}

function game() {
    const scoreCount = new Map([
        ["player", 0],
        ["computer", 0],
        ["tie", 0]
    ]);
    let winner = "";
    while ((scoreCount.get('player') !== 3) && (scoreCount.get('computer') !== 3)) {
        const playerSelection = prompt("Enter rock, paper, or scissors! Best 3 out of 5 wins!");
        const computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
        scoreCount.set(winner, scoreCount.get(winner) + 1);
        console.log(winner !== "tie" ? `${winner} won this round!`: "Tie! Replay round!");
        console.log(`The score is Player: ${scoreCount.get("player")}, Computer: ${scoreCount.get("computer")}, Ties: ${scoreCount.get("tie")}`);
    }
    console.log(`${winner} won the game!`);
}