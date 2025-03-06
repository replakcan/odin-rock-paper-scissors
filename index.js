const movementList = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * 3)
  return movementList[randomIndex]
}

const getHumanChoice = () => {
  return prompt('Make your move!')
}

const playGame = () => {
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
    console.log(`human: ${humanScore} computer: ${computerScore}`)
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice().toLowerCase()
    console.log(humanSelection)
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    playRound(humanSelection, computerSelection)
  }

  humanScore == computerScore
    ? console.log('it is a DRAW!')
    : humanScore > computerScore
    ? console.log('human won!')
    : console.log('computer won!')
}

playGame()
