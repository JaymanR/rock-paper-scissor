
function getComputerChoice() {

    const random = Math.floor(Math.random()*3) + 1;
    console.log(random);

    switch(random) {
        case 1:
            return `rock`;
        case 2:
            return `paper`;
        case 3:
            return `scissor`;
    } 

}

function playRound(playerSelection, computerSelection) {
    
    switch(playerSelection.toLowerCase()) {
        case `rock`:
            if (computerSelection === `rock`) {
                return `Stalemate`;
            } else if (computerSelection === `paper`) {
                return `You Lose! Paper beats Rock`;
            } else {
                return `You Win! Rock beats Scissor`;
            }
        case `paper`:
            if (computerSelection === `paper`) {
                return `Stalemate`;
            } else if (computerSelection === `scissor`) {
                return `You Lose! Scissor beats Paper`;
            } else {
                return `You Win! Paper beats Rock`;
            }
        case `scissor`:
            if (computerSelection === `scissor`) {
                return `Stalemate`;
            } else if (computerSelection === `rock`) {
                return `You Lose! Rock beats Scissor`;
            } else {
                return `You Win! Scissor beats Paper`;
            }         
    }

}

function game() {
    let playerScore, computerScore;

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

}

