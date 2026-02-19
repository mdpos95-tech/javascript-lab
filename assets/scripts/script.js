document.addEventListener('DOMContentLoaded', () => {
const startBtn = document.getElementById('quiz-start')
if
(!startBtn) {
   console.warn('Start quiz button not found. Check the HTML for an element with id "quiz-start".'); return;}

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
        { text: What is the name of the sword given to Jon Snow by Jeor Mormont?,
            answers: ["Longclaw", "Oathkeeper", "Ice","Heartstopper"],
            correctIndex: 0}];

            let currentQuestionIndex = 0;

}); 
});