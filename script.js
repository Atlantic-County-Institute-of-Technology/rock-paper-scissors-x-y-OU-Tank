const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scissors = document.getElementById("scissors")
const microwave = document.getElementById("paper shredder")
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
const reset = document.getElementById("reset")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        buttons.forEach(Element => {
            Element.style.display = "none"
            setTimeout(displayagain, 4500)
           
        })
    })
}
function displayagain(){
        buttons.forEach(Element => {
            Element.style.display = "flex"
        })
}

function computerchoice() {
    return Math.floor(Math.random() * (4.99)) + 1
     
}


function pickpaper() {
    player.innerHTML = '<img src="assets/paper.jpg" alt="" class="display">';
     playerpick = 1
    cpuchoice = computerchoice()
     computer.innerHTML = ""
    setTimeout(papercheck1, 1500)
     
}
function papercheck1(){
    if (cpuchoice == 1 ) {
        computer.innerHTML = '<img src="assets/paper.jpg" alt="" class="cpu_display">';
        result.innerHTML = "It's A Draw!";
       
     } else if(cpuchoice == 2) {
        computer.innerHTML = '<img src="assets/rock.jpg" alt="" class="cpu_display">'
        result.innerHTML = "You Win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if(cpuchoice == 3) {
        computer.innerHTML = '<img src="assets/scissors.png" alt="" class="cpu_display">'
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins

     } else if(cpuchoice == 4) {
        computer.innerHTML = '<img src="assets/microwave.jpg" alt="" class="cpu_display_micro">'
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if (cpuchoice == 5) {
        computer.innerHTML = '<img src="assets/pencil.jpg" alt="" class="pencil_display">'
        result.innerHTML = "You Win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     }
}
function pickrock() {
    player.innerHTML = '<img src="assets/rock.jpg" alt="" class="display">'
    cpuchoice = computerchoice()

     
     computer.innerHTML = ""
    setTimeout(rockcheck1, 1500)
     
}
function rockcheck1(){
    if (cpuchoice == 1 ) {
        computer.innerHTML = '<img src="assets/paper.jpg" alt="" class="cpu_display">';
        result.innerHTML = "Paper Covers Rock, You Lose!";
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 2) {
        computer.innerHTML = '<img src="assets/rock.jpg" alt="" class="cpu_display">'
        result.innerHTML = "It's a draw!"
       
     } else if(cpuchoice == 3) {
        computer.innerHTML = '<img src="assets/scissors.jpg" alt="" class="cpu_display">'
        result.innerHTML = "Rock Crushes Scissors, You win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins

     } else if(cpuchoice == 4) {
        computer.innerHTML = '<img src="assets/microwave.jpg" alt="" class="cpu_display_micro">'
        result.innerHTML = "Rock Crushes Microwave, You win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if (cpuchoice == 5) {
        computer.innerHTML = '<img src="assets/pencil.jpg" alt="" class="pencil_display">'
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     }
}
function pickscissors() {
    player.innerHTML = '<img src="assets/scissors.jpg" alt="" class="display">'
    cpuchoice = computerchoice()
    computer.innerHTML = ""
   setTimeout(scissorscheck1, 1500)
   
}
function scissorscheck1(){
    setTimeout(scissorscheck2, 3000)
     if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.jpg" alt="" class="cpu_display">';
       
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.jpg" alt="" class="cpu_display">'
       
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.jpg" alt="" class="cpu_display">'
       
       
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.jpg" alt="" class="cpu_display_micro">'
       
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/pencil.jpg" alt="" class="pencil_display">'
       
    }
}
function scissorscheck2(){
    if (cpuchoice == 1 ) {
       
        result.innerHTML = "You Win!";
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if(cpuchoice == 2) {
       
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 3) {
       
        result.innerHTML = "It's a draw!"
       
     } else if(cpuchoice == 4) {
       
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if (cpuchoice == 5) {
       
        result.innerHTML = "You win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     }
}
function pickmicrowave() {
    player.innerHTML = '<img src="assets/microwave.jpg" alt="" class="display_micro">'
    cpuchoice = computerchoice()
    computer.innerHTML = ""
   setTimeout(microwavecheck1, 1500)
   
    }

function microwavecheck1(){
     if (cpuchoice == 1 ) {
       computer.innerHTML = '<img src="assets/paper.jpg" alt="" class="cpu_display">';
       result.innerHTML = "You win!";
       playerwins++;
       player_score.innerHTML = "Player score: " + playerwins
    } else if(cpuchoice == 2) {
       computer.innerHTML = '<img src="assets/rock.jpg" alt="" class="cpu_display">'
       result.innerHTML = "You lose!"
       cpuwins++
       cpu_score.innerHTML = "Computer score: " + cpuwins
    } else if(cpuchoice == 3) {
       computer.innerHTML = '<img src="assets/scissors.jpg" alt="" class="cpu_display">'
       result.innerHTML = "You Win!"
       playerwins++;
       player_score.innerHTML = "Player score: " + playerwins
    } else if(cpuchoice == 4) {
       computer.innerHTML = '<img src="assets/microwave.jpg" alt="" class="cpu_display_micro">'
       result.innerHTML = "It's a draw!"
       
    } else if (cpuchoice == 5) {
       computer.innerHTML = '<img src="assets/tin_foil.jpg" alt="" class="tin_display">'
       result.innerHTML = "Tin Foil explodes Microwave, You Lose!"
       cpuwins++
       cpu_score.innerHTML = "Computer score: " + cpuwins
    }
}
function pickpencil() {
   
   

     computer.innerHTML = ""
    setTimeout(pencilcheck1, 1500)
   
}
function pencilcheck1(){
    if (cpuchoice == 1 ) {
        computer.innerHTML = '<img src="assets/paper.jpg alt="" class="cpu_display">';
        result.innerHTML = "You Lose!";
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 2) {
        computer.innerHTML = '<img src="assets/rock.jpg" alt="" class="cpu_display">'
        result.innerHTML = "You Win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if(cpuchoice == 3) {
        computer.innerHTML = '<img src="assets/scissors.jpg" alt="" class="cpu_display">'
        result.innerHTML = "You Lose!"
        cpuwins++
        cpu_score.innerHTML = "Computer score: " + cpuwins
     } else if(cpuchoice == 4) {
        computer.innerHTML = '<img src="assets/microwave.jpg" alt="" class="cpu_display_micro">'
        result.innerHTML = "You Win!"
        playerwins++;
        player_score.innerHTML = "Player score: " + playerwins
     } else if (cpuchoice == 5) {
        computer.innerHTML = '<img src="assets/pencil.jpg" alt="" class="tin_display">'
        result.innerHTML = "It's a draw!"
       
     }
}
function Clear() {
    computer.innerHTML = ""
    player.innerHTML = ""
    result.innerHTML = ""
    playerwins = 0
    cpuwins = 0
    player_score.innerHTML = "Player score: " + playerwins
    cpu_score.innerHTML = "Computer score: " + cpuwins
}

paper.addEventListener("click",pickpaper)
rock.addEventListener("click",pickrock)
scissors.addEventListener("click",pickscissors)
microwave.addEventListener("click",pickmicrowave)
pencil.addEventListener("click",pickpencil)
