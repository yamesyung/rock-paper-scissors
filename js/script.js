const playerSelection = "Scissors";


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
}
  
function game(){
    for (let i = 0; i<5; i++) {
        const computerSelection = computerPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection))
        
        
    }
}


  
  game();
    
