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
        qimg1 : "na",
        choiceA : "10",
        imgA : "na",
        choiceB : "5",
        imgB : "na",
        choiceC : "100",
        imgC : "na",
        choiceD : "7",
        imgD : "na",
        correct : "B",
	    questionTime : 30
    },{
        question : "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake? _____ days",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "24",
        imgA : "na",
        choiceB : "23",
        imgB : "na",
        choiceC : "47",
        imgC : "na",
        choiceD : "25",
        imgD : "na",
        correct : "C" ,
        questionTime : 30
    },{
        question : "You have a match, and you enter a wagon with a candle, a lamp, and a fireplace. Which one do you light first?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "Lamp",
        imgA : "na",
        choiceB : "Candle",
        imgB : "na",
        choiceC : "Fireplace",
        imgC : "na",
        choiceD : "Match",
        imgD : "na",
        correct : "D" ,
        questionTime : 30
    },{
        question : "Arun's present age in years is 40% of Barun's. In another few years, Arun's age will be half of Barun's. By what percentage will Barun's age increase during this period?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "30",
        imgA : "na",
        choiceB : "10",
        imgB : "na",
        choiceC : "20",
        imgC : "na",
        choiceD : "40",
        imgD : "na",
        correct : "C" ,
        questionTime : 30
    },{
        question : "OCEAN is to AENCO as 89653 is to:",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "85369",
        imgA : "na",
        choiceB : "56389",
        imgB : "na",
        choiceC : "56398",
        imgC : "na",
        choiceD : "65398",
        imgD : "na",
        correct : "C" ,
        questionTime : 30 
    },{
        question : "Tina, who is 16 years old is 4 times as old as her brother. How old will she be when she is twice old as he.",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "42",
        imgA : "na",
        choiceB : "24",
        imgB : "na",
        choiceC : "23",
        imgC : "na",
        choiceD : "32",
        imgD : "na",
        correct : "B" ,
        questionTime : 30
    },{
        question : "Which one of the numbers does not belong to the following series  : 2,3,6,7,8,14,15,30",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "3",
        imgA : "na",
        choiceB : "14",
        imgB : "na",
        choiceC : "6",
        imgC : "na",
        choiceD : "8",
        imgD : "na",
        correct : "D",
        questionTime : 30
    },{
        question : "If there are three oranges and you take away two of them, how many oranges do you have?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "1",
        imgA : "na",
        choiceB : "0",
        imgB : "na",
        choiceC : "2",
        imgC : "na",
        choiceD : "3",
        imgD : "na",
        correct : "A",
        questionTime : 30
    },{
        question : "An elevator has a weight limit of 640 kg. It is carrying a group of people of whom the heaviest weighs 57 kg and the lightest weighs 53 kg. What is the maximum possible number of people in the group?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "10",
        imgA : "na",
        choiceB : "12",
        imgB : "na",
        choiceC : "11",
        imgC : "na",
        choiceD : "13",
        imgD : "na",
        correct : "B" ,
        questionTime : 30
    },{
        question : "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets? _____ minutes",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "100",
        imgA : "na",
        choiceB : "1",
        imgB : "na",
        choiceC : "5",
        imgC : "na",
        choiceD : "10",
        imgD : "na",
        correct : "C" ,
        questionTime : 30
    },{
        question : "The number of girls appearing for an admission test is twice the number of boys. If 30% of the girls and 45% of the boys get admission, the percentage of candidates who do not get admission is:",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "35",
        imgA : "na",
        choiceB : "50",
        imgB : "na",
        choiceC : "60",
        imgC : "na",
        choiceD : "65",
        imgD : "na",
        correct : "D" ,
        questionTime : 30
    },{
        question : "If among 200 students, 105 like pizza and 134 like burger, then the number of students who like only burger can possibly be",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "26",
        imgA : "na",
        choiceB : "23",
        imgB : "na",
        choiceC : "96",
        imgC : "na",
        choiceD : "95",
        imgD : "na",
        correct : "D" ,
        questionTime : 60
    },{
        question : "A page is torn from a novel. The sum of the remaining page numbers is 10000. What are the two page-numbers on the torn page of this novel?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "76 and 77",
        imgA : "na",
        choiceB : "8 and 9",
        imgB : "na",
        choiceC : "6 and 7",
        imgC : "na",
        choiceD : "None of These",
        imgD : "na",
        correct : "A" ,
        questionTime : 90
    },{
        question : "What is the smallest number that has exactly 12 factors?",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "35",
        imgA : "na",
        choiceB : "60",
        imgB : "na",
        choiceC : "120",
        imgC : "na",
        choiceD : "144",
        imgD : "na",
        correct : "B" ,
        questionTime : 60
    },{
        question : "If a is x % of b, b is x% more than a. Find x.  (√5=2.236)",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "37",
        imgA : "na",
        choiceB : "50",
        imgB : "na",
        choiceC : "62",
        imgC : "na",
        choiceD : "70",
        imgD : "na",
        correct : "C" ,
        questionTime : 90
    },{
        question : "Which of the figures can be used to continue the series given below?",
        imgSrc : "iq.jpg",
        qimg1 : "img/pq1.gif",
        choiceA : "na",
        imgA : "img/pq1a.gif",
        choiceB : "na",
        imgB : "img/pq1b.gif",
        choiceC : "na",
        imgC : "img/pq1c.gif",
        choiceD : "na",
        imgD : "img/pq1d.gif",
        correct : "C" ,
        questionTime : 30
    },{
        question : "Which of the figures, you think best fits the series below?",
        imgSrc : "iq.jpg",
        qimg1 : "img/pq2.gif",
        choiceA : "na",
        imgA : "img/pq2a.gif",
        choiceB : "na",
        imgB : "img/pq2b.gif",
        choiceC : "na",
        imgC : "img/pq2c.gif",
        choiceD : "na",
        imgD : "img/pq2d.gif",
        correct : "A" ,
        questionTime : 60
    },{
        question : "Which of the figures, you think best fits the series below?",
        imgSrc : "iq.jpg",
        qimg1 : "img/pq3.gif",
        choiceA : "na",
        imgA : "img/pq3a.gif",
        choiceB : "na",
        imgB : "img/pq3b.gif",
        choiceC : "na",
        imgC : "img/pq3c.gif",
        choiceD : "na",
        imgD : "img/pq3d.gif",
        correct : "D" ,
        questionTime : 30
    },{
        question : "Pick the odd one out",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "na",
        imgA : "img/pq4a.gif",
        choiceB : "na",
        imgB : "img/pq4b.gif",
        choiceC : "na",
        imgC : "img/pq4c.gif",
        choiceD : "na",
        imgD : "img/pq4d.gif",
        correct : "C" ,
        questionTime : 60
    },{
        question : "Pick the odd one out",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "na",
        imgA : "img/pq5a.gif",
        choiceB : "na",
        imgB : "img/pq5b.gif",
        choiceC : "na",
        imgC : "img/pq5c.gif",
        choiceD : "na",
        imgD : "img/pq5d.gif",
        correct : "C" ,
        questionTime : 60
    },{
        question : "Pick the odd one out",
        imgSrc : "iq.jpg",
        qimg1 : "na",
        choiceA : "na",
        imgA : "img/pq6a.gif",
        choiceB : "na",
        imgB : "img/pq6b.gif",
        choiceC : "na",
        imgC : "img/pq6c.gif",
        choiceD : "na",
        imgD : "img/pq6d.gif",
        correct : "D" ,
        questionTime : 60
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
    let des=q.qimg1;
    if(des.endsWith(".gif"))
    {
        question.innerHTML = `<p>${q.question}</p><p><img src=${q.qimg1}></p>`;
    }
    else{
        question.innerHTML = "<p>" + q.question + "</p>";
    }
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    if((q.imgA).endsWith(".gif")){
        choiceA.innerHTML = `<img src=${q.imgA}>`;
    }
    else{
        choiceA.innerHTML = q.choiceA;
    }
    if((q.imgB).endsWith(".gif")){
        choiceB.innerHTML = `<img src=${q.imgB}>`;
    }
    else{
        choiceB.innerHTML = q.choiceB;
    }
    if((q.imgC).endsWith(".gif")){
        choiceC.innerHTML = `<img src=${q.imgC}>`;
    }
    else{
        choiceC.innerHTML = q.choiceC;
    }
    if((q.imgD).endsWith(".gif")){
        choiceD.innerHTML = `<img src=${q.imgD}>`;
    }
    else{
        choiceD.innerHTML = q.choiceD;
    }
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
	scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















