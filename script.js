const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
  fight ("rock");
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  fight ("paper");
})

const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
  fight ("scissors");
})

function getComputerSelection (){
    let answers = [
        "rock",
        "paper",
        "scissors"
      ]
      let computerSelection = answers[Math.floor(Math.random() * answers.length)];
      return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

function fight(playerSelection) {
  const computerSelection = getComputerSelection();
  const result = document.querySelector('#result');
  const score = document.querySelector('#score');

  if (playerSelection.includes("rock")  && (computerSelection.includes("scissors"))){
    result.textContent = "You win! Rock beats Scissors";
    playerScore ++;
  } else if (playerSelection.includes("rock")  && (computerSelection.includes("rock"))){
    result.textContent = "You draw!";
  } else if (playerSelection.includes("rock")  && (computerSelection.includes("paper"))){
    result.textContent = "You lose! Paper beats Rock";
    computerScore ++;
  } else if (playerSelection.includes("paper")  && (computerSelection.includes("scissors"))){
    result.textContent = "You lose! Scissors beats Paper";
    computerScore ++;
 } else if (playerSelection.includes("paper")  && (computerSelection.includes("paper"))){
    result.textContent = "You draw!";
 } else if (playerSelection.includes("paper")  && (computerSelection.includes("rock"))){
    result.textContent = "You win! Paper beats Rock";
    playerScore ++;
 } else if (playerSelection.includes("scissors")  && (computerSelection.includes("scissors"))){
    result.textContent = "You Draw!";
} else if (playerSelection.includes("scissors")  && (computerSelection.includes("rock"))){
    result.textContent = "You Lose! Rock beats Scissors";
    computerScore ++;
 } else if(playerSelection.includes("scissors")  && (computerSelection.includes("paper"))){
    result.textContent = "You Win! Scissors beats Paper";
    playerScore ++;
 }
  
  player.textContent = playerScore;
  computer.textContent = computerScore;

  if (playerScore === 5){
    alert("You Win!");
    location.reload();
}
  if (computerScore === 5){
    alert("You Lose!");
    location.reload();
}

}


