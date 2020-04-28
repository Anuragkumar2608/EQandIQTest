const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const questionTime = document.getElementById("questionTime");
let questions = [
    {
        question : "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost? _____ cents",
        imgSrc : "iq.jpg",
        choiceA : "10",
        choiceB : "5",
        choiceC : "100",
	    choiceD : "7",
        correct : "B",
	    questionTime : 30
    },{
        question : "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake? _____ days",
        imgSrc : "iq.jpg",
        choiceA : "24",
        choiceB : "23",
        choiceC : "47",
	    choiceD : "25",
        correct : "C" ,
        questionTime : 30
    },{
        question : "You have a match, and you enter a wagon with a candle, a lamp, and a fireplace. Which one do you light first?",
        imgSrc : "iq.jpg",
        choiceA : "Lamp",
        choiceB : "Candle",
        choiceC : "Fireplace",
	    choiceD : "Match",
        correct : "D" ,
        questionTime : 30
    },{
        question : "Arun's present age in years is 40% of Barun's. In another few years, Arun's age will be half of Barun's. By what percentage will Barun's age increase during this period?",
        imgSrc : "iq.jpg",
        choiceA : "30",
        choiceB : "10",
        choiceC : "20",
	    choiceD : "40",
        correct : "C" ,
        questionTime : 30
    },{
        question : "OCEAN is to AENCO as 89653 is to:",
        imgSrc : "iq.jpg",
        choiceA : "85369",
        choiceB : "56389",
        choiceC : "56398",
	    choiceD : "65398",
        correct : "C" ,
        questionTime : 30 
    },{
        question : "Tina, who is 16 years old is 4 times as old as her brother. How old will she be when she is twice old as he.",
        imgSrc : "iq.jpg",
        choiceA : "42",
        choiceB : "24",
        choiceC : "23",
	    choiceD : "32",
        correct : "B" ,
        questionTime : 30
    },{
        question : "Which one of the numbers does not belong to the following series  : 2,3,6,7,8,14,15,30",
        imgSrc : "iq.jpg",
        choiceA : "3",
        choiceB : "14",
        choiceC : "6",
	    choiceD : "8",
        correct : "D",
        questionTime : 30
    },{
        question : "If there are three oranges and you take away two of them, how many oranges do you have?",
        imgSrc : "iq.jpg",
        choiceA : "1",
        choiceB : "0",
        choiceC : "2",
	    choiceD : "3",
        correct : "A",
        questionTime : 30
    },{
        question : "An elevator has a weight limit of 640 kg. It is carrying a group of people of whom the heaviest weighs 57 kg and the lightest weighs 53 kg. What is the maximum possible number of people in the group?",
        imgSrc : "iq.jpg",
        choiceA : "10",
        choiceB : "12",
        choiceC : "11",
	    choiceD : "13",
        correct : "B" ,
        questionTime : 30
    },{
        question : "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets? _____ minutes",
        imgSrc : "iq.jpg",
        choiceA : "100",
        choiceB : "1",
        choiceC : "5",
	    choiceD : "10",
        correct : "C" ,
        questionTime : 30
    },{
        question : "The number of girls appearing for an admission test is twice the number of boys. If 30% of the girls and 45% of the boys get admission, the percentage of candidates who do not get admission is:",
        imgSrc : "iq.jpg",
        choiceA : "35",
        choiceB : "50",
        choiceC : "60",
	    choiceD : "65",
        correct : "D" ,
        questionTime : 30
    },{
        question : "If among 200 students, 105 like pizza and 134 like burger, then the number of students who like only burger can possibly be",
        imgSrc : "iq.jpg",
        choiceA : "26",
        choiceB : "23",
        choiceC : "96",
	    choiceD : "95",
        correct : "D" ,
        questionTime : 60
    },{
        question : "A page is torn from a novel. The sum of the remaining page numbers is 10000. What are the two page-numbers on the torn page of this novel?",
        imgSrc : "iq.jpg",
        choiceA : "76 and 77",
        choiceB : "8 and 9",
        choiceC : "6 and 7",
	    choiceD : "None of These",
        correct : "A" ,
        questionTime : 90
    },{
        question : "What is the smallest number that has exactly 12 factors?",
        imgSrc : "iq.jpg",
        choiceA : "35",
        choiceB : "60",
        choiceC : "120",
	    choiceD : "144",
        correct : "B" ,
        questionTime : 60
    },{
        question : "If a is x % of b, b is x% more than a. Find x.  (√5=2.236)",
        imgSrc : "iq.jpg",
        choiceA : "37",
        choiceB : "50",
        choiceC : "62",
	    choiceD : "70",
        correct : "C" ,
        questionTime : 90
    }
];


let i=0;
let total=0;
for(i;i<questions.length;i++)
{
	total=total + questions[i].questionTime/30;
}

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let q = questions[runningQuestion];
let questionT=q.questionTime// 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionT;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;	
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter(){
	let q=questions[runningQuestion];
    if(count <= q.questionTime){
        counter.innerHTML = q.questionTime-count;
        timeGauge.style.width = count * (150/q.questionTime) + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

function checkAnswer(answer){
    let q=questions[runningQuestion];
    if( answer == questions[runningQuestion].correct){
        score=score+q.questionTime/30;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";

    const scorePerCent = Math.round(100 * score/total);
    
   /* let img = (scorePerCent >= 80) ? "Your IQ is greater than 140." :
		(scorePerCent >= 70) ? "Your IQ lies between 130 and 140." :
              (scorePerCent >= 60) ? "Your IQ lies between 120 and 130." :
		(scorePerCent >= 50) ? "Your IQ lies between 110 and 120." :
              (scorePerCent >= 45) ? "Your IQ lies between 100 and 110." :
              (scorePerCent >= 40) ? "Your IQ lies between 90 and 100." :
		(scorePerCent >= 30) ? "Your IQ lies between 80 and 90." :
		(scorePerCent >= 20) ? "Your IQ lies between 70 and 80." :
              "Your IQ is less than 70.";  */
    
    //scoreDiv.innerHTML += "<p>"+ img +"</p>";
	scoreDiv.innerHTML += "<p>"+ scorePerCent +"</p>";
}





















