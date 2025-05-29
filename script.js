let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let rand = parseInt(Math.random()*10%3);
    if (rand == 0){
        return "rock";
    }
    else if (rand == 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice (){
    let pr = prompt("Please choose rock/paper/scissor: ");
    return pr;
}

function playRound (humanChoice, computerChoice){
    let result;
    if (humanChoice == computerChoice){
        result = "tie";
    }
    else{
        if (humanChoice == "rock"){
            if (computerChoice == "scissor") result = "win";
            else result = "lose";
        } 
        else if (humanChoice == "paper"){
            if (computerChoice == "rock") result = "win";
            else result = "lose";
        }
        else{
            if (computerChoice == "paper") result = "win";
            else result = "lose";
        }
    }
    
    if (result == "win") {
        humanScore += 1;
        return "You " + result + "! " + humanChoice + " beats " + computerChoice;
    }

    else if (result == "lose") {
        computerScore += 1;
        return "You " + result + "! " + computerChoice + " beats " + humanChoice; 
    }

    else{
        return "You " + result + "! No one wins or loses"; 
    }
}

function playGame (){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        console.log("You: " + humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);
        console.log(playRound(humanChoice, computerChoice));
    }

    console.log(`\nFinal Score — You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You are the ultimate winner!");
    }
    else if (humanScore == computerScore){
        console.log("It's a draw!");
    }
    else{
        console.log("The computer is the ultimate winner!");
    }
}

playGame();