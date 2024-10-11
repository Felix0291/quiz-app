    const musicQuestion = [
    
        {
            question: "Which of these is not a song on the album Graduation by Kanye West?",
            options: ["I Wonder", "Big Brother", "The Glory", ],
            correctAnswer: "Waves"
        },
        
        {
            question: "Who wrote the song Bad? (Relased 1987)",
            options: ["Elvis", "Adele", "Billy Joel", "Michael Jackson" ],
            correctAnswer: "Michael Jackson"
            
        },
        
        {
            question: "Who is a member om The Beales",
            options: ["George Michael", "Eminem", "Mark Knofpler", "Ringo Starr" ],
            correctAnswer: "Ringo Starr"
        },
        
        {
            question: "What year was Blur's album Parklife relased?",
            options: ["1998, 2001, 1972, 1994 "],
            correctAnswer: "1994"
        },
        
        {
            question: "How many studio albums have Taylor Swift released?",
            options: ["10", "18", "5", "11" ],
            correctAnswer: "11"
        },
        
    ]

    const BookQuestions = [
        {
            question: "Who wrote the Harry Potter Books?",
            options: ["Alfred Nobel", "J.K. Rowling", "George Orwell", "Franz Kafka"],
            correctAnswer: "J.K. Rowling"
        },
        {
            question: "When was the first Nobel Prize awarded?",
            option: ["1892", "1924", "2001", "1901"],
            correctAnswer: "1901"
        },
        {
            question: "Who wrote the famous quote: To be, or not to be?",
            options: ["Erik Carr", "William Shakespear", "Charles Dickens", "T.S. Eliot"],
            correctAnswer: "J.K. Rowling"
        },
        {
            question: "How many books/novels have Steven King written?",
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
const subjectBtnMusic = document.getElementById("Subject-btn-1")
const subjectBtnBooks = document.getElementById("Subject-btn-2")
const quizContainer = document.getElementById("quiz-continer")
const questions = document.getAnimations("questions")
const option = document.getElementById("option")
const nextBtn = document.getElementById("next-btn")
const resultScreen = document.getElementById("result-screen")
const result = document.getElementById("result")
const retryBtn = document.getElementById("retry-btn")

let currentQuestionIndex = []
let currentQuestion = 0
let totalScore = 0

subjectBtn1.addEventListener('click', (e) => {
    console.log(e.target)
    startQuiz(musicQuestions)
})






