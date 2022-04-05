
//function which picks a random index from an array and returns the computer option
function computerPlay() {                                               
    let options = ["Rock","Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerOption = options[randomIndex];

    return computerOption;

}

//compares the strings from user input and computer option and returns a proper message for each situation
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

//standardize the user input, capitalise first letter, however it throws an error when dealing with empty string or the user prompt gets cancelled
function titleCase(playerSelection){
    if (typeof playerSelection !== "undefined"){
        return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    }
     return("Your entry is empty")
}

//5 rounds, score gets initialized, display score at the end
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++) {
        const playerSelection = titleCase(prompt("Add you option:Rock,Paper,Scissors"));
        const computerSelection = computerPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection))
        
        if (playRound(playerSelection, computerSelection).includes("won")) {
            playerScore = playerScore+1;

        }
        if (playRound(playerSelection, computerSelection).includes("lose")) {
            computerScore = computerScore+1;
        }
    }
    console.log(`The final score is: ` + playerScore + ` : ` + computerScore);
}

  
  game();
