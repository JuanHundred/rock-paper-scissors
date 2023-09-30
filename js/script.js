console.log("Hello");

function game(){
    // keep track of both player and computer wins
    let playerWinCount = 0;
    let computerWinCount = 0;
    let tieCount = 0;
    let winner = "";

    // used in getComputerChoice()
    const VALID_COMPUTER_MOVES = {
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
    
    if (playerWinCount === 3){
        winner = "Player";
    }else{
        winner = "Computer";
    }

    alert(`The winner is the ${winner}. Final Score: Player: ${playerWinCount}, Computer: ${computerWinCount}, Tie: ${tieCount}`);
    
    
    function getComputerChoice(){
        let computerMove = Math.floor(Math.random() * 3);
        return VALID_COMPUTER_MOVES[computerMove];
    }
    
    function getCurrentScores (){
        alert(`Current Score: Player: ${playerWinCount}, Computer: ${computerWinCount}, Tie: ${tieCount}`);
    }
 
}

let play = document.querySelector("play-button");
play.addEventListener("click", game);
