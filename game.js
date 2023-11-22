// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize game variables
    const secretWord = 'tomato';
    let attempts;
    const gameArea = document.getElementById('gameArea');
    const attemptsInfo = document.getElementById('attemptsInfo');
    const resultMessage = document.getElementById('resultMessage');
    const userGuess = document.getElementById('userGuess');

    // Start the game
    document.getElementById('startButton').addEventListener('click', function() {
        // Reset the game state
        attempts = 5;
        gameArea.style.display = 'block';
        attemptsInfo.textContent = `You have ${attempts} tries.`;
        resultMessage.textContent = '';
        userGuess.value = '';
        userGuess.focus(); // Focus on input field
    });

    // Handle guess submission
    document.getElementById('submitGuess').addEventListener('click', function() {
        // Check if the guess is correct
        if (userGuess.value.toLowerCase() === secretWord) {
            resultMessage.textContent = 'Congratulations!';
            gameArea.style.display = 'none';
        } else {
            // Decrement attempts and update UI
            attempts--;
            if (attempts > 0) {
                attemptsInfo.textContent = `You have ${attempts} tries left.`;
            } else {
                // Handle game over state
                resultMessage.textContent = 'Access denied :(';
                gameArea.style.display = 'none';
            }
        }
    });
});
