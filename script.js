//html elements
const player_score = document.getElementById('player-score');
const computer_score = document.getElementById('computer-score');
const player_choice = document.getElementById('player-choice');
const computer_choice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const reset_button = document.getElementById('reset_button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const microwave = document.getElementById('microwave');
const pencil = document.getElementById('pencil');
const choices = document.querySelectorAll('.choice');

// score values
let player_score_value = 0;
let computer_score_value = 0;

// selection items 
const choices_items = ["rock", "paper", "scissors", "microwave", "pencil"];
// images fore the selection lsit 
const choice_icons = ['assets/rock.jpg',
                      'assets/paper.jpg',
                      'assets/scissors.jpg',
                      'assets/microwvae.jpg',
                      'assets/pencil.png']
  

  choices.forEach(choice => {
    choice.addEventListener('click', () => {
        check_winner((choices_list.indexOf(choice.id)+1), computer_choose_item());
    })
})

// for each item/button, 
function check_winner(player, computer) {
  console.log(`Player: ${player} | Computer: ${computer}`);
  let winner;
  // if the values are equal, tie
  if(player == computer)
  {
      winner = "Tie!"
  }
  // if player chose rock
  else if(player == 1) {
      // if computer chooses scissors or , player wins
      if(computer == 3 || computer == 4) {
          winner = "Player Wins!"
      }
      else 
          winner = "computer Wins!"

  }    

  else if(player == 2) {
   
      if(computer == 1 || computer == 5) {
          winner = "Player Wins!"
      }
      else 
          winner = "computer Wins!"
  }

  else if(player == 3) {
    
      if(computer == 2 || computer == 5) {
          winner = "Player Wins!"
      }
      else 
          winner = "computer Wins!"
  }
  else if(player == 4) {
      
      if(computer == 2 || comuter == 3) {
          winner = "Player Wins!"
      }
      else 
          winner = "computer Wins!"
  }
  else if(player == 5) {
      if(computer == 1 || computer == 4) {
          winner = "Player Wins!"
      }
      else 
          winner = "computer Wins!"
  }

  if(winner.match("Player Wins!")) {
      player_score_value++;
  }
  else if(winner.match("computer Wins!")) {
      computer_score_value++;
  }

  
  updateUI(player, computer, winner);
}


function updateUI(player, computer, winner) {
  result.textContent = winner;
  

  player_choice.innerHTML = '';
  computer_choice.innerHTML = '';
  

 
  let p_img = new Image();
  p_img.src = choice_icons[player-1];
  p_img.classList.add('choice_images'); 
  player_choice.appendChild(p_img); 


  let c_img = new Image();
  c_img.src = choice_icons[computer-1];
  c_img.classList.add('choice_images');
  computer_choice.appendChild(c_img);

  player_score.innerText = player_score_value;
  computer_score.innerText = computer_score_value;
}


function reset_game() {
  player_score_value = 0;
  computer_score_value = 0;
  
  updateUI('','',"Choose your weapon!");
  player_choice.innerHTML = '';
  computer_choice.innerHTML = '';
}
