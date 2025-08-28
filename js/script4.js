// Quiz functionality
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
            
            if (!selectedAnswer) {
                quizResult.textContent = 'Pilih jawaban terlebih dahulu!';
                quizResult.style.color = '#e74c3c';
                return;
            }

            const answer = selectedAnswer.value;
            const correctAnswer = 'seo'; // Correct answer is SEO

            if (answer === correctAnswer) {
                quizResult.textContent = 'Jawaban Anda Benar! 🎉';
                quizResult.style.color = '#2ecc71';
            } else {
                quizResult.textContent = 'Jawaban Anda Salah. Coba lagi.';
                quizResult.style.color = '#e74c3c';
            }
        });
    }
});