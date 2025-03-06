const movementList = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3)
  return movementList[randomIndex]
}

const getHumanChoice = () => {
  return prompt('Make your move!')
}

let humanScore = 0
let computerScore = 0

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice == computerChoice) return

  if (humanChoice == 'paper') {
    computerChoice == 'rock' ? humanScore++ : computerScore++
  } else if (humanChoice == 'rock') {
    computerChoice == 'paper' ? computerScore++ : humanScore++
  } else if (humanChoice == 'scissors') {
    computerChoice == 'paper' ? humanScore++ : computerScore++
  }
}

const body = document.querySelector('body')
const btnRock = document.createElement('button')
const btnPaper = document.createElement('button')
const btnScissors = document.createElement('button')

const btnGroup = document.createElement('div')
btnGroup.classList.add('btn-group')
body.appendChild(btnGroup)

btnRock.textContent = 'Rock'
btnPaper.textContent = 'Paper'
btnScissors.textContent = 'Scissors'

const btnArray = [btnRock, btnPaper, btnScissors]
const resultDiv = document.createElement('div')
body.appendChild(resultDiv)
resultDiv.textContent = `human: ${humanScore}, computer: ${computerScore}`

const clickEventFn = (e) => {
  const humanSelection = e.target.textContent.toLowerCase()
  const computerSelection = getComputerChoice()
  playRound(humanSelection, computerSelection)
}
for (let i = 0; i < 3; i++) {
  btnGroup.appendChild(btnArray[i])
  btnArray[i].addEventListener('click', (e) => {
    clickEventFn(e)
    resultDiv.textContent = `human: ${humanScore}, computer: ${computerScore}`

    if (humanScore == 5 || computerScore == 5) {
      alert(`${humanScore == 5 ? 'human' : 'computer'} is the winner!`)
      humanScore = 0
      computerScore = 0
      resultDiv.textContent = `human: ${humanScore}, computer: ${computerScore}`
    }
  })
}
