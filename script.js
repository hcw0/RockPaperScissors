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
        icon.style.cssText = "margin-top: 0;";
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
        overlay.style.cssText = "position: fixed; z-index: 9998; opacity: 0.5;" +
            "background-color: black; width: 100%; min-height: 100vh; display: block;" +
            "";
        document.querySelector("body").insertBefore(overlay, document.querySelector(".header"));

        let alert = document.createElement("div");
        alert.style.cssText = "position: fixed; z-index: 9999; background-color: #9DFFCB;" +
            "top: 50%; left: 50%; height: 18em; width: 30em; transform: translate(-50%, -50%);" +
            "border-radius: 2em; display: flex; flex-direction: column; justify-content: center; align-items:center" +
            "";
        let text = document.createElement("p");
        text.textContent = checkWinner();
        text.style.cssText = "font-size: 4em; margin-top: 0;";
        let button = document.createElement("button");
        button.textContent = "Play again";
        button.style.cssText = "background-color: white; padding: 1.5em 3em; margin-top: -3em;" +
            "font-size: 1em; border-radius: 3em; border: 3px solid black; cursor: pointer;";

        button.addEventListener("click", () => window.location.reload());
        alert.append(text);
        alert.append(button);
        document.querySelector("body").insertBefore(alert, document.querySelector(".header"));
        return true;
    } else{
        return false;
    }
}

let checkWinner = () => {
    if(userScore > computerWins){
        return "You won!";
    } else
        return "You lost";
}