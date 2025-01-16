// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare the value of the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Display feedback for correct answer
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Display feedback for incorrect answer
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to choose an answer
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
