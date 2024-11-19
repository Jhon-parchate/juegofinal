const questions = {
    "Verbo to be": {
        easy: [
            { question: "What is the correct form? 'I ___ a student.'", options: ["am", "is", "are", "be"], answer: 0 },
            { question: "Which is correct? 'They ___ happy.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "What is the past form of 'to be' for 'I'?", options: ["was", "were", "be", "am"], answer: 0 },
            { question: "Choose the correct answer: 'He ___ a teacher.'", options: ["is", "are", "am", "be"], answer: 0 },
            { question: "Which sentence is correct? 'You ___ my friend.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "What is the correct form? 'She ___ at home.'", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "They ___ students.", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "We ___ happy.", options: ["is", "am", "are", "be"], answer: 2 },
            { question: "What is the correct form? 'He ___ a doctor.'", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "I ___ here.", options: ["is", "are", "am", "be"], answer: 2 },
        ],
        medium: [
            { question: "What is the plural of 'I'? ", options: ["We", "They", "You", "Us"], answer: 0 },
            { question: "Fill in the blank: 'She ___ not here.'", options: ["is", "are", "be", "am"], answer: 0 },
            { question: "Choose the correct form: 'He ___ very tall.'", options: ["is", "are", "am", "be"], answer: 0 },
            { question: "Which sentence is correct? 'They ___ my friends.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "What is the past of 'to be' for 'you'?", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "We ___ happy yesterday.", options: ["is", "are", "be", "were"], answer: 3 },
            { question: "Choose the correct form: 'I ___ at the party.'", options: ["am", "is", "are", "be"], answer: 0 },
            { question: "What is the correct form? 'They ___ my friends.'", options: ["am", "is", "are", "be"], answer: 2 },
            { question: "He ___ a good student.", options: ["am", "is", "are", "be"], answer: 1 },
            { question: "She ___ from Spain.", options: ["am", "is", "are", "be"], answer: 1 },
        ],
        hard: [
            { question: "Which sentence is correct?", options: ["He are a doctor.", "He am a doctor.", "He is a doctor.", "He be a doctor."], answer: 2 },
            { question: "What is the past of 'to be' for 'we'?", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "Fill in the blank: 'They ___ not friends.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "Choose the correct sentence.", options: ["I am happy", "I is happy", "I are happy", "I be happy"], answer: 0 },
            { question: "What is the correct form? 'You ___ here yesterday.'", options: ["was", "were", "be", "am"], answer: 1 },
            { question: "Which sentence is correct?", options: ["She are a teacher", "She is a teacher", "She am a teacher", "She be a teacher"], answer: 1 },
            { question: "What is the correct past form for 'I'? ", options: ["was", "were", "am", "be"], answer: 0 },
            { question: "What is the correct form? 'We ___ happy yesterday.'", options: ["was", "were", "am", "be"], answer: 1 },
            { question: "Choose the correct form: 'You ___ my friend.'", options: ["is", "are", "am", "be"], answer: 1 },
            { question: "What is the correct form? 'It ___ raining yesterday.'", options: ["was", "were", "am", "be"], answer: 0 },
        ]
    },
    // Agrega aquí las otras categorías
    "Comparativo y Superlativo": {
        easy: [
            { question: "What is the comparative form of 'tall'?", options: ["taller", "more tall", "tallest", "most tall"], answer: 0 },
            { question: "Choose the correct form: 'She is ___ than him.'", options: ["more beautiful", "beautifuller", "most beautiful", "beautifuler"], answer: 0 },
            { question: "What is the superlative form of 'fast'?", options: ["fastest", "more fast", "faster", "most fast"], answer: 0 },
            { question: "What is the comparative form of 'big'?", options: ["bigger", "more big", "biggest", "biger"], answer: 0 },
            { question: "Choose the correct answer: 'He is ___ than me.'", options: ["smarter", "smartest", "more smart", "smartest"], answer: 0 },
            { question: "What is the superlative form of 'small'?", options: ["smallest", "smaller", "most small", "more small"], answer: 0 },
            { question: "What is the comparative form of 'old'?", options: ["older", "oldest", "more old", "most old"], answer: 0 },
            { question: "What is the superlative form of 'young'?", options: ["youngest", "younger", "most young", "more young"], answer: 0 },
            { question: "Choose the correct form: 'She is ___ than he is.'", options: ["more intelligent", "most intelligent", "intelligenter", "intelligentest"], answer: 0 },
            { question: "What is the comparative form of 'cheap'?", options: ["cheaper", "more cheap", "cheapest", "cheap"], answer: 0 },
        ],
        medium: [
            { question: "What is the superlative form of 'difficult'?", options: ["most difficult", "difficulter", "difficultest", "more difficult"], answer: 0 },
            { question: "Choose the correct answer: 'This book is ___ than that one.'", options: ["more interesting", "interestinger", "interestest", "most interesting"], answer: 0 },
            { question: "What is the comparative form of 'happy'?", options: ["happier", "more happy", "happyest", "most happy"], answer: 0 },
            { question: "Choose the correct form: 'This movie is the ___ I have ever seen.'", options: ["most exciting", "more exciting", "excitingest", "exciter"], answer: 0 },
            { question: "What is the comparative form of 'far'?", options: ["farther", "more far", "farest", "most far"], answer: 0 },
            { question: "What is the superlative form of 'lazy'?", options: ["laziest", "lazier", "most lazy", "more lazy"], answer: 0 },
            { question: "Choose the correct form: 'This test was ___ than the last one.'", options: ["easier", "more easy", "easiest", "easyer"], answer: 0 },
            { question: "What is the comparative form of 'bad'?", options: ["worse", "badder", "worst", "most bad"], answer: 0 },
            { question: "What is the superlative form of 'good'?", options: ["best", "goodest", "most good", "better"], answer: 0 },
            { question: "Choose the correct answer: 'She is the ___ student in the class.'", options: ["smartest", "more smart", "smart", "most smart"], answer: 0 },
        ],
        hard: [
            { question: "Choose the correct answer: 'His car is ___ than mine.'", options: ["more expensive", "expensiver", "expensivest", "most expensive"], answer: 0 },
            { question: "What is the superlative form of 'far'?", options: ["farthest", "farest", "most far", "farth"], answer: 0 },
            { question: "What is the comparative form of 'little'?", options: ["less", "littler", "least", "most little"], answer: 0 },
            { question: "Choose the correct form: 'This problem is the ___ one we have faced.'", options: ["most challenging", "challenginger", "challengest", "more challenging"], answer: 0 },
            { question: "What is the comparative form of 'good'?", options: ["better", "gooder", "more good", "most good"], answer: 0 },
            { question: "What is the superlative form of 'bad'?", options: ["worst", "most bad", "worse", "baddest"], answer: 0 },
            { question: "Choose the correct answer: 'This exam was ___ than the previous one.'", options: ["harder", "most hard", "more harder", "hardest"], answer: 0 },
            { question: "What is the superlative form of 'hot'?", options: ["hottest", "hotter", "most hot", "more hot"], answer: 0 },
            { question: "What is the comparative form of 'interesting'?", options: ["more interesting", "interestinger", "interestest", "most interesting"], answer: 0 },
            { question: "Choose the correct form: 'That mountain is the ___ in the country.'", options: ["highest", "higher", "highiest", "most high"], answer: 0 },
        ]
    },

    "Comparativos de Igualdad y Desigualdad" : {
        easy: [
            { question: "Complete the sentence: 'She is as ___ as her brother.'", options: ["tall", "taller", "tal", "tallest"], answer: 0 },
            { question: "Choose the correct adjective: 'This book is as ___ as that one.'", options: ["interesting", "interestinger", "interseting", "more interesting"], answer: 0 },
            { question: "What is the correct adjective? 'He runs as ___ as his friend.'", options: ["fast", "faster", "fats", "fasting"], answer: 0 },
            { question: "Complete the sentence: 'This car is not as ___ as that one.'", options: ["expensive", "expensiver", "expansive", "more expensiv"], answer: 0 },
            { question: "Choose the correct adjective: 'She is as ___ as him.'", options: ["smart", "smarter", "smrt", "smartest"], answer: 0 },
            { question: "What is the correct answer? 'He speaks as ___ as a teacher.'", options: ["clearly", "clearer", "clerly", "clearlies"], answer: 0 },
            { question: "Select the correct adjective: 'This game is not as ___ as the last one.'", options: ["exciting", "excitinger", "exiting", "excited"], answer: 0 },
            { question: "Choose the correct option: 'He is as ___ as his brother.'", options: ["good", "gooder", "god", "goods"], answer: 0 },
            { question: "Which is correct? 'This task is as ___ as the other one.'", options: ["difficult", "difficulter", "difcult", "dificulting"], answer: 0 },
            { question: "Choose the correct adjective: 'They are as ___ as their parents.'", options: ["hardworking", "hardworkinger", "hardworkng", "hardworker"], answer: 0 }
        ],
        medium: [
            { question: "Complete the sentence: 'Her house is not as ___ as her friend's.'", options: ["big", "bigger", "biggest", "bg"], answer: 0 },
            { question: "What is the correct option? 'This film is as ___ as that one.'", options: ["interesting", "interestinger", "interisting", "interests"], answer: 0 },
            { question: "Choose the correct answer: 'This road is not as ___ as it looks.'", options: ["dangerous", "dangerouser", "dagerous", "dangering"], answer: 0 },
            { question: "Select the correct adjective: 'He is not as ___ as his father.'", options: ["tall", "taller", "tals", "tallest"], answer: 0 },
            { question: "What is the correct answer? 'The cat is as ___ as the dog.'", options: ["agile", "agiler", "agil", "agiest"], answer: 0 },
            { question: "Choose the correct adjective: 'This meal is as ___ as the one we had yesterday.'", options: ["tasty", "tastier", "tassty", "tastying"], answer: 0 },
            { question: "Which is correct? 'Her singing is not as ___ as his.'", options: ["good", "gooder", "god", "goodly"], answer: 0 },
            { question: "Complete the sentence: 'This movie is not as ___ as that comedy show.'", options: ["funny", "funnier", "funnying", "funniest"], answer: 0 },
            { question: "Choose the correct adjective: 'My score is as ___ as his.'", options: ["high", "higher", "hight", "highed"], answer: 0 },
            { question: "What is the correct adjective? 'The test is as ___ as expected.'", options: ["challenging", "challenginger", "challangin", "challenged"], answer: 0 }
        ],
        hard: [
            { question: "Choose the correct adjective: 'She is not as ___ as her colleague.'", options: ["hardworking", "hardworkinger", "hardworkng", "hardworker"], answer: 0 },
            { question: "Select the correct adjective: 'The new model is as ___ as the old one.'", options: ["efficient", "efficiencer", "eficient", "effiencing"], answer: 0 },
            { question: "Complete the sentence: 'This software is as ___ as possible.'", options: ["user-friendly", "user-friendlier", "usre-friendly", "users-friendliest"], answer: 0 },
            { question: "Which sentence is correct? 'Their house is not as ___ as ours.'", options: ["modern", "moderner", "moden", "moderning"], answer: 0 },
            { question: "Choose the correct adjective: 'He is not as ___ as his friend.'", options: ["talkative", "talkativer", "talkativ", "talkating"], answer: 0 },
            { question: "What is the correct answer? 'This project is as ___ as the previous one.'", options: ["important", "importanter", "imprtant", "importing"], answer: 0 },
            { question: "Choose the correct adjective: 'Their team is not as ___ as last year.'", options: ["strong", "stronger", "stong", "strongest"], answer: 0 },
            { question: "Complete the sentence: 'The view here is as ___ as we imagined.'", options: ["beautiful", "beautifuller", "beautyful", "beautifulling"], answer: 0 },
            { question: "What is the correct answer? 'This task is not as ___ as it seems.'", options: ["easy", "easier", "esy", "easing"], answer: 0 },
            { question: "Choose the correct adjective: 'The course is as ___ as any professional training.'", options: ["demanding", "demandinger", "demaning", "demanded"], answer: 0 }
        ]
    },
    "Comparativos de Inferioridad" : {
        easy: [
            { question: "Choose the correct form: 'This exercise is ___ difficult than that one.'", options: ["less", "more", "as", "so"], answer: 0 },
            { question: "What is the correct answer? 'He is ___ strong than his brother.'", options: ["more", "less", "so", "as"], answer: 0 },
            { question: "Complete the sentence: 'The movie was ___ interesting than expected.'", options: ["so", "less", "more", "as"], answer: 1 },
            { question: "Choose the correct option: 'This task is ___ challenging than the last one.'", options: ["as", "more", "so", "less"], answer: 1 },
            { question: "Which is correct? 'She is ___ confident than him.'", options: ["so", "as", "less", "more"], answer: 2 },
            { question: "What is the correct answer? 'This book is ___ exciting than that one.'", options: ["as", "so", "more", "less"], answer: 2 },
            { question: "Choose the correct form: 'Today is ___ cold than yesterday.'", options: ["less", "more", "so", "as"], answer: 0 },
            { question: "Complete the sentence: 'This drink is ___ sweet than the other.'", options: ["so", "more", "as", "less"], answer: 1 },
            { question: "What is the correct option? 'My score is ___ high than yours.'", options: ["more", "as", "less", "so"], answer: 0 },
            { question: "Choose the correct answer: 'This job is ___ stressful than my last one.'", options: ["less", "more", "so", "as"], answer: 0 },
        ],
        medium: [
            { question: "Select the correct form: 'This road is ___ dangerous than it appears.'", options: ["more", "less", "so", "as"], answer: 1 },
            { question: "Complete the sentence: 'He is ___ talented than his sister.'", options: ["so", "as", "more", "less"], answer: 2 },
            { question: "Choose the correct answer: 'The film was ___ scary than I thought.'", options: ["as", "more", "so", "less"], answer: 1 },
            { question: "What is the correct option? 'The food here is ___ spicy than I expected.'", options: ["less", "as", "so", "more"], answer: 0 },
            { question: "Complete the sentence: 'My phone is ___ expensive than hers.'", options: ["as", "more", "less", "so"], answer: 1 },
            { question: "Which is correct? 'This topic is ___ complicated than the last one.'", options: ["so", "less", "as", "more"], answer: 1 },
            { question: "Choose the correct option: 'He is ___ experienced than his colleagues.'", options: ["so", "as", "more", "less"], answer: 2 },
            { question: "What is the correct form? 'The second round was ___ difficult than the first.'", options: ["more", "as", "less", "so"], answer: 0 },
            { question: "Complete the sentence: 'This room is ___ noisy than the others.'", options: ["as", "more", "so", "less"], answer: 1 },
            { question: "Choose the correct answer: 'Her explanation was ___ clear than the teacher's.'", options: ["less", "so", "as", "more"], answer: 0 },
        ],
        hard: [
            { question: "Which sentence is correct? 'The weather here is ___ harsh than in the mountains.'", options: ["as", "less", "more", "so"], answer: 2 },
            { question: "What is the correct answer? 'His ideas were ___ innovative than hers.'", options: ["less", "so", "as", "more"], answer: 0 },
            { question: "Choose the correct form: 'This painting is ___ complex than the last one.'", options: ["more", "less", "as", "so"], answer: 0 },
            { question: "Complete the sentence: 'The second experiment was ___ successful than the first.'", options: ["less", "as", "so", "more"], answer: 0 },
            { question: "What is the correct answer? 'Her speech was ___ persuasive than his.'", options: ["as", "more", "less", "so"], answer: 1 },
            { question: "Select the correct option: 'This course is ___ demanding than expected.'", options: ["less", "as", "so", "more"], answer: 0 },
            { question: "Complete the sentence: 'His response was ___ enthusiastic than before.'", options: ["so", "as", "more", "less"], answer: 2 },
            { question: "Choose the correct answer: 'The problem is ___ serious than we thought.'", options: ["less", "more", "so", "as"], answer: 0 },
            { question: "What is the correct option? 'Her involvement was ___ significant than planned.'", options: ["as", "less", "more", "so"], answer: 2 },
            { question: "Select the correct form: 'This version is ___ advanced than the previous one.'", options: ["so", "less", "more", "as"], answer: 2 },
        ]
    },
};

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

document.getElementById("startButton").addEventListener("click", () => {
    const playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

document.getElementById("loadCategoryButton").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const difficulty = document.getElementById("difficulty").value;
    selectedQuestions = questions[category][difficulty];
    currentQuestionIndex = 0; // Reiniciar el índice de preguntas
    score = 0; // Reiniciar la puntuación
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const questionData = selectedQuestions[currentQuestionIndex];
        document.getElementById("menu").style.display = "none";
        document.getElementById("questionContainer").style.display = "block";
        document.getElementById("question").innerText = questionData.question;
        const optionsContainer = document.getElementById("optionsContainer");
        optionsContainer.innerHTML = ""; // Limpiar opciones anteriores

        questionData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option";
            button.innerText = option;
            button.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    } else {
        showScore();
    }
}

function checkAnswer(selectedIndex) {
    const questionData = selectedQuestions[currentQuestionIndex];
    if (selectedIndex === questionData.answer) {
        score++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + questionData.options[questionData.answer]);
    }
    currentQuestionIndex++;
    loadQuestion(); // Cargar la siguiente pregunta
}

function showScore() {
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("scoreContainer").style.display = "block";
    document.getElementById("score").innerText = score;
}
// Botón para volver al menú principal
document.getElementById("backToMenuButton").addEventListener("click", () => {
    location.reload(); // Recargar la página para volver a empezar
});
