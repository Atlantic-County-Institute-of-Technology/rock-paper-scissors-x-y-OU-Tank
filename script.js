
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
const resetbutton = document.getElementById("reset")

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(choices);


function playRound(playerSelection, computerSelection) {


  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "microwave" && computerSelection === "pencil") ||
    (playerSelection === "pencil" && computerSelection === "")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

paper.addEventListener("click", () => {
  console.log("Acionlistener call")
  result.innerText = playRound("paper", getComputerChoice())
})
rock.addEventListener("click",playRound)
scissor.addEventListener("click",playRound)
microwave.addEventListener("click",playRound)
pencil.addEventListener("click",playRound)
 
 

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
  
    const computerSelection = getComputerChoice();
    // const result = playRound("PlayerSelection, ComputerSelection");
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

function reset() {
  computer.innerHTML = ""
  player.innerHTML = ""
  result.innerHTML = ""
  playerwins = 0
  cpuwins = 0
  player_score.innerHTML = "Player score: " + playerwins
  cpu_score.innerHTML = "Computer score: " + cpuwins
}

