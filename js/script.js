
//function which picks a random index from an array and returns the computer option
function computerPlay() {                                               
    let options = ["Rock","Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * options.length);
    let computerOption = options[randomIndex];

    return computerOption;

}

const rock = document.querySelector('#rock');
rock.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    playRound("Rock", computerSelection);
    console.log(playRound("Rock",computerSelection));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    playRound("Paper", computerSelection);
    console.log(playRound("Paper",computerSelection));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click' , () => {
    const computerSelection = computerPlay();
    playRound("Scissors", computerSelection);
    console.log(playRound("Scissors",computerSelection));
});

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


//5 rounds, score gets initialized, display score at the end
function game(){
    let playerScore = 0;
    let computerScore = 0;
    
        //const playerSelection = titleCase(prompt("Add you option:Rock,Paper,Scissors"));
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
    
    console.log(`The final score is: ` + playerScore + ` : ` + computerScore);
}

  
 // game();
