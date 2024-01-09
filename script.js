function getComputerChoice (){
    let answers = [
        "Rock",
        "Paper",
        "Scissors"
      ]
      
      let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      
      console.log(randomAnswer);
    }

getComputerChoice()
