
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

