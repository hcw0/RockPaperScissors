// 0 -> rock
// 1 -> paper
// 2 -> scissors

let playerWins = 0
let computerWins = 0;

function computerPlay(){
    let icon = document.querySelector("#pc-choice-icon");
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        icon.className = "fa-regular fa-hand-back-fist";
    } else if(choice == 1){
        icon.className = "fa-regular fa-hand";
    } else{
        icon.className = "fa-regular fa-hand-scissors";
    }
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(!checkGameEnd()){
        if(playerSelection == computerSelection){
            roundSummary("Tie");
        } else if(playerSelection == 0){
            if(computerSelection == 1){
                computerWon();
                roundSummary("You lose! Paper beats Rock");
            } else{
                playerWon();
                roundSummary("You won! Rock beats Scissors");
            }
        } else if(playerSelection == 1){
            if(computerSelection == 0){
                playerWon();
                roundSummary("You won! Paper beats Rock");
            } else{
                computerWon();
                roundSummary("You lost! Scissors beats Paper");
            }
        } else{
            if(computerSelection == 1){
                computerWon();
                roundSummary("You won! Scissors beats Paper");
            } else{
                playerWon();
                roundSummary("You lost! Rock beats Scissors");
    
            }
        }
    }
}



const icons = document.querySelectorAll(".choices .fa-regular");
console.log(icons);
icons.forEach( icon => {
    icon.addEventListener("click", () =>{
        let id = icon.getAttribute("id"); 
        if(id == "rock-selection"){
            playRound(0, computerPlay());

        } else if(id == "paper-selection"){
            playRound(1, computerPlay());
        } else{
            playRound(2, computerPlay());
        }
    });
})

const userScore = document.querySelector(".user-score");
const pcScore = document.querySelector(".computer-score");

let playerWon = () => {
    playerWins++;
    userScore.textContent = playerWins;
}
let computerWon = () => {
    computerWins++;
    pcScore.textContent = computerWins;
}

let roundSummary = (string) => {
    let p = document.querySelector("#round-summary");
    p.textContent = string;
    p.style.cssText = "text-align: center; font-size: 2em; margin-top: -2em;";
    document.querySelector(".score-display").appendChild(p);
}

let checkGameEnd = () => {
    if(playerWins == 5 || computerWins == 5){
        let overlay = document.createElement("div");
        overlay.style.cssText = "position: fixed; z-index: 9999; opacity: 0.5;" +
            "background-color: black; width: 100%; min-height: 100vh; display: block;" +
            "";
        document.querySelector("body").insertBefore(overlay, document.querySelector(".header"));

        let alert = document.createElement("div");

        return true;
    } else{
        return false;
    }
}