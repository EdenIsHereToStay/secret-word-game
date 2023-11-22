// game.js
document.getElementById("startButton").addEventListener("click", function() {
    const secretWord = 'tomato';
    let message = 'Access denied :(';
    let attempts = 5;

    while (attempts > 0) {
        let guess = prompt(`Enter the secret word. You have ${attempts} tries.`);
        if (guess.toLowerCase() === secretWord) {
            message = 'Welcome to the secret loop world!';
            break;
        }
        attempts--;
    }

    alert(message);
});
