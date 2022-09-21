const getComputerChoice = () => {
    let computerChoice = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = 'Rock';
    } else if (randomNum === 1) {
        computerChoice = 'Paper';
    } else if (randomNum === 2) {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   if (playerSelection === computerSelection) {
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. It is a tie!!`
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
        } else {
            return `Please, make a valid selection`
        }
}

const playGame = () => {
    for (let i =0; i < 5; i++) {
        console.log(playRound(prompt('Make your selection'), getComputerChoice()));
        console.log(`Your score: ${playerScore}. Computer's Score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log('You are the winner!!');
    } else if (playerScore < computerScore) {
        console.log('The computer triumphs!!');
    } else {
        console.log('It seems to be a tie.')
    }
}

playGame();