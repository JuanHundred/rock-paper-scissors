console.log("Hello");

function game(){
    // keep track of both player and computer wins
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;

    // used in getComputerChoice()
    const computerMoves = {
        0: "paper", 
        1: "rock", 
        2: "scissors"
    };

    const winningConditions = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    };

    while (playerWinCount < 3 && computerWinCount < 3){
        let playerSelection = prompt("Enter: rock, paper, or scissors");
        playerSelection = playerSelection.toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    function playRound(playerSelection, computerSelection) {
        // your code here!
        if (playerSelection === computerSelection) {
            alert("It's a tie!");
            tieCount++;
            getCurrentScores();
        } else if (winningConditions[playerSelection] === computerSelection) {
            alert("Player wins this round!");
            playerWinCount++;
            getCurrentScores();
        } else {
            alert("Computer wins this!");
            computerWinCount++;
            getCurrentScores();
        }
    }
    
    console.log("done!");
    
    
    function getComputerChoice(){
        let computerAns = Math.floor(Math.random() * 3);
        return computerMoves[computerAns];
    }
    
    function getCurrentScores (){
        alert(`Current Score: Player: ${playerWinCount}, Computer: ${computerWinCount}, Tie: ${tieCount}`);
    }
    //const playerSelection = "rock";
    //const computerSelection = getComputerChoice();
    //console.log(playRound(playerSelection, computerSelection));
}

let play = document.getElementById("play-button");
play.addEventListener("click", game);


/*
let playerRes = "";
const computerDict = {0:"paper", 1:"rock", 2:"scissors"};
const winningConditions = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper",
};

function computerMove(){
    let computerAns = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return computerDict[computerAns];
}
let playerWinCount = 0;
let computerWinCount = 0;

function promptFunction(){
    playerRes = prompt("Enter: Rock, Paper, or Scissors");
    playerRes = playerRes.toLowerCase();
    computerRes = computerMove();
    if (playerRes === computerRes) {
        console.log("It's a tie!");
    } else if (winningConditions[playerRes] === computerRes) {
        console.log("Player wins!");
        playerWinCount++;
    } else {
        console.log("Computer wins!");
        computerWinCount++;
    }
    if (playerWinCount === 3){
        alert("Player won!");
    }else if (computerWinCount === 3){
        alert("Computer won!");
    }
}



let play = document.getElementById("play-button");
play.addEventListener("click", promptFunction);

*/

