// List of questions and answers
const questions = [
    {
        question: "Guess the agent's ability:",
        answer: "Aftershock",
    },
    {
        question: "Guess the agent that has this ability:",
        answer: "Breach",
    },
    {
        question: "Guess the name of the weapon's appearance:",
        answer: "Oni phantom",
    },
    {
        question: "Guess the agent saying the quote: 'You want to play? Let's play.'",
        answer: "Chamber",
    },
    {
        question: "Guess the graffiti:",
        answer: "What's That?",
    },
    {
        question: "Guess the name of the picture on the player's card:",
        answer: "Cosmic Origin",
    },
];

// Initialize game variables
let currentQuestion = 0;
let numGuesses = 0;
let numCorrect = 0;
let score = 0;
let highscores = [];

// Display the current question and guess input
function displayQuestion() {
    const questionDiv = document.getElementById("question");
    questionDiv.innerHTML = questions[currentQuestion].question;
    const guessDiv = document.getElementById("guess");
    guessDiv.innerHTML = `<input type="text" id="guess-input" name="guess" placeholder="Enter your guess">`;
}

// Check the user's guess and display the result
function checkAnswer() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase().trim();
    guessInput.value = "";
    numGuesses++;
    if (guess === questions[currentQuestion].answer.toLowerCase()) {
        numCorrect++;
        score += 100;
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Correct!</p>`;
    } else {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Incorrect. Try again.</p>`;
    }
    if (numGuesses >= 5) {
        numGuesses = 0;
        currentQuestion++;
    }
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

// End the game and display the final score and highscores
function endGame() {
    const scoreDiv = document.getElementById("score");
}