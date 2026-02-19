document.addEventListener('DOMContentLoaded', () => {
const startBtn = document.getElementById('quiz-start')
if
(!startBtn) {
   console.warn('Start Quiz button not found. Check the HTML for an element with id "quiz-start".'); return;}

startBtn.addEventListener('click', (event) => {
    event.preventDefault();