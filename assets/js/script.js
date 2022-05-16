document.addEventListener("DOMContentLoaded", function () {
    let allButtons = document.getElementsByClassName("button-style");
    for (let button of allButtons) {
        button.addEventListener("click", function () {
            let userAnswer = this.getAttribute("data-type");
            playGame(userAnswer);

            setTimeout(function () {
                returnGame(userAnswer);
            }, 4000);
        });
    }
});

function playGame(userAnswer) {

    switch (playerChoice) {
        case "Rock":
            alert("Rock");
            break;
        case "Paper":
            alert("Paper");
            break;
        case "Scissors":
            alert("Scissors");
            break;
        default:
            alert(`Game error, please try again later.`);
            throw `Game error! Please investigate`;
    }

    
}
  


function returnGame(playerChoice) {

    let options = ["Rock", "Paper", "Scissors"];
    let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];

    if (randomComputerAnswer === "Rock" && playerChoice === "Rock") {
        //displayComputerRock(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            //increaseRoundNumber();
            //increaseRoundsDrawn();
        ;

    } else if (randomComputerAnswer === "Rock" && playerChoice === "Paper") {
        //displayComputerRock(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            //increaseRoundNumber();
            //increaseRoundsWon();
        ;

    } else if (randomComputerAnswer === "Rock" && playerChoice === "Scissors") {
        //displayComputerRock(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            //increaseRoundNumber();
            //increaseRoundsLost();
        ;


    } else if (randomComputerAnswer === "Paper" && playerChoice === "Rock") {
        //displayComputerPaper(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            increaseRoundNumber();
            increaseRoundsLost();
        ;

    } else if (randomComputerAnswer === "Paper" && playerChoice === "Paper") {
        //displayComputerPaper(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            //increaseRoundNumber();
            //increaseRoundsDrawn();
        ;

    } else if (randomComputerAnswer === "Paper" && playerChoice === "Scissors") {
        //displayComputerPaper(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            //increaseRoundNumber();
            //increaseRoundsWon();
        ;

    } else if (randomComputerAnswer === "Scissors" && playerChoice === "Rock") {
        //displayComputerScissors(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou won!`);
            //increaseRoundNumber();
            //increaseRoundsWon();
        ;

    } else if (randomComputerAnswer === "Scissors" && playerChoice === "Paper") {
        //displayComputerScissors(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nYou lost!\n`);
            //increaseRoundNumber();
            //increaseRoundsLost();
        ;

    } else if (randomComputerAnswer === "Scissors" && playerChoice === "Scissors") {
        //displayComputerScissors(randomComputerAnswer);
        //setTimeout(function () {
            alert(`You played: ${playerChoice} \nThe computer played: ${randomComputerAnswer} \nIt"s a draw!`);
            //increaseRoundNumber();
            //increaseRoundsDrawn();
        ;

    } else {
        alert(`Game error, please try again later.`);
        throw `Game error! Please investigate`;
    }

} 

