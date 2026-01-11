let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('game-result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetButton = document.getElementById('reset');

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

resetButton.addEventListener('click', resetGame);

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Start shooting animation
    const playerHand = document.getElementById('player-hand');
    const computerHand = document.getElementById('computer-hand');
    playerHand.classList.add('shooting');
    computerHand.classList.add('shooting');

    // After 3 seconds, reveal choices and result
    setTimeout(() => {
        playerHand.classList.remove('shooting');
        computerHand.classList.remove('shooting');

        playerHand.textContent = choiceEmojis[playerChoice];
        computerHand.textContent = choiceEmojis[computerChoice];

        const result = getResult(playerChoice, computerChoice);
        resultDisplay.textContent = result;

        if (result === 'You win!') {
            playerScore++;
        } else if (result === 'Computer wins!') {
            computerScore++;
        }

        updateScores();
    }, 3000);
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('player-hand').textContent = '🤜';
    document.getElementById('computer-hand').textContent = '🤛';
    resultDisplay.textContent = '';
}
