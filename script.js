let playerWins = 0
let computerWins = 0;

function computerPlay(){
    let random = Math.floor(Math.random() * 3);
    switch(random){
        case 0:
            return "Rock";
            break;
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computerWon();
            return "You lose! Paper beats Rock";
        } else{
            playerWon();
            return "You won! Rock beats Scissors";
        }
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerWon();
            return "You won! Paper beats Rock";
        } else{
            computerWon();
            return "You lost! Scissors beats Paper";
        }
    } else{
        if(computerSelection == "rock"){
            computerWon();
            return "You lost! Rock beats Scissors";
        } else{
            playerWon();
            return "You won! Scissors beats Paper";
        }
    }
}

let game = (playerSelection) => {
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerPlay()));
    }
    if(playerWins > computerWins){
        console.log(`You won the majority of the games, with ${playerWins} wins against` + 
        ` ${computerWins} of the computer's wins`);
    } else if(playerWins < computerWins){
        console.log(`You lost the majority of the games, with ${playerWins} wins against` + 
        ` ${computerWins} of the computer's wins`);
    } else{
        console.log(`There was a tie as both you and the computer won ${playerWins} rounds`);
    }
}

let playerWon = () => playerWins++;
let computerWon = () => computerWins++;


// game(prompt("Enter your choice(rock, paper, or scissors:)"));