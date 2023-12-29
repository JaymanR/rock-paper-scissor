function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      return `Rock`;
    case 2:
      return `Paper`;
    case 3:
      return `Scissor`;
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
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

function playAgainBtn(parentNode, versusText, playerScore, computerScore) {
  const playAgainButton = document.createElement("button");
  playAgainButton.id = "play-again";
  playAgainButton.textContent = "Play Again";
  playAgainButton.onclick = () => {
    playAgainButton.parentNode.remove();
    playerScore.textContent -= playerScore.textContent;
    computerScore.textContent -= computerScore.textContent;
    versusText.textContent = "v.s.";
  };
  parentNode.appendChild(playAgainButton);
}

const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("bot-score");
    const versusText = document.getElementById("versus-text");
    const ComputerChoice = getComputerChoice();
    const playAgainCheck = document.getElementById("play-again");

    let outputColumn = document.getElementById("output-text-column");

if (!outputColumn) {
    outputColumn = document.createElement("div");
    outputColumn.id = "output-text-column";
    output.appendChild(outputColumn);
  }

    const outputText = document.createElement("p");

    const result = playRound(button.textContent, ComputerChoice);

    if (playAgainCheck) return;
    else if (+playerScore.textContent < 5 && +computerScore.textContent < 5) {
      if (result.substring(0, 8) === `You Win!`) {
        playerScore.textContent++;
        versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
        outputText.textContent = result;
        outputColumn.appendChild(outputText);
      } else if (result.substring(0, 9) === `You Lose!`) {
        computerScore.textContent++;
        versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
        outputText.textContent = result;
        outputColumn.appendChild(outputText);
      } else {
        versusText.textContent = `${button.textContent} v.s. ${ComputerChoice}`;
        outputText.textContent = result;
        outputColumn.appendChild(outputText);
      }
    }

    if (playAgainCheck) return;
    else if (+playerScore.textContent === 5) {
      outputText.textContent = "Congrats! You won the game.";
      outputColumn.appendChild(outputText);
      playAgainBtn(outputColumn, versusText, playerScore, computerScore);

    } else if (+computerScore.textContent === 5) {
      outputText.textContent = "You lost the game!";
      outputColumn.appendChild(outputText);
      playAgainBtn(outputColumn, versusText, playerScore, computerScore);

    }

  });
});
