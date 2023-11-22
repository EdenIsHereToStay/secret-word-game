// game.js
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("gameArea").style.display = "block";
    let attempts = 5;
    document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries.`;

    document.getElementById("submitGuess").addEventListener("click", function() {
        const secretWord = 'tomato';
        let userGuess = document.getElementById("userGuess").value;

        if (userGuess.toLowerCase() === secretWord) {
            document.getElementById("resultMessage").textContent = 'Welcome to the secret loop world!';
            document.getElementById("gameArea").style.display = "none";
        } else {
            attempts--;
            document.getElementById("attemptsInfo").textContent = `You have ${attempts} tries left.`;
            if (attempts <= 0) {
                document.getElementById("resultMessage").textContent = 'Access denied :(';
                document.getElementById("gameArea").style.display = "none";
            }
        }
    });
});
