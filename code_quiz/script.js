
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startQuiz = document.getElementById('start');
const question = document.getElementById('question');
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const questionOne = document.getElementById("questionOne");
const questionTwo = document.getElementById("questionTwo");
const questionThree = document.getElementById("questionThree");
const questionFour = document.getElementById("questionFour");
const questionFive = document.getElementById("questionFive");
const time = document.getElementById("timer");
const mistake = document.getElementById("mistakeCounter");

let startQuiz= "questionOne";

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration;
        }
        }, 1000);
    }
window.onload = function () {
    var fiveMinutes = 60 * 5, 
        display = document.querySelector('#time');
        this.startTimer(fiveMinutes, display);
};



//start the quiz by clicking the start quiz button
function startQuiz() {
    startQuiz
}





