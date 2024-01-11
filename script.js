function getPlayerSelection(){  
  let playerSelection = prompt('Weapon of choice? Rock, Paper or Scissors').toLowerCase();  
 
  return playerSelection;
}

function getComputerSelection (){
  //Square brackets for strings
    let answers = [
        "rock",
        "paper",
        "scissors"
      ]
      let computerSelection = answers[Math.floor(Math.random() * answers.length)];
      return computerSelection;
    }

let playerScore = 0
let computerScore = 0

function fight() {
  let playerSelection = getPlayerSelection()
  console.log(playerSelection);
  let computerSelection = getComputerSelection()
  console.log(computerSelection);
  if (playerSelection.includes("rock")  && (computerSelection.includes("scissors"))){
    alert("You win! Rock beats Scissors")
    playerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("rock")  && (computerSelection.includes("rock"))){
    alert("You draw!")
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("rock")  && (computerSelection.includes("paper"))){
    alert("You lose! Paper beats Rock")
    computerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore) }
  else if (playerSelection.includes("paper")  && (computerSelection.includes("scissors"))){
    alert("You lose! Scissors beats Paper")
    computerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("paper")  && (computerSelection.includes("paper"))){
    alert("You draw!")
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("paper")  && (computerSelection.includes("rock"))){
    alert("You win! Paper beats Rock")
    playerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("scissors")  && (computerSelection.includes("scissors"))){
    alert("You Draw!")
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("scissors")  && (computerSelection.includes("rock"))){
    alert("You Lose! Rock beats Scissors")
    computerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else if (playerSelection.includes("scissors")  && (computerSelection.includes("paper"))){
    alert("You Win! Scissors beats Paper")
    playerScore ++
    console.log ("Player has", playerScore + " computer has", computerScore)}
  else {
  alert("Please choose either Rock, Paper or Scissors")
  }
}

function game(){
fight()
fight()
fight()
fight()
fight()
if (playerScore > computerScore){
  alert("You Win!")
}
else if (playerScore < computerScore) {
  alert("You Lose!")
}
else{
  alert("It's a draw!")
}
}

game()