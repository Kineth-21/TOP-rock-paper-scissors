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

const scoreBoard = document.querySelector("#scoreBoard");
const botChoiceImage = document.querySelector("#botChoice")

function playRound(humanChoice, computerChoice){
    if(computerChoice == "Rock"){
        botChoiceImage.innerHTML = '<img src="images/rock.jpg" alt="Rock">';
    }
    else if(computerChoice == "Paper"){
        botChoiceImage.innerHTML = '<img src="images/paper.jpg" alt="Paper">';
    }
    else{
        botChoiceImage.innerHTML = '<img src="images/scissors.jpg" alt="Scissors">';
    }

    if (humanChoice == "Rock"){
        if(computerChoice == "Rock"){ 
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "It's a draw...";
        }
        else if(computerChoice == "Paper"){
            computerScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "You lose! Paper beats Rock!";
        }
        else{
            humanScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "Rock beats Scissors... You win...";

        }
    }
    else if(humanChoice == "Paper"){
        if(computerChoice == "Rock"){
            humanScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "Paper beats Rock... You win...";
        }
        else if(computerChoice == "Paper"){
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "It's a draw...";
        }
        else{
            computerScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "You lose! Scissors beats Paper!";
        }
    }
    else{
        if(computerChoice == "Rock"){
            computerScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "You lose! Rock beats Scissors!";
        }
        else if(computerChoice == "Paper"){
            humanScore++;
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "Scissors beats Paper... You win...";   
        }
        else{
            scoreBoard.innerHTML = "Your score: " + humanScore + "<br>";
            scoreBoard.innerHTML += "Com Score: " + computerScore + "<br>";
            scoreBoard.innerHTML += "It's a draw...";
        }
    }
}

function checkWinner(){
    if(humanScore == 5){
        scoreBoard.textContent = "YOU WIN!";
        disableButtons();
        showRestart();
    }
    else if(computerScore == 5){
        scoreBoard.textContent = "YOU LOSE!";
        disableButtons();
        showRestart();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll("#choice button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButtions(){
    const buttons = document.querySelectorAll("#choice button");
    buttons.forEach(button => {
        button.disabled = false;
    });
}

const restartButton = document.querySelector("#restart");

function hideRestart(){
    restartButton.style.display = "none";
}

function showRestart(){
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", () =>{
    humanScore = 0;
    computerScore = 0;
    enableButtions();
    hideRestart();
    scoreBoard.innerHTML = "";
    botChoiceImage.innerHTML = '<img src="images/question-mark.jpg" alt="computer">';
});


const choice = document.querySelector("#choice");
choice.addEventListener("click", (event) => {
    let target = event.target;
    let playerSelection = "";

    if (target.tagName === "IMG") {
        target = target.parentElement; // Get the button if the image was clicked
    }

    switch(target.id){
        case "rock":
            playerSelection = "Rock";
            break;
        case "paper":
            playerSelection = "Paper";
            break;
        case "scissors":
            playerSelection = "Scissors";
            break;
    }

    playRound(playerSelection, getComputerChoice());
    checkWinner()
});

hideRestart();
