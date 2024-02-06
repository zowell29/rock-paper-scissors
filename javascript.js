function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoide = choices[(Math.floor(Math.random() * choices.length))];
    //will return rock, paper or scissors
    //will be used to make computer play
    console.log(computerChoide);
    return computerChoide;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        return "Draw. Both of you are strong enough!";
    };
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" ) {
        playerScore = playerScore + 1;
        return "Player won. Rock is better than Scissors!";
    };
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ){
        computerScore = computerScore + 1;
        return "Computer won. Paper is better than Rock!";
    };
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ){
        playerScore = playerScore + 1;
        return "Player won. Paper is better than Rock!";
    };
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ){
        computerScore = computerScore + 1;
        return "Computer won. Scissors are better than Paper!";
    };
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock" ){
        computerScore = computerScore + 1;
        return "Computer won. Rock is better than Scissors!";
    };
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" ){
        playerScore = playerScore + 1;
        return "Player won. Scissors are better than Paper!";
    };
};

function playGame(roundsNumber){
    for(let i = 1; i <= roundsNumber; i++) {
        var computerChoide = getComputerChoice();
        const playerSelection = window.prompt("Chose your weapon", "");
        playRound(playerSelection, computerChoide);
        if (computerScore > playerScore) {
            console.log("Computer has a better score");
            console.log(computerScore);
            console.log(playerScore);
        }
        if (computerScore < playerScore) {
            console.log("Player has a better score");
            console.log(computerScore);
            console.log(playerScore);
        }
        if (computerScore == playerScore) {
            console.log("Score is equal");
            console.log(computerScore);
            console.log(playerScore);
        }
    }
}
var computerScore = 0;
var playerScore = 0;
const rounds = 5;

playGame(rounds);
