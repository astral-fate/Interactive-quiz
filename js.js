const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "HighText Machine Language", "HyperText and links", "HyperText Machine Language"],
        correct: 0,
        points: 2
    },
    {
        question: "Which tag is used to insert the largest heading in HTML?",
        options: ["<h6>", "h1", "<h4>", "<h5>"],
        correct: 1,
        points: 2
    },
    {
        question: "How do you create an unordered list (a list with bullets) in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<dl>"],
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
        question: "What is the purpose of the <meta> tag in HTML?",
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
    {
        question: "How do you link an external CSS file to an HTML document?",
        options: [
            "<style src=\"styles.css\"></style>",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">",
            "<css href=\"styles.css\"></css>",
            "<include href=\"styles.css\"></include>"
        ],
        correct: 1,
        points: 2
    },
    {
        question: "What is the correct way to start an ordered list with the count of numeric value 4 in HTML?",
        options: ["<ol start=\"4\">", "<ul start=\"4\">", "<li start=\"4\">", "None of the above"],
        correct: 0,
        points: 2
    },
    {
        question: "How do you add a background color for all <h1> elements in CSS?",
        options: [
            "h1.all {background-color:#FFFFFF;}",
            "all.h1 {background-color:#FFFFFF;}",
            "h1 {background-color:#FFFFFF;}",
            ".h1 {background-color:#FFFFFF;}"
        ],
        correct: 2,
        points: 2
    },
    {
        question: "Which CSS property is used to change the font?",
        options: ["font-family property", "font-weight", "font-size", "font-style"],
        correct: 0,
        points: 2
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<br>", "<break>", "None of them"],
        correct: 1,
        points: 2
    },
    {
        question: "How do you create a bulleted list in HTML?",
        options: ["<ol type=\"disc\">", "<list>", "<ul>", "<dl>"],
        correct: 2,
        points: 2
    },
    {
        question: "What is the purpose of the <div> element in HTML?",
        options: [
            "To style text",
            "To insert images",
            "To group and style other elements or sections of a web page",
            "To create hyperlinks"
        ],
        correct: 2,
        points: 2
    },
    {
        question: "Which CSS property controls the space around elements?",
        options: ["border", "margin", "padding", "outline"],
        correct: 1,
        points: 2
    },
    {
        question: "How do you select elements with id=\"demo\" in CSS?",
        options: [".demo", "#demo", "id=demo", "demo"],
        correct: 1,
        points: 2
    },
    {
        question: "What is the purpose of the <span> tag in HTML?",
        options: [
            "To define a section in a document",
            "To specify inline styles",
            "To group inline-elements in a document",
            "To insert a line break"
        ],
        correct: 2,
        points: 2
    },
    {
        question: "How do you display hyperlinks without an underline in CSS?",
        options: ["text-decoration: none;", "underline: false;", "link-style: no-underline;", "None of the above"],
        correct: 0,
        points: 2
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<title>", "<head>", "<header>", "None of the above"],
        correct: 0,
        points: 2
    },
    {
        question: "What is the purpose of the alt attribute in the <img> tag?",
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
        correct: 0,
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
        console.log('Total questions:', this.quizData.length); // Debug log
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
            <div class="question-container">
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
                    <button id="next-btn" disabled>
                        ${this.currentQuestion === this.quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
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
            const progressPercentage = ((this.currentQuestion + 1) / this.quizData.length) * 100;
            progress.style.width = `${Math.min(progressPercentage, 100)}%`;
        }
    }

    showResults() {
        const percentage = (this.score / this.totalPoints) * 100;
        const template = `
            <div class="result">
                <h2>Quiz Completed!</h2>
                <div class="score">
                    Your Score: ${this.score}/${this.totalPoints} (${percentage.toFixed(1)}%)
                </div>
                <div class="controls">
                    <button onclick="location.reload()">Restart Quiz</button>
                </div>
            </div>
        `;
        this.quizContent.innerHTML = template;
        this.updateProgress();
    }
}

// Make sure the DOM is loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz(quizData);
    console.log('Quiz initialized with', quizData.length, 'questions');
});