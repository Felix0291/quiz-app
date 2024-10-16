// import {musicQuestion, bookQuestions} from "../Uppgift-1-Quizapplikation/question.js"



    const musicQuestion = [
    
        {
            question: "Which part of New York is the Hip Hop group Wu-Tang Clan from?",
            options: ["Staten Island", "Brooklyn", "Queens", "Harlem" ],
            correctAnswer: "Staten Island"
        },
        
        {
            question: "Who wrote the song Bad? (Relased 1987)",
            options: ["Elvis", "Adele", "Billy Joel", "Michael Jackson"],
            correctAnswer: "Michael Jackson"
            
        },
        
        {
            question: "Who is a member of The Beatles?",
            options: ["George Michael", "Eminem", "Mark Knofpler", "Ringo Starr" ],
            correctAnswer: "Ringo Starr"
        },
        
        {
            question: "What year was Blur's album Parklife released?",
            options: ["1998", "2001", "1972", "1994"],
            correctAnswer: "1994"
        },
        
        {
            question: "How many studio albums have Taylor Swift released?",
            options: ["10", "18", "5", "11" ],
            correctAnswer: "11"
        },
        
    ]

    const bookQuestions = [
        {
            question: "Who wrote the Harry Potter Books?",
            options: ["Alfred Nobel", "J.K. Rowling", "George Orwell", "Franz Kafka"],
            correctAnswer: "J.K. Rowling"
        },
        {
            question: "When was the first Nobel Prize awarded?",
            options: ["1892", "1924", "2001", "1901"],
            correctAnswer: "1901"
        },
        {
            question: "Who wrote the famous quote: To be, or not to be?",
            options: ["Erik Carr", "William Shakespear", "Charles Dickens", "T.S. Eliot"],
            correctAnswer: "J.K. Rowling"
        },
        {
            question: "How many books/novels has Stephen King written?",
            options: ["29", "15", "98", "65"],
            correctAnswer: "65"
        },
        {
            question: "Who turned the Lord Of The Rings books in to movies?",
            options: ["Cristopher Nolan", "Peter Jackson", "Quention Tarantiono", "Martin Scorsese" ],
            correctAnswer: "Peter Jackson"
        },
        
    ]


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

let currentQuestionIndex = []
let currentQuestion = 0
let totalScore = 0
let startTime


subjectBtnMusic.addEventListener("click", () => startQuiz(musicQuestion))
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

function startQuiz(quiz) {
    currentQuestion = shuffle([...quiz]);
    currentQuestionIndex = 0
    totalScore = 0
    startTime = Date.now()
    container.classList.add("hide") 
    quizContainer.classList.remove("hide")
    loadQuiz()
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
    result.textContent = `Du fick ${totalScore} av 5 och det tog ${totalTime.toFixed(2)} sekunder!`
}

function retry() {
    resultScreen.classList.add("hide")
    mainContainer.classList.remove("hide")
}


