// Functionality to copy code to clipboard
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-btn');
    const codeBlock = document.querySelector('.code-container pre code');

    if (copyButton && codeBlock) {
        copyButton.addEventListener('click', () => {
            // Use a temporary textarea to handle the selection and copy process
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = codeBlock.textContent;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);
            
            // Provide user feedback
            copyButton.textContent = 'Berhasil disalin!';
            setTimeout(() => {
                copyButton.textContent = 'Salin Kode';
            }, 2000);
        });
    }

    // Functionality for the quiz
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
            const correctAnswer = 'matplotlib'; // Correct answer is Matplotlib

            if (answer === correctAnswer) {
                quizResult.textContent = 'Jawaban Anda Benar! 🎉';
                quizResult.style.color = '#27ae60';
            } else {
                quizResult.textContent = 'Jawaban Anda Salah. Coba lagi.';
                quizResult.style.color = '#e74c3c';
            }
        });
    }
});