// get HTML elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var subheader = document.getElementById("subheader");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var counter = document.getElementById("counter");
var timeBar = document.getElementById("timeBar");
var progress = document.getElementById("progress");
var mobileTimeBar = document.getElementById("mobileTimeBar");
var mobileProgress = document.getElementById("mobileProgress");
var scoreDiv = document.getElementById("scoreContainer");
var img1 = document.getElementById("img1");
var questionImg = document.getElementById("questionImg");
var imgContainer = document.getElementById('imgContainer')

// variables and questions
var questions = [{
        question: "What does CTRL + S do?",
        questionImg: './IMAGES/SPIDEY.jpg',
        choiceA: "Send the code to your boss",
        choiceB: "Supersets your project to finish in less time",
        choiceC: "Saves your code",
        choiceD: "Sounds off the alarm",
        correct: "c",
        correctResponce: "Great job! You know some shortcuts!",
        incorrectResponce: "Nope! S stands for Save!",
        timesUpResponce: "Time's Up! The correct answer was C!",
    }, {
        question: "What is Git hub?",
        questionImg: "./IMAGES/DRAKE 3.jpg",
        choiceA: "A place where you can git hubs",
        choiceB: "A software made by the Git Lab people minus the Lab",
        choiceC: "A cloud for companies ",
        choiceD: "A web-based version-control and collaboration platform for software developers",
        correct: "d",
        correctResponce: "Nice! You have used Git hub before!",
        incorrectResponce: "Wrong! Git hub is used by developers to work on projects.",
        timesUpResponce: "Uh oh! Time's up go check out Git hub!",
    },
    {
        question: "What does HTML stand for?",
        questionImg: "./IMAGES/HTMLCSS.jpg",
        choiceA: "HyperText Markup Language",
        choiceB: "How To Make Lines of code",
        choiceC: "Having to Manipulate Language",
        choiceD: "How the Madness Looks",
        correct: "a",
        correctResponce: "YOU KNOW YOUR STUFF!!!",
        incorrectResponce: "Nope! Now its your chance to use your GoogleFu",
        timesUpResponce: "Time's Up! HTML is HyperText Markup Language."
    },
    {
        question: "Can we create a website without HTML?",
        questionImg: "./IMAGES/TOBY.jpg",
        choiceA: "Not sure",
        choiceB: "Yes",
        choiceC: "Only on certain days",
        choiceD: "No unless you use to a website builder",
        correct: "d",
        correctResponce: "YOU GOT THIS!",
        incorrectResponce: "Incorrect! HTML is needed unles you have someone else do it for you",
        timesUpResponce: "Time's Up! YOU NEED HTML FOR HAND TYPED WEBSITES",
    },
    {
        question: "What does ABC stand for?",
        questionImg: "./IMAGES/IMG_1484.jpg",
        choiceA: "A Better Coder",
        choiceB: "Always Be Coding",
        choiceC: "A Better Code",
        choiceD: "Another Bracket Call",
        correct: "b",
        correctResponce: "Yes! You know your acrynyoms!",
        incorrectResponce: "Nope! Remember what Ollie said..",
        timesUpResponce: "Time's Up! Always Be CODING -LETS GO CODE NOW"
    },
    {
        question: "What is Javascript?",
        questionImg: "./IMAGES/JAVASCRIPT.jpg",
        choiceA: "a computer programming language that is gives developers headaches",
        choiceB: "it is like a more complicated JQuery",
        choiceC: "I DO NOT KNOW",
        choiceD: "a computer programming language commonly used to create interactive effects within web browsers",
        correct: "d",
        correctResponce: "Yes!!! JAVASCRIPT IS THE INTERACTIVE PART OF WEBPAGES",
        incorrectResponce: "Incorrect! but it's ok nnot to be OK",
        timesUpResponce: "Time's Up! The correct answer is that you JAVASUCK lol jk",
    },
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 15;
var barWidth = 700;
var barUnit = barWidth / questionTime;
var mobileBarWidth = 350;
var mobileBarUnit = mobileBarWidth / questionTime;
var barUnit = barWidth / questionTime;
var timer;
var score = 0;
var scorePerCent = "0";



start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    scoreDiv.textContent = "";
    imgContainer.setAttribute("src", "")
    scorePerCent = "0";
    lastQuestion = questions.length - 1;
    currentQuestion = 0;
    count = 0;
    timer;
    score = 0;
    currentQuestion = 0;
    score = 0;
    scoreDiv.setAttribute('style', 'display:none');
    imgContainer.setAttribute('style', 'display:none');
    start.style.display = "none";
    subheader.style.display = "none";
    img1.style.display = "none";
    nextQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter, 1000);
}

// next question
function nextQuestion() {

    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    questionImg.setAttribute("src", q.questionImg);
}


function renderCounter() {
    if (count <= questionTime) {
        timeBar.style.width = count * barUnit + "px"; //progess bar grow
        mobileTimeBar.style.width = count * mobileBarUnit + "px"; //progess bar grow
        counter.innerHTML = count;
        count++
    } else {
        count = 0;
        alert(questions[currentQuestion].timesUpResponce);
        currentQuestion++;
        nextQuestion()
    }
}



// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        // answer is correct
        score++;
        alert(questions[currentQuestion].correctResponce);
    } else if (answer != questions[currentQuestion].correct) {
        // answer is wrong 
        alert(questions[currentQuestion].incorrectResponce);
    }
    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        nextQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }

}



// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    start.style.display = "block";
    imgContainer.setAttribute("style", "block");

    // calculate the amount of question percent answered by the user
    scorePerCent = Math.round(100 * score / questions.length);


    var finalScore = ""
    var imgSource = ""

    if (scorePerCent >= 80) {
        finalScore = "Congrats! YOU KNOW THE BASICS OF CODING! Proud of you!";
        imgSource = "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif";
    } else if (scorePerCent >= 60) {
        finalScore = "Uh Oh! We should sign up for tutoring!!.";
        imgSource = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
    }



    scoreDiv.textContent = scorePerCent + "% " + finalScore;
    imgContainer.setAttribute("src", imgSource)

    var previousScores = localStorage.setItem("finalScore", scorePerCent);

}