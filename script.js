import { musicQuestions, bookQuestions } from "./question.js"

const mainContainer = document.getElementById("container")
const subjectBtnMusic = document.getElementById("subject-btn-1")
const subjectBtnBooks = document.getElementById("subject-btn-2")
const quizContainer = document.getElementById("quiz-container")
const questions = document.getElementById("questions")
const option = document.getElementById("option")
const nextBtn = document.getElementById("next-btn")
const resultScreen = document.getElementById("result-screen")
const result = document.getElementById("result")
const retryBtn = document.getElementById("retry-btn")
const displayTime = document.getElementById("display-time")

let currentQuestionIndex = []
let currentQuestion = 0
let totalScore = 0
let startTime
let intervalID


subjectBtnMusic.addEventListener("click", () => startQuiz(musicQuestions))
subjectBtnBooks.addEventListener("click", () => startQuiz(bookQuestions))

nextBtn.addEventListener("click", () => next())
retryBtn.addEventListener("click", () => retry())


function shuffle(arrays) {
    for (let i = arrays.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrays[i], arrays[j]] = [arrays[j], arrays[i]];
    }
    return arrays;
}
function updateTime() {
    const now = Date.now()
    const elapsedTime = now - startTime
    const seconds = Math.floor(elapsedTime / 1000) % 60
    const minutes = Math.floor(elapsedTime / 60000) % 60
    const hours = Math.floor(elapsedTime / 360000) % 60
    displayTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}


function startQuiz(quiz) {
    currentQuestion = shuffle([...quiz])
    currentQuestionIndex = 0
    totalScore = 0
    startTime = Date.now()
    container.classList.add("hide") 
    quizContainer.classList.remove("hide")
    loadQuiz()
    clearInterval(intervalID)
    intervalID = setInterval(updateTime, 10)
    
}

function loadQuiz() {
    const currentQuestions = currentQuestion[currentQuestionIndex]
    questions.textContent = currentQuestions.question
    option.innerHTML = ""   


    currentQuestions.options.forEach(e => {
        const button = document.createElement("button")
        button.textContent = e
        button.addEventListener("click", () => checkAnswer(e))
        option.appendChild(button)
        
    });
    nextBtn.classList.add("hide")
}

function checkAnswer(selectedAnswer) {
    const currentQuestionAnswer = currentQuestion[currentQuestionIndex]
    const button = option.querySelectorAll("button")

    button.forEach(button => {
        if (button.textContent === currentQuestionAnswer.correctAnswer) {
            button.classList.add("correct")
        } else if (button.textContent === selectedAnswer) {
            button.classList.add("incorrect")
        }
        button.disabled = true
            
    })

    if(selectedAnswer === currentQuestionAnswer.correctAnswer) {
        totalScore++
    }
    nextBtn.classList.remove("hide")
}

function next() {
    currentQuestionIndex++
    if (currentQuestionIndex < currentQuestion.length) {
        loadQuiz()
    } else {
        showResult()
    }
}

function showResult() {
    quizContainer.classList.add("hide")
    resultScreen.classList.remove("hide")
    const endTime = Date.now()
    const totalTime = (endTime - startTime) / 1000
    result.textContent = `You got ${totalScore} of 5, and it took you    ${totalTime.toFixed(2)} seconds!`
    clearInterval(intervalID)
}

function retry() {
    resultScreen.classList.add("hide")
    mainContainer.classList.remove("hide")
    displayTime.textContent = "00:00:00"
    clearInterval(intervalID)
}

