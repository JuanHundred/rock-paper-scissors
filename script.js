// get a random float number from 0 to 1
function getRandomDecimal() {
    return Math.round(Math.random() * 100)/100;
}

// return rock, paper, or scissors depending on the float returned from getRandomDecimal()
function getComputerChoice () {
    let choice = getRandomDecimal();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice <= 0.66) {
       return "paper";
    } else {
        return "scissors";
    }

}