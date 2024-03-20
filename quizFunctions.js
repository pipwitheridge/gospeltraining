var checkedOptions = []; 
var currentQuestion = 0;

const refreshQuestions = function(quizData) {
    checkedOptions = [];
    document.getElementById("options").innerHTML = "";
    document.getElementById("questionNo").innerHTML = quizData[currentQuestion].questionNo;
    document.getElementById("question").innerHTML = quizData[currentQuestion].question;
    document.getElementById("correctMessage").innerHTML = quizData[currentQuestion].correctMessage;
    quizData[currentQuestion].options.forEach((thing) => {
        var newOption = document.createElement('div');
        newOption.innerHTML = thing;
        newOption.setAttribute("id", thing);
        newOption.setAttribute("class", "optionButton");
        newOption.onclick = () => {
            if(checkedOptions.includes(thing)) {
                checkedOptions = checkedOptions.filter(item => item !== thing);
                newOption.removeAttribute("class", "optionButtonSelected");
                newOption.setAttribute("class", "optionButton");
            }
            else {
                checkedOptions.push(thing);
                newOption.removeAttribute("class", "optionButton");
                newOption.setAttribute("class", "optionButtonSelected");
            }
        }
        document.getElementById("options").appendChild(newOption);
    })
    if(quizData[currentQuestion].answer.length > 1) {
        document.getElementById("questionNote").innerHTML = "Select all that apply.";
    }
} 

const handleProgressClick = (quizData) => {
    const allCorrect = checkedOptions.every((thing) => quizData[currentQuestion].answer.includes(thing));
    const checkingAnswer = document.getElementById("nextButton").innerHTML === "Check Answer"
    const tryingAgain = document.getElementById("nextButton").innerHTML === "Try Again" 
    const nextQuestion = document.getElementById("nextButton").innerHTML === "Next Question" 
    const finishingQuiz = document.getElementById("nextButton").innerHTML === "Finish Quiz" 
    const correctAnswerLength = checkedOptions.length === quizData[currentQuestion].answer.length;
    const finalQuestion = currentQuestion === quizData.length-1;
    if(!allCorrect && checkingAnswer || !correctAnswerLength) {
        document.getElementById("nextButton").innerHTML = "Try Again";
        checkedOptions.forEach((thing) => {
            if(quizData[currentQuestion].answer.includes(thing)) {
                document.getElementById(thing).style.backgroundColor = "rgb(255, 236, 179)";
            }
            else {
                document.getElementById(thing).style.backgroundColor = "rgb(255, 102, 102)";
            }
        })
    }
    if(tryingAgain) {
        document.getElementById("nextButton").innerHTML = "Check Answer";
        checkedOptions.forEach((thing) => {
            document.getElementById(thing).style.backgroundColor = "rgb(241, 241, 241)";
        });
        refreshQuestions(quizData);
    }
    if(correctAnswerLength && allCorrect && checkingAnswer) {
        document.getElementById("correctMessage").style.display = "";
        checkedOptions.forEach((thing) => {
            document.getElementById(thing).style.backgroundColor = "rgb(0, 255, 153)";
        })
        if(finalQuestion) {
            document.getElementById("nextButton").innerHTML = "Finish Quiz";
        }
        else {
            document.getElementById("nextButton").innerHTML = "Next Question";
        }
    }
    if(nextQuestion) {
        currentQuestion++;
        document.getElementById("correctMessage").style.display = "none";
        refreshQuestions(quizData)
        document.getElementById("nextButton").innerHTML = "Check Answer";
    }
    if(finishingQuiz) {
        checkedOptions = [];
        document.getElementById("unfinishedQuiz").style.display = "none";
        document.getElementById("quizCompleteMsgContainer").style.display = "";
    }
}

const handleWindowLoad = function(quizData) {
    refreshQuestions(quizData);
    document.getElementById("totalQuestions").innerHTML = quizData.length;
    document.getElementById("nextButton").innerHTML = "Check Answer";
    document.getElementById("correctMessage").style.display = "none";
    document.getElementById("quizCompleteMsgContainer").style.display = "none";
}

   

          