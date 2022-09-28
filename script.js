let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const content = document.createElement('div')
container.appendChild(content);
content.textContent = `Player's Score: ${playerScore}. Computer's score: ${computerScore}`;

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
    content.textContent = `Player's Score: ${playerScore}. Computer's score: ${computerScore}`;
    if (playerScore === 5) {
        await playRound();
        console.log('Player wins the match!!');
    } else if (computerScore === 5) {
        await playRound();
        console.log('Computer wins the match!!');
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (playerScore === 5 || computerScore === 5) {
        return 'This game is over. Please refresh the page to play again'
        }
    if (playerSelection === computerSelection) {
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. It is a tie!!`
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. The computer wins this round!`
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            updateScore();
            return `You chose: ${playerSelection}. The computer chose: ${computerSelection}. You win this round!`
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