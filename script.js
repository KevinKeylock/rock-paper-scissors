function getPlayerSelection(){  
  let playerSelection = prompt('Weapon of choice? Rock, Paper or Scissors').toLowerCase();  
 
  return playerSelection;
}

const playerSelection = getPlayerSelection()
console.log(playerSelection);

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

const computerSelection = getComputerChoice()
console.log(computerSelection)


