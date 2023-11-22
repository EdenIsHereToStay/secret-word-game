let attempts = 5;
const secretWord = 'tomato';

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("gameArea").style.display = "block"; // Show game area
    attempts = 5; // Reset attempts each time game starts
    document.getElementById("userGuess").value = ''; // Clear previous guess
    document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries.`;
    document.getElementById("resultMessage").textContent = ''; // Clear previous message
});

document.getElementById("submitGuess").addEventListener("click", function() {
    let userGuess = document.getElementById("userGuess").value;

    if (userGuess.toLowerCase() === secretWord) {
        document.getElementById("resultMessage").textContent = 'Welcome to the secret loop world!';
        document.getElementById("gameArea").style.display = "none";
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries left.`;
        } else {
            document.getElementById("resultMessage").textContent = 'Access denied :(';
            document.getElementById("gameArea").style.display = "none";
        }
    }
});
