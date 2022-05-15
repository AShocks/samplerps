let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreArea_div = document.querySelector(".score-area");
const result_p = document.querySelector(".result > p");
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
function win() {
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
}

function lose() {

}

function draw() {

}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice;
    switch (playerChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
          win(playerChoice, computerChoice);
          break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
          lose(playerChoice, computerChoice);
          break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
          draw(playerChoice, computerChoice);
          break;
      }
} 

function main() {
    rockButton.addEventListener('click', function() {
        playGame("Rock");
    })

    paperButton.addEventListener('click', function() {
        playGame("Paper");
    })

    scissorsButton.addEventListener('click', function() {
        playGame("Scissors");
    })
}

main()