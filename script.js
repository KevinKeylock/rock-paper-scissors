function getComputerChoice (){
  //Square brackets for strings
    let answers = [
        "rock",
        "paper",
        "scissors"
      ]
      
      let computerSelection = answers[Math.floor(Math.random() * answers.length)];
      
      console.log(computerSelection);
    }

getComputerChoice()

function getPlayerSelection(){
let playerSelection = prompt('Weapon of choice? Rock, Paper or Scissors').toLowerCase();
console.log(playerSelection);
}

getPlayerSelection()


