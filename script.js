let playerScore = 0;
let computerScore = 0;

const scores = document.querySelector('#scores');
const computerScoreValue = document.querySelector('.computer')
const playerScoreValue = document.querySelector('.player')
const matchPlay = document.querySelector('.matchPlay')
const matchResult = document.querySelector('.matchResult')

const getComputerChoice = () => {
    let computerChoice = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = 'rock';
    } else if (randomNum === 1) {
        computerChoice = 'paper';
    } else if (randomNum === 2) {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

const updateScore = async () => {
    playerScoreValue.textContent = `Player's score: ${playerScore}`;
    computerScoreValue.textContent =  `Computer's score: ${computerScore}`;
    if (playerScore === 5) {
        matchResult.textContent = `Player wins the match!!`
    } else if (computerScore === 5) {
        matchResult.textContent = `Computer wins the match!!`
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (playerScore === 5 || computerScore === 5) {
        alert('This game is over. Please refresh the page to play again')
        return
        }
    if (playerSelection === computerSelection) {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. It is a tie!!`
            updateScore();
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
            computerScore++;
            updateScore();
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
            playerScore++;
            updateScore();
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round`
            computerScore++;
            updateScore();
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
            playerScore++;
            updateScore();
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
            computerScore++;
            updateScore();
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            matchPlay.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
            playerScore++;
            updateScore();
        } else {
            return `Please, make a valid selection`
        }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playerSelection = e.target.className;
    console.log(playRound(playerSelection, getComputerChoice()))
    });
});
