const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const rock = document.getElementById("computerRock");
const scissors = document.getElementById("computerScissors");
const paper = document.getElementById("computerPaper");
const userScoreDisplay = document.getElementById("userScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScore = 0;
let computerScore = 0;
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
    paper.style.display = 'none'
    scissors.style.display = 'none'
    rock.style.display = 'block'
    console.log(rock);
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
    paper.style.display = 'none'
    scissors.style.display = 'block'
    rock.style.display = 'none'
    console.log(scissors);
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
    paper.style.display = 'block'
    scissors.style.display = 'none'
    rock.style.display = 'none'
    console.log(paper);
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!';
    userScore++;
    console.log(userScore)

  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lose!';
    computerScore++;
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!';
    userScore++;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!';
    computerScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    userScore++;
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!';
    computerScore++;
  }
  resultDisplay.innerHTML = result;
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;

}