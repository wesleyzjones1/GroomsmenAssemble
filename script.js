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
const tylerDiv = document.getElementById('tyler');
const boogsDiv = document.getElementById('boogs');
const hbDiv = document.getElementById('hb');
const bubbaDiv = document.getElementById('bubba');
const nickDiv = document.getElementById('nick');
const benDiv = document.getElementById('ben');

const unknownDiv = document.getElementById('unknown');



let currentQuestionIndex = 0; //starts at the first question

const questions = [
    {
        questionText: "How awesome am I",
        responses: [
            `No you stink! Try again.`,
            "I'm almost offended, Try again.",
            "I know you're joking. Try again.",
            "Come on, I'm better then that. Try again.",
            `Thanks!`
        ],
        
        buttonText: [
            "You stink", 
            "Nacho Libre is cooler then you", 
            "You're ok", 
            "You're cooler then the beez kneez", 
            "You're the most awesome man alive"
        ]

    },
    {
        questionText: "How much do you love me?",
        responses: [
            "That's a lie, try again.",
            "Well thanks but try again.",
            "Not good enough for me, try again.",
            "If this is your answer then your in my top 100 favorite people, try again.",
            `Aww thanks, I knew you would say that.`
        ],
        
        buttonText: [
            "I hate you", 
            "You're tolerable", 
            "You're a nice guy", 
            "You're in my top 10 favorite people", 
            "You're the best guy in the world"
    ]

    },
    {
        questionText: "Do you think Corinne is right for me?",
        responses: [
            "I don't think you're gonna get a wedding invite.  You better try again.",
            "Moving you to the B list. Try again.",
            `C'mon, we both know she's better then that. Try again.`,
            "You're close, I think she's a litte better, try again.",
            "Yes, she's the best!"
        ],

        buttonText: [
            "No", 
            "I dont think so", 
            "There's a chance", 
            "She might be", 
            "Absolutely she is"]
        
    },
    {
        questionText: "How excited are you that me and Corinne are getting married?",
        responses: [
            "I know for a fact that I am not, try again.",
            "That's a grim look, try again.",
            "Honestly we probably will, but you should be more excited.  Try again.",
            "You should be even more excited, try again.",
            "I'm excited too. Its gonna be amazing!"
        ],
        
        buttonText: [
            "I think you're making a terrible decision", 
            "I hope you will make it", 
            "You're gonna struggle every day", 
            "I'm kind of excited", 
            "I'm so excited for you"]
        
    },
    {
        questionText: "Will you be coming to my wedding?",
        responses: [
            "Kissing a frog is pretty bad, I know you just clicked this to see what I would say.",
            "How could you say that to me, I want you to come, try again.",
            "Why aren't you sure??? Try again.",
            "I really want you to, please try again.",
            `Thank you, I'm so excited that you're coming.`
        ],
        
        buttonText: [
            "Absolutely not, I would rather kiss a frog", 
            "No, I dont want to come", 
            "I'm not really sure", 
            "not sure, I might be", 
            "Yes, of course I'll be coming to your wedding"]
        
    },
]; //end of array



function displayQuestion(index) {
    //display question
    const questionText = questions[index].questionText;
    question.textContent = questionText; //display button content

    response.textContent = " ";
    responseButtons.forEach((button, buttonIndex) => {
        button.textContent = questions[index].buttonText[buttonIndex]; // Set button text from buttonText array
        button.style.display = 'inline-block';
    });
    nextButton.style.display = 'none'; // Hide next question button by default
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    nameForm.style.display = 'none'; //hides the opening form

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
                nextButton.style.display = 'none'; //hide next question button if any other button is pressed
            }
        }
    });
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++; //goes to the next question
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex); 
    } else {
        //quiz is over so we hide the quiz
        nextButton.style.display = 'none';
        quizContainer.style.display = 'none';
        console.log("check for names");
        const name = nameInput.value.trim().toLowerCase();
        
        // display div based on name
        switch(name) {
            case 'skyler':
            case 'sky':
            skylerDiv.style.display = 'block';
            break;
        
            case 'branson':
            bransonDiv.style.display = 'block'
            break;

            case 'tyler':
            tylerDiv.style.display = 'block'
            break;

            case 'boogs':
            boogsDiv.style.display = 'block'
            break;

            case 'hb':
            case 'honey bear':
            case 'honeybear':
            case 'immanuel':
            case 'immanual':
            hbDiv.style.display = 'block'
            break;

            case 'bubba':
            case 'barak':
            case 'barack':
            bubbaDiv.style.display = 'block'
            break;

            case 'nic':
            case 'nick':
            case 'nicholas':
            nickDiv.style.display = 'block'
            break;

            case 'ben':
            case 'benjamin':
            benDiv.style.display = 'block'
            break;
            
            default:
            unknownDiv.style.display = 'block';
        }
    }
});

displayQuestion(currentQuestionIndex);
