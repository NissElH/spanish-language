const questions = [
    // Reading comprehension questions
    { question: "¿Dónde estaba el bosque encantado?", answer: "Cerca de un pueblo" },
    { question: "¿Qué hacían los árboles en el bosque encantado?", answer: "Susurraban" },
    { question: "¿Quién decidió aventurarse en el bosque?", answer: "María" },
    { question: "¿Qué podía hacer la flor mágica?", answer: "Concedía deseos" },
    
    // Typical language test questions
    { question: "Sinónimo de 'feliz'", answer: "contento" },
    { question: "Completa la frase: Ella ___ (ir) a la escuela todos los días.", answer: "va" },
    { question: "Antónimo de 'triste'", answer: "feliz" },
    { question: "Escribe la forma correcta del verbo: Ellos ___ (haber) terminado su tarea.", answer: "han" },
    { question: "Traduce a inglés: 'El sol brillaba y los niños jugaban en el parque.'", answer: "The sun was shining and the children were playing in the park" },
    { question: "Completa la frase: María ___ (comer) una manzana.", answer: "come" },
    { question: "Escribe el antónimo de 'grande'", answer: "pequeño" },
    { question: "Traduce a español: 'She is very intelligent but she doesn't study much.'", answer: "Ella es muy inteligente pero no estudia mucho" },
    { question: "Completa la frase: Nosotros ___ (ser) amigos.", answer: "somos" },
    { question: "Traduce a inglés: 'Me gusta leer libros.'", answer: "I like to read books" },
    { question: "Sinónimo de 'rápido'", answer: "veloz" },
    { question: "Completa la frase: Ellas ___ (tener) un perro.", answer: "tienen" },
    { question: "Traduce a español: 'They are studying for the exam.'", answer: "Ellos están estudiando para el examen" },
    { question: "Escribe el antónimo de 'frío'", answer: "caliente" },
    { question: "Traduce a inglés: 'Nosotros vamos al cine cada viernes.'", answer: "We go to the cinema every Friday" },
    { question: "Completa la frase: Tú ___ (saber) la respuesta.", answer: "sabes" },
    { question: "Traduce a español: 'He is playing soccer with his friends.'", answer: "Él está jugando al fútbol con sus amigos" },
    { question: "Escribe el antónimo de 'fácil'", answer: "difícil" },
    { question: "Completa la frase: Yo ___ (vivir) en España.", answer: "vivo" },
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('text-section').style.display = 'block';
});

function showText() {
    document.getElementById('text-section').style.display = 'block';
    document.getElementById('question-section').style.display = 'none';
}

function showQuestions() {
    document.getElementById('text-section').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
        document.getElementById('answer').value = '';
        document.getElementById('result').textContent = '';
    } else {
        displayScore();
    }
}

function evaluateAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    userAnswers.push({ question: questions[currentQuestionIndex].question, userAnswer, correctAnswer });

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('final-section').style.display = 'block';

    let resultHTML = `<p>Tu puntaje es: ${score} de 20</p>`;
    resultHTML += '<p>Respuestas correctas:</p><ul>';

    userAnswers.forEach(answer => {
        resultHTML += `<li><strong>${answer.question}</strong><br>Tu respuesta: ${answer.userAnswer}<br>Respuesta correcta: ${answer.correctAnswer}</li>`;
    });

    resultHTML += '</ul>';

    document.getElementById('final-result').innerHTML = resultHTML;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0; // clear previous answers
    document.getElementById('final-section').style.display = 'none';
    document.getElementById('text-section').style.display = 'block';
}
