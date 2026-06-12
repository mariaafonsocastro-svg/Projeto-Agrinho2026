// === ANIMAÇÕES DE QUEDA ===
function createFallingItem(emoji, x) {
    const container = document.getElementById('falling-container');
    const item = document.createElement('div');
    item.className = 'falling-item';
    item.textContent = emoji;
    item.style.left = x + 'px';
    item.style.top = '-80px';
    const duration = Math.random() * 2.5 + 3.8;
    item.style.animationDuration = duration + 's';
    container.appendChild(item);
    setTimeout(() => item.remove(), duration * 1000 + 600);
}

function dropEmojis(emojis, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    emojis.split('').forEach((emoji, i) => {
        setTimeout(() => {
            createFallingItem(emoji, centerX + (Math.random() * 180 - 90));
        }, i * 70);
    });
}

function doarPIX() {
    const notes = ['💵','💰','🪙','💶','💴'];
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createFallingItem(notes[Math.floor(Math.random()*notes.length)], Math.random() * window.innerWidth);
        }, i * 25);
    }
    alert("💚 Obrigado pela doação!\n\nPIX exemplo: regeneraterra@doacao.org");
}

function apoiarRegenerativa() {
    const confetes = ['🌱','🌿','🍃','🌻','🪴','🌍','🌾'];
    for (let i = 0; i < 130; i++) {
        setTimeout(() => {
            createFallingItem(confetes[Math.floor(Math.random()*confetes.length)], Math.random() * window.innerWidth);
        }, i * 7);
    }
}

function atualizarEstatistica() {
    alert("📊 Brasil: +35 milhões de hectares\nMundo: Milhões em transição regenerativa\n(Fonte: pesquisas recentes)");
}

// === QUIZ ===
let currentQuestion = 0;
let score = 0;

const questions = [
    {
        q: "A agricultura regenerativa se compara a cuidar da pele porque:",
        a: ["Explora o solo até acabar", "Regenera e nutre o solo como um ser vivo", "Só usa produtos químicos"],
        correct: 1
    },
    {
        q: "Qual é um dos principais benefícios da agricultura regenerativa?",
        a: ["Aumentar o uso de agrotóxicos", "Sequestro de carbono do ar", "Diminuir a biodiversidade"],
        correct: 1
    },
    {
        q: "O que significa 'plantio direto'?",
        a: ["Arar a terra profundamente", "Não revolver o solo e plantar sobre a palha", "Usar mais máquinas"],
        correct: 1
    },
    {
        q: "Na horta de casa, uma boa prática regenerativa é:",
        a: ["Revolver o solo toda semana", "Fazer compostagem com restos orgânicos", "Usar muito adubo químico"],
        correct: 1
    },
    {
        q: "Alimentos de solos regenerados são:",
        a: ["Menos nutritivos", "Mais ricos em vitaminas e minerais", "Iguais aos convencionais"],
        correct: 1
    },
    {
        q: "Qual prática ajuda na retenção de água no solo?",
        a: ["Cobertura vegetal permanente", "Queimar a palha", "Arar profundamente"],
        correct: 0
    },
    {
        q: "O que é ILPF?",
        a: ["Integração Lavoura-Pecuária-Floresta", "Insumos químicos em larga escala", "Irrigação por pivô central"],
        correct: 0
    },
    {
        q: "A agricultura regenerativa ajuda no combate às mudanças climáticas porque:",
        a: ["Libera mais carbono", "Captura e armazena carbono no solo", "Não afeta o clima"],
        correct: 1
    },
    {
        q: "Qual animal é muito importante na saúde do solo regenerativo?",
        a: ["A minhoca", "A mosca", "O gafanhoto"],
        correct: 0
    },
    {
        q: "Qual é a principal filosofia da agricultura regenerativa?",
        a: ["Explorar o máximo possível", "Regenerar o solo para as próximas gerações", "Produzir o mais barato possível"],
        correct: 1
    }
];

function loadQuestion() {
    const container = document.getElementById('quiz-container');
    const q = questions[currentQuestion];
    
    let html = `
        <div class="mb-8">
            <span class="text-emerald-600 font-medium">Pergunta ${currentQuestion + 1} de 10</span>
            <h3 class="text-2xl font-semibold mt-3">${q.q}</h3>
        </div>
    `;
    
    q.a.forEach((answer, i) => {
        html += `
            <button onclick="answerQuestion(${i})" 
                    class="quiz-option block w-full text-left px-8 py-5 mb-4 bg-white rounded-2xl text-lg border border-emerald-200 hover:border-emerald-400">
                ${answer}
            </button>
        `;
    });
    
    container.innerHTML = html;
}

function answerQuestion(selected) {
    if (selected === questions[currentQuestion].correct) score++;
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('quiz-container').classList.add('hidden');
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    document.getElementById('score').innerHTML = `${percentage}%<br><span class="text-2xl">acertos</span>`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
}

// Iniciar Quiz
window.onload = () => {
    loadQuestion();
};