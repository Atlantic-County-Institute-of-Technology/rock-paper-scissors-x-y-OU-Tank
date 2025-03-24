const choices = ["rock", "paper", "scissors", "paper-shredder", "pencil"];
const playerScore = document.getElementByID("playerScore");
const computerScore = document.getElementById("computerScore");

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 5)];
  let result = "";

  if(playerChoice == computer){
    result = "IT'S A TIE";
  }
  else{
    switch(playerChoice){
      case "rock":
          result = (compuerChoice == "scissor") ? "You Win!" : "YOU LOSE!"
        break;
        case "paper":
          result = (compuerChoice == "rock") ? "You Win!" : "YOU LOSE!"
        break;
        case "scissor":
          result = (compuerChoice == "paper") ? "You Win!" : "YOU LOSE!"
        break;
         case "paper-shredder":
          result = (compuerChoice == "paper") ? "You Win!" : "YOU LOSE!"
        break;
        case "pencil":
          result = (compuerChoice == "paper-shredder") ? "You Win!" : "YOU LOSE!"
        break;
      }
    }
  playerScore.textContent = `Player ${playerScore}`;
  computerScore.textContent = `Computer ${computerScore}`;
  }

}
