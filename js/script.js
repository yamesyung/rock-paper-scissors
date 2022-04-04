

function computerPlay() {
    let options = ["Rock","Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length); 
    let computerOption = options[randomIndex];

    return computerOption;

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("It's a tie!")
    }

    if (playerSelection == "Rock") {
        if(computerSelection == "Paper") {
            return ("You lose! Paper beats Rock.")
        }
        else return("You won! Rock beats scissors.")
    }

    if(playerSelection == "Paper") {
        if(computerSelection == "Rock") {
            return ("You won! Paper beats Rock.")
        }
        else return("You lose! Scissors beats paper.")
    }

    if(playerSelection == "Scissors") {
        if(computerSelection == "Rock") {
            return ("You lose! Rock beats scissors.")
        }
        else return ("You won! Scissors beats paper.")
    }

    return("Please add one of the choices")
}
  
function titleCase(playerSelection){
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}

function game(){
    for (let i = 0; i<5; i++) {
        const playerSelection = titleCase(prompt("Add you option:Rock,Paper,Scissors"));
        const computerSelection = computerPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection))
        
        
    }
}

  
  game();
  console.log("The final score is:");
