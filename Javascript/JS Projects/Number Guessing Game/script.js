// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function checkGuess() {
    // Get user's guess
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Get result element
    const resultElement = document.getElementById('result');

    // Check if user's guess is correct, higher, or lower than the random number
    if (userGuess === randomNumber) {
        resultElement.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = 'Too high! Try a lower number.';
    } else {
        resultElement.textContent = 'Too low! Try a higher number.';
    }
}
