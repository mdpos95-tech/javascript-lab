document.addEventListener('DOMContentLoaded', () => {
const startBtn = document.getElementById('quiz-start')
if
(!startBtn) {
   console.warn('Start quiz button not found. Check the HTML for an element with id "quiz-start".'); return;}

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Start Quiz button clicked!');
    alert('Quiz starting...');  }); });