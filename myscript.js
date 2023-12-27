
function getComputerChoice() {

    const random = Math.floor(Math.random()*3) + 1;

    switch(random) {
        case 1:
            return `Rock`;
        case 2:
            return `Paper`;
        case 3:
            return `Scissor`;
    } 

}

function playRound(playerSelection, computerSelection) {
    
    switch(playerSelection) {
        case `Rock`:
            if (computerSelection === `Rock`) {
                return `Stalemate`;
            } else if (computerSelection === `Paper`) {
                return `You Lose! Paper beats Rock`;
            } else {
                return `You Win! Rock beats Scissor`;
            }
        case `Paper`:
            if (computerSelection === `Paper`) {
                return `Stalemate`;
            } else if (computerSelection === `Scissor`) {
                return `You Lose! Scissor beats Paper`;
            } else {
                return `You Win! Paper beats Rock`;
            }
        case `Scissor`:
            if (computerSelection === `Scissor`) {
                return `Stalemate`;
            } else if (computerSelection === `Rock`) {
                return `You Lose! Rock beats Scissor`;
            } else {
                return `You Win! Scissor beats Paper`;
            }         
    }

}

/*function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Rock, Paper or Scissor?`, ``);
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        
        if (result.substring(0, 8) === `You Win!`) {
            playerScore++;
        } else if (result.substring(0, 9) === `You Lose!`) {
            computerScore++;
        } else {
            console.log(`Same!`);
            playerScore++;
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Congrats! You Won!`);
    } else {
        console.log(`You Lost!`);
    }

}*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const playerScore = document.getElementById("player-score");
        const computerScore = document.getElementById("bot-score");
        const versusText = document.getElementById("versus-text");
        const ComputerChoice = getComputerChoice();
        const output = document.getElementById("output");
        const outputText = document.createElement("div");

        const result = playRound(button.textContent, ComputerChoice);
        console.log(result);

        if (+playerScore.textContent < 5 && +computerScore.textContent < 5) {
            if (result.substring(0, 8) === `You Win!`) {
                playerScore.textContent++;
                versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
                outputText.textContent = result;
            } else if (result.substring(0, 9) === `You Lose!`) {
                computerScore.textContent++;
                versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
                outputText.textContent = result;
            } else {
                versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
                outputText.textContent = result;
            }
        }
            if (+playerScore.textContent === 5) {
                outputText.textContent = "Congrats! You won the game."
            } else if (+computerScore.textContent === 5) {
                outputText.textContent = "You lost the game!"
            }
        output.appendChild(outputText);
    });
});
