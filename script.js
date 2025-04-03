
const choices = ["rock", "paper", "scissors", "microwave", "pencil"];
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("microwave")
const pencil = document.getElementById("pencil")
const buttons = document.querySelectorAll("button")
let player = document.getElementById("player")
let playerpick = 0
let player_score = document.getElementById("player_score")
let playerwins = 0
let computer = document.getElementById("computer")
let result = document.getElementById("result")
let cpu_score = document.getElementById("computer_score")
let cpuwins = 0
const resetbutton = document.getElementById("RESET")
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;


  // Function to play the game 
  const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const microwaveBtn = document.querySelector('.microwave');
      const playerOptions = [rockBtn, paperBtn, scissorBtn, ];
      const computerOptions = ['rock', 'paper', 'scissors']

      // Function to start playing game
      playerOptions.forEach(option => {
          option.addEventListener('click', function () {
              moves++;

              const choiceNumber = Math.floor(Math.random() * 3);
              const computerChoice = computerOptions[choiceNumber];

              // Function to check who wins
              winner(this.innerText, computerChoice)
              
          })
      })

  }

  // Decides the winner
  const winner = (player, computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
          result.textContent = 'Tie'
      }
      else if (player == 'rock') {
          if (computer == 'paper') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;

          } else {
              result.textContent = 'Player Won'
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if (player == 'scissors') {
          if (computer == 'rock') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
      else if (player == 'paper') {
          if (computer == 'scissors') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;
          } else {
              result.textContent = 'Player Won';
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
  }

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {

      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.reload');

      playerOptions.forEach(option => {
          option.style.display = 'none';
      })


      chooseMove.innerText = 'Game Over!!'
      movesLeft.style.display = 'none';

      if (playerScore > computerScore) {
          result.style.fontSize = '2rem';
          result.innerText = 'You Won The Game'
          result.style.color = '#308D46';
      }
      else if (playerScore < computerScore) {
          result.style.fontSize = '2rem';
          result.innerText = 'You Lost The Game';
          result.style.color = 'red';
      }
      else {
          result.style.fontSize = '2rem';
          result.innerText = 'Tie';
          result.style.color = 'grey'
      }
     
  }


  // Calling playGame function inside game
  playGame();

}
const reset = document.getElementById("reset")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        buttons.forEach(Element => {
            Element.style.display = "none"
            setTimeout(displayagain, 4500)
           
        })
    })
}

function reset() {
    computer.innerHTML = ""
    player.innerHTML = ""
    result.innerHTML = ""
    playerwins = 0
    cpuwins = 0
    player_score.innerHTML = "Player score: " + playerwins
    cpu_score.innerHTML = "Computer score: " + cpuwins
}
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

game();

paper.addEventListener("click",pickpaper)
rock.addEventListener("click",pickrock)
scissors.addEventListener("click",pickscissors)
microwave.addEventListener("click",pickmicrowave)
pencil.addEventListener("click",pickpencil)
player_score.innerHTML = player_score;

