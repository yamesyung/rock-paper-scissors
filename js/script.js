console.log("Hello world")

function computerPlay() {
    let options = ["Rock","Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length); 
    let computerOption = options[randomIndex];

    console.log(computerOption)

    return computerOption;

}

computerPlay()
