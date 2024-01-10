function getComputerChoice (){
  //Square brackets for strings
    let answers = [
        "rock",
        "paper",
        "scissors"
      ]
      
      let computerSelection = answers[Math.floor(Math.random() * answers.length)];
      
      return computerSelection;
    }

let computerSelection = getComputerChoice()
console.log(computerSelection)

function getPlayerSelection(){  
  let playerSelection = prompt('Weapon of choice? Rock, Paper or Scissors').toLowerCase();  
 
  return playerSelection;
}

let playerSelection = getPlayerSelection()
console.log(playerSelection);

function fight(playerSelection, computerSelection) {
  if ("rock" < "scissors")
    console.log("You Win")
  else
    console.log("You Lose")
}

fight()

