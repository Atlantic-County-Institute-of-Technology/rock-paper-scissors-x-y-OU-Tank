const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const papershredder = document.getElementById("paper shredder")
const pencil = document.getElementById("pencil")
const playerScore = document.getElementByID("playerScore");
const computerScore = document.getElementById("computerScore");
const buttons = documnet.querySelector("button")
let player = document.getElementById("player")
let computer = document.getElementById("computer")

for(let index =0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", ()=> {
        buttons.forEach( Element => {
            Element.style.display = "none"
    })
})
}