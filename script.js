const quizContainer = document.getElementById('quizContainer');
const responseButtons = document.querySelectorAll('.responseButton');
const submitButton = document.getElementById('submitButton');
const nameForm = document.getElementById('nameForm');
const nextButton = document.getElementById('nextQuestion');
const nameInput = document.getElementById('name');
const question = document.getElementById('question');
const response = document.getElementById('response');

const skylerDiv = document.getElementById('skyler');
const bransonDiv = document.getElementById('branson');

const unknownDiv = document.getElementById('unknown');

const questions = [
    {
        questionText: "Question 1?",
        responses: [
            "Response 1 for Question 1",
            "Response 2 for Question 1",
            "Response 3 for Question 1",
            "Response 4 for Question 1",
            "Response 5 for Question 1"
        ]
    },
    {
        questionText: "Question 2?",
        responses: [
            "Response 1 for Question 2",
            "Response 2 for Question 2",
            "Response 3 for Question 2",
            "Response 4 for Question 2",
            "Response 5 for Question 2"
        ]
    },
    // Repeat the above pattern for the other questions
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
    question.textContent = questions[index].questionText;
    response.textContent = " ";
    responseButtons.forEach((button, buttonIndex) => {
        
    button.style.display = 'inline-block';
    });
    nextButton.style.display = 'none'; // Hide next question button by default
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    //hides the opening form
    nameForm.style.display = 'none'; 

    //starts quiz
    quizContainer.style.display = 'block';
    displayQuestion(currentQuestionIndex);
});

responseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const responseIndex = index;
        if (responseIndex < questions[currentQuestionIndex].responses.length) {
            response.textContent = questions[currentQuestionIndex].responses[responseIndex];
            if (responseIndex === 4) {
                nextButton.style.display = 'block'; // Display next question button if Button 5 is pressed
            } else {
                nextButton.style.display = 'none';
            }
        }
    });
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex); 
    } else {
        // hide buttons
        responseButtons.forEach(button => {
            button.style.display = 'none';
        });

        nextButton.style.display = 'none';
        quizContainer.style.display = 'none';

        const name = nameInput.value.trim().toLowerCase();
        // display div based on name
        switch(name) {
            case 'skyler':
                skylerDiv.style.display = 'block';
                break;
            case 'branson':
                bransonDiv.style.display = 'block';
                break;
            // Add more cases for other names if needed
            default:
                unknownDiv.style.display = 'block';
        }
    }
});

displayQuestion(currentQuestionIndex);
