document.addEventListener('DOMContentLoaded', function() {
    const secretWord = 'tomato';
    let attempts;
    const gameArea = document.getElementById('gameArea');
    const attemptsInfo = document.getElementById('attemptsInfo');
    const resultMessage = document.getElementById('resultMessage');
    const userGuess = document.getElementById('userGuess');

    document.getElementById('startButton').addEventListener('click', function() {
        attempts = 5;
        gameArea.style.display = 'block';
        attemptsInfo.textContent = `You have ${attempts} tries.`;
        resultMessage.textContent = '';
        userGuess.value = '';
    });

    document.getElementById('submitGuess').addEventListener('click', function() {
        if (userGuess.value.toLowerCase() === secretWord) {
            resultMessage.textContent = 'Welcome to the secret loop world!';
            gameArea.style.display = 'none';
        } else {
            attempts--;
            if (attempts > 0) {
                attemptsInfo.textContent = `You have ${attempts} tries left.`;
            } else {
                resultMessage.textContent = 'Access denied :(';
                gameArea.style.display = 'none';
            }
        }
    });
});
