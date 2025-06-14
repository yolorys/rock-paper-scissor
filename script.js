let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");

const body = document.querySelector("body");


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
    btns.forEach((button) => {
        button.addEventListener("click", () => {
            return button.innerHTML;
        })
    })
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
    const choices = document.createElement("p");
    choices.textContent = `You: ${humanChoice} VS Computer: ${computerChoice}`;
    body.appendChild(choices);

    const d = document.createElement("div");
    
    if (result == "win") {
        humanScore += 1;
        d.textContent = "You " + result + "! " + humanChoice + " beats " + computerChoice;
    }

    else if (result == "lose") {
        computerScore += 1;
        d.textContent = "You " + result + "! " + computerChoice + " beats " + humanChoice; 
    }

    else{
        d.textContent = "You " + result + "! No one wins or loses"; 
    }
    body.appendChild(d);

    const score = document.createElement("p");
    score.textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;
    body.appendChild(score);
}

btns.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.innerHTML;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        const winlose = document.createElement("h1");
        if (humanScore == 3) {
            winlose.textContent = "You won.";
        }
        if (computerScore == 3) {
            winlose.textContent = "Computer won. You lost.";
        }
        body.appendChild(winlose);
    });
});