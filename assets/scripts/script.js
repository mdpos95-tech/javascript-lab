document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('quiz-start')
    const backToTopBtn = document.querySelector('back-to-top');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pa
    if
        (!startBtn) {
        console.warn('Start quiz button not found. Check the HTML for an element with id "quiz-start".'); return;
    }

    startBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Start Quiz button clicked!');
        const Intro = document.getElementById('quiz-intro');
        const quizContainer = document.getElementById('quiz-container');
        if (!Intro || !quizContainer) {
            console.warn('Quiz intro or container not found. Check the HTML for elements with ids "quiz-intro" and "quiz-container".');
            return;
        }

        Intro.classList.add('hidden');
        quizContainer.classList.remove('hidden');

        const questions = [
            {
                text: "What is the name of the sword given to Jon Snow by Jeor Mormont?",
                answers: ["Longclaw", "Oathkeeper", "Ice", "Heartstopper"],
                correctIndex: 0
            },
            {
                text: "Who built the Wall in the North?",
                answers: ["The Children of the Forest", "The First Men", "Brandon the Builder", "Bob the Builder"],
                correctIndex: 2
            },

            {
                text: "Which house's sigil is a three-headed dragon?",
                answers: ["House Stark", "House Lannister", "House Targaryen", "House Baratheon"],
                correctIndex: 2
            },
            {
                text: "Who is known as the 'Kingslayer'?",
                answers: ["Jaime Lannister", "Ned Stark", "Robb Stark", "The Hound"],
                correctIndex: 0
            },
            {
                text: "Who killed King Geoffrey Baratheon?",
                answers: ["Tyrion Lannister", "Cersei Lannister", "Oberyn Martell", "Olenna Tyrell"],
                correctIndex: 3
            },
            {
                text: "What is the name of Jon Snows direwolf?",
                answers: ["Ghost", "Nymeria", "Summer", "Shaggydog"],
                correctIndex: 0
            },
            {
                text: "Who is the Mother of Dragons?",
                answers: ["Cersei Lannister", "Daenerys Targaryen", "Sansa Stark", "Margaery Tyrell"],
                correctIndex: 1
            },
            {
                text: "Who is the Lord Commander of the Kingsguard at the start of the show?",
                answers: ["Ser Arthur Dayne", "Ser Barristan Selmy", "Ser Meryn Trant", "Ser Jorah Mormont"],
                correctIndex: 1
            },
            {
                text: "What is the name of the poison used to kill King Joffrey?",
                answers: ["The Strangler", "The Long Farewell", "The Tears of Lys", "The Red Viper's Venom"],
                correctIndex: 0
            },
            {
                text: "Who is the youngest Stark child?",
                answers: ["Robb", "Sansa", "Arya", "Rickon"],
                correctIndex: 3
            },

        ];


        let currentQuestionIndex = 0;
        let score = 0;
        function renderQuestion() {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <h2 class="quiz-title">Question ${currentQuestionIndex + 1}</h2>
                <p class="quiz-question">${q.text}</p>
                <div class="quiz-answers"></div>
                <p class="quiz-feedback"></p>`;
            const answersDiv = quizContainer.querySelector('.quiz-answers');
            const feedback = quizContainer.querySelector('.quiz-feedback');
            let answered = false;
            q.answers.forEach((answer, index) => {
                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = answer;
                btn.addEventListener('click', () => {
                    if (answered) return;
                    answered = true;
                    const isCorrect = index === q.correctIndex;
                    if (isCorrect) { score++; }
                    feedback.textContent = isCorrect ? 'Correct! ✅' : 'Wrong! ❌';
                    const allButtons = answersDiv.querySelectorAll('.answer-btn');
                    allButtons.forEach(btn => btn.disabled = true);
                    currentQuestionIndex++;
                    setTimeout(() => {
                        if (currentQuestionIndex < questions.length) {
                            renderQuestion();
                        } else {
                            const total = questions.length;
                            const percentage = Math.round((score / total) * 100);
                            let resultTitle = '';
                            let resultMessage = '';
                            let title = '';
                            if (score === total) {title = 'Lord of the 7 Kingdoms ⭐⭐⭐⭐⭐';
                                title = 'Lord of the 7 Kingdoms ⭐⭐⭐⭐⭐';
                                message = 'Perfect score! You truly rule Westeros! 👑';
                            } else if (score >= 7) {
                                title = 'Kingsguard ⭐⭐⭐⭐';
                            message = 'A noble score! You are a true protector of the realm! 🛡️';
                            } else if (score >= 5) {
                                title = 'Household knight ⭐⭐⭐';
                                message = 'Resoectable! You have a good grasp of Westeros, but there is room for improvement! ⚔️';
                            } else if (score >= 3) {
                                title = 'Hedge knight ⭐⭐';
                                message = 'You have some knowledge of Westeros, but you are still a wandering knight without a lord! 🏇';
                            } else {
                                title = 'Hot Pie ⭐';
                                message = 'Well, at least you know how to bake a good pie! You might want to rewatch the series and try again! 🥧';
                            }
                            quizContainer.innerHTML = `<h2 class="quiz-title">${title}</h2><p class="quiz-feedback">${message}</p>`;
                            const restartBtn = document.createElement('button');
                            restartBtn.className = 'quiz-restart-btn';
                            restartBtn.textContent = 'Restart Quiz';
                            quizContainer.appendChild(restartBtn);
                            restartBtn.addEventListener('click', () => {
                                currentQuestionIndex = 0;
                                score = 0;
                                renderQuestion(); });

                                const homeBtn = 
                                document.createElement('button');
                                homeBtn.className = 'quiz-home-btn';
                                homeBtn.textContent = 'Back to Home';
                                quizContainer.appendChild(homeBtn);
                                homeBtn.addEventListener('click', () => {
                                    quizContainer.classList.add('hidden');
                                    Intro.classList.remove('hidden');
                                });
                        }
                    }, 700);
                });
                answersDiv.appendChild(btn);
            });
        }
        renderQuestion();



    });

});
