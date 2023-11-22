document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("gameArea").style.display = "block"; // Show game area
    let attempts = 5;
    document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries.`;

    document.getElementById("submitGuess").addEventListener("click", function() {
        const secretWord = 'tomato';
        let userGuess = document.getElementById("userGuess").value;

        if (userGuess.toLowerCase() === secretWord) {
            document.getElementById("resultMessage").textContent = 'Welcome to the secret loop world!';
            document.getElementById("gameArea").style.display = "none"; // Hide game area after correct guess
            return; // Exit the function to prevent further code execution
        }

        attempts--;
        if (attempts > 0) {
            document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries left.`;
        } else {
            document.getElementById("resultMessage").textContent = 'Access denied :(';
            document.getElementById("gameArea").style.display = "none"; // Hide game area after attempts are over
        }
    });
});
