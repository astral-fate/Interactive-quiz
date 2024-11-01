

const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "HighText Machine Language", "HyperText and links", "HyperText Machine Language"],
        correct: 0,
        points: 2
    },
    {
    question: "Which tag is used to insert the largest heading in HTML?",
    options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;h4&gt;", "&lt;h5&gt;"],
    correct: 1,
    points: 2
    },
    
        {
    question: "How do you create an unordered list (a list with bullets) in HTML?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;dl&gt;"],
    correct: 0,
    points: 2
    },
    {
        question: "Which attribute is used to define inline styles in HTML?",
        options: ["style", "inline", "class", "id"],
        correct: 0,
        points: 2
    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        options: ["forward-slash i.e.", "|", "*", "\\"],
        correct: 0,
        points: 2
    },
    
    {
        question: "What is the purpose of the &lt;meta&gt; tag in HTML?",
        options: ["To style elements", "To provide metadata about the HTML document", "To insert JavaScript", "To link external CSS files"],
        correct: 1,
        points: 2
    },
    {
        question: "How do you select elements with class=\"test\" in CSS?",
        options: [".test", "#test", "class=test", "test"],
        correct: 0,
        points: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
        correct: 0,
        points: 2
    },
    {
        question: "How do you make the text bold in CSS?",
        options: ["font-weight: bold;", "text-style: bold;", "font: bold;", "style: bold;"],
        correct: 0,
        points: 2
    },
    {
        question: "What is the CSS Box Model?",
        options: [
            "A model that describes how elements are rendered and sized in a web page, including content, padding, border, and margin.",
            "A model for organizing CSS rules",
            "A layout technique for creating boxes around elements",
            "None of the above"
        ],
        correct: 0,
        points: 2
    },
    {
        question: "Which HTML attribute specifies a unique id for an element?",
        options: ["The id attribute", "class", "name", "type"],
        correct: 0,
        points: 2
    },
    

// Question 12
{
    question: "How do you link an external CSS file to an HTML document?",
    options: [
        "&lt;style src=\"styles.css\"&gt;&lt;/style&gt;",
        "&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\"&gt;",
        "&lt;css href=\"styles.css\"&gt;&lt;/css&gt;",
        "&lt;include href=\"styles.css\"&gt;&lt;/include&gt;"
    ],
    correct: 1,
    points: 2
},

// Question 13
{
    question: "What is the correct way to start an ordered list with the count of numeric value 4 in HTML?",
    options: ["&lt;ol start=\"4\"&gt;", "&lt;ul start=\"4\"&gt;", "&lt;li start=\"4\"&gt;", "None of the above"],
    correct: 0,
    points: 2
},

// Question 14
{
    question: "How do you add a background color for all &lt;h1&gt; elements in CSS?",
    options: [
        "h1.all {background-color:#FFFFFF;}",
        "all.h1 {background-color:#FFFFFF;}",
        "h1 {background-color:#FFFFFF;}",
        ".h1 {background-color:#FFFFFF;}"
    ],
    correct: 2,
    points: 2
},

// Question 16
{
    question: "What is the correct HTML element for inserting a line break?",
    options: ["&lt;lb&gt;", "&lt;br&gt;", "&lt;break&gt;", "None of them"],
    correct: 1,
    points: 2
},

// Question 17
{
    question: "How do you create a bulleted list in HTML?",
    options: ["&lt;ol type=\"disc\"&gt;", "&lt;list&gt;", "&lt;ul&gt;", "&lt;dl&gt;"],
    correct: 2,
    points: 2
},

// Question 18
{
    question: "What is the purpose of the &lt;div&gt; element in HTML?",
    options: [
        "To style text",
        "To insert images",
        "To group and style other elements or sections of a web page",
        "To create hyperlinks"
    ],
    correct: 2,
    points: 2
},

// Question 21
{
    question: "What is the purpose of the &lt;span&gt; tag in HTML?",
    options: [
        "To define a section in a document",
        "To specify inline styles",
        "To group inline-elements in a document",
        "To insert a line break"
    ],
    correct: 2,
    points: 2
},

// Question 23
{
    question: "Which HTML element defines the title of a document?",
    options: ["&lt;title&gt;", "&lt;head&gt;", "&lt;header&gt;", "None of the above"],
    correct: 0,
    points: 2
},

// Question 24
{
    question: "What is the purpose of the alt attribute in the &lt;img&gt; tag?",
    options: [
        "Specifies an alternate text for an image",
        "Sets the width and height of an image",
        "Defines the source of an image",
        "None of the above"
    ],
    correct: 0,
    points: 2
}, 
{
    question: "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "bgcolor", "color-background", "None of the above"],
    correct: 0,  // Changed from 1 to 0 as per the original question
    points: 2
}
];

class Quiz {
    constructor(data) {
        this.quizData = data;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalPoints = data.reduce((sum, q) => sum + q.points, 0);
        this.quizContent = document.getElementById('quiz-content');
        this.isComplete = false;
        this.init();
    }

    init() {
        this.showQuestion();
        this.updateProgress();
    }

    showQuestion() {
        if (this.currentQuestion >= this.quizData.length) {
            this.isComplete = true;
            this.showResults();
            return;
        }

        const question = this.quizData[this.currentQuestion];
        const template = `
            <div class="question-number">Question ${this.currentQuestion + 1} of ${this.quizData.length}</div>
            <div class="question">
                <div class="question-text">${question.question}</div>
                <div class="points">(${question.points} points)</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" data-index="${index}">${option}</div>
                    `).join('')}
                </div>
            </div>
            <div class="controls">
                ${this.currentQuestion > 0 ? '<button id="prev-btn">Previous</button>' : ''}
                ${this.currentQuestion < this.quizData.length ? `<button id="next-btn" disabled>${this.currentQuestion === this.quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}</button>` : ''}
            </div>
        `;

        this.quizContent.innerHTML = template;
        if (!this.isComplete) {
            this.addEventListeners();
        }
    }

    addEventListeners() {
        const options = document.querySelectorAll('.option');
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');

        options.forEach(option => {
            option.addEventListener('click', () => {
                if (option.classList.contains('correct') || option.classList.contains('wrong')) {
                    return;
                }

                const selectedIndex = parseInt(option.dataset.index);
                const correct = this.quizData[this.currentQuestion].correct;

                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');

                if (selectedIndex === correct) {
                    option.classList.add('correct');
                    this.score += this.quizData[this.currentQuestion].points;
                } else {
                    option.classList.add('wrong');
                    options[correct].classList.add('correct');
                }

                if (nextBtn) {
                    nextBtn.disabled = false;
                }
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.currentQuestion++;
                this.showQuestion();
                this.updateProgress();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.currentQuestion--;
                this.showQuestion();
                this.updateProgress();
            });
        }
    }

    updateProgress() {
        const progress = document.querySelector('.progress');
        if (progress) {
            const progressPercentage = (this.currentQuestion / this.quizData.length) * 100;
            progress.style.width = `${progressPercentage}%`;
        }
    }

    showResults() {
        const percentage = (this.score / this.totalPoints) * 100;
        const template = `
            <div class="result">
                <h2>Quiz Completed!</h2>
                <div class="score">Your Score: ${this.score}/${this.totalPoints} (${percentage.toFixed(1)}%)</div>
                <div class="controls">
                    <button onclick="location.reload()">Restart Quiz</button>
                </div>
            </div>
        `;
        this.quizContent.innerHTML = template;
        this.updateProgress();
    }
}

// Initialize the quiz
const quiz = new Quiz(quizData);
