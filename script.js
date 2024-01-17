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
    } else if (playerSelection === moves[computerSelection]) {
        console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`);
    } else {
        console.log("Tie! Replay round!");
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter rock, paper, or scissors!");
        playRound(playerSelection, computerSelection);
    }
}

const playerSelection = prompt("Enter rock, paper, or scissors!");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);