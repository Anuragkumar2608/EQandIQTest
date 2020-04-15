// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "I can recognize my emotions as I experience them.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I don't lose my temper when I feel frustrated.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "People have told me that I'm a good listener.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I know how to calm myself down when I feel anxious or upset.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I enjoy organizing groups.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I dont't find it hard to focus on something over the long term.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I don't find it difficult to move on when I feel frustrated or unhappy.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I know my strengths and weaknesses.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I avoid conflict and negotiations.",
        imgSrc : "eq.jfif",
        choiceA : "Very Often",
        choiceB : "Often",
        choiceC : "Sometimes",
	    choiceD : "Rarely",
	    choiceE : "Not At All"
    },  {
        question : "I feel that I enjoy my work.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I ask people for feedback on what I do well, and how I can improve.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I set long-term goals, and review my progress regularly.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    },  {
        question : "I find it difficult to read other people's emotions.",
        imgSrc : "eq.jfif",
        choiceE : "Not At All",
        choiceD : "Rarely",
        choiceC : "Sometimes",
	    choiceB : "Often",
	    choiceA : "Very Often"
    },  {
        question : "I struggle to build rapport with others.",
        imgSrc : "eq.jfif",
        choiceE : "Not At All",
        choiceD : "Rarely",
        choiceC : "Sometimes",
	    choiceB : "Often",
	    choiceA : "Very Often"
    },  {
        question : "I use active listening skills when people speak to me.",
        imgSrc : "eq.jfif",
        choiceA : "Not At All",
        choiceB : "Rarely",
        choiceC : "Sometimes",
	    choiceD : "Often",
	    choiceE : "Very Often"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 60; // 10s
const gaugeWidth = 200; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;	
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == "A"){
        // answer is correct
        score=score+1;
        answerIsCorrect();
        // change progress color to green
    }else if(answer == "B"){
        score=score+2;
        answerIsCorrect();
    }else if(answer == "C"){
        score=score+3;
        answerIsCorrect();
    }else if(answer == "D"){
        score=score+4;
        answerIsCorrect();
    }else if(answer == "E"){
        score=score+5;
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user

    // choose the image based on the scorePerCent
    let img = (score >= 56) ? "You need to work on your emotional intelligence, you may find that you feel overwhelmed by your emotions especially in stressfull situations." :
              (score >= 35) ? "Your emotional intelligence level is... OK.You probably have good relationships with some people while not so good with others." :
              (score >= 15) ? "Great! You're an emotionally intelligent person. You have great relationships, and you probably find that people approach you for advice." :
              "Not in range";
    
    scoreDiv.innerHTML += "<p>"+ img +"</p>";
}





















