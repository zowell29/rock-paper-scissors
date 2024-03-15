function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoide = choices[(Math.floor(Math.random() * choices.length))];
    //will return rock, paper or scissors
    //will be used to make computer play
    computerChoideDiv.textContent =`Computer Choice: ${computerChoide}`;
    return computerChoide;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        playerScore = playerScore + 1;
        computerScore = computerScore + 1;
        resultLine.textContent = `Draw. Both of you are strong enough!  Player Score: ${playerScore}` + "\nComputerScore: " + `${computerScore}`;
        // return "Draw. Both of you are strong enough!";
    };
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" ) {
        playerScore = playerScore + 1;
        resultLine.textContent = `Player won. Rock is better than Scissors! Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Player won. Rock is better than Scissors!";
    };
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" ){
        computerScore = computerScore + 1;
        resultLine.textContent = `Computer won. Paper is better than Rock!  Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Computer won. Paper is better than Rock!";
    };
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ){
        playerScore = playerScore + 1;
        resultLine.textContent = `Player won. Paper is better than Rock!  Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Player won. Paper is better than Rock!";
    };
    if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ){
        computerScore = computerScore + 1;
        resultLine.textContent = `Computer won. Scissors are better than Paper!  Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Computer won. Scissors are better than Paper!";
    };
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock" ){
        computerScore = computerScore + 1;
        resultLine.textContent = `Computer won. Rock is better than Scissors!  Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Computer won. Rock is better than Scissors!";
    };
    if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" ){
        playerScore = playerScore + 1;
        resultLine.textContent = `Player won. Scissors are better than Paper!  Player Score: ${playerScore}    ComputerScore: ${computerScore}`;
        // return "Player won. Scissors are better than Paper!";
    };
    if (playerScore == 5) {
        resultLine.textContent = `Player won the game! Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        resultLine.textContent = `Computer won the game! Player Score: ${playerScore} ComputerScore: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }

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
// const rounds = 5;

// playGame(rounds);

const resultsContainer = document.querySelector('.results-container');
const buttons = document.querySelectorAll('button');
const resultLine = document.createElement('div');
const computerChoideDiv = document.createElement('div');
const playerChoiceDiv = document.createElement('div');

computerChoideDiv.setAttribute('class', 'computer-choice');
playerChoiceDiv.setAttribute('class', 'player-choice');
resultLine.setAttribute('class','result-line');

resultsContainer.appendChild(playerChoiceDiv);
resultsContainer.appendChild(computerChoideDiv);
resultsContainer.appendChild(resultLine);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerChoiceDiv.textContent = `Player Choice: ${button.value}`;
        playRound(button.value, getComputerChoice());
    })
    button.addEventListener('mouseover', () => {
        button.focus();
    })
})



