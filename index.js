console.log("Hello world")

let humanScore = 0;
let computerScore = 0;

function getChoice(num){
    let choice = "";

    switch(num){
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
    }

    return choice;
}

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3)) + 1;
    let choice = getChoice(randomNumber);

    return choice;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice(){
    let option = parseInt(prompt("Choose your option"));
    let choice = getChoice(option);

    return choice
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock"){
        if(computerChoice == "Rock"){
            console.log("It's a draw...");
        }
        else if(computerChoice == "Paper"){
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        }
        else{
            console.log("Rock beats Scissors... You win...");
            humanScore++;
        }
    }
    else if(humanChoice == "Paper"){
        if(computerChoice == "Rock"){
            console.log("Paper beats Rock... You win...");
            humanScore++;
        }
        else if(computerChoice == "Paper"){
            console.log("It's a draw...");
        }
        else{
            console.log("You lose! Scissors beats Paper!");
        }
    }
    else{
        if(computerChoice == "Rock"){
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        }
        else if(computerChoice == "Paper"){
            console.log("Scissors beats Paper... You win...");
            humanScore++;
        }
        else{
            console.log("It's a draw...");
        }
    }
}

function playGame(){
    let idx = 5;

    while(idx > 0){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        idx--;
    }

    console.log("Your score: " + humanScore + " VS Computer's score: " + computerScore);
    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(humanScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("Draw");
    }
}

playGame();
