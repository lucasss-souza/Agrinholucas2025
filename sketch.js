let questions = [
  {
    question: "O que caracteriza o ambiente rural?",
    options: ["Muitas construções", "Áreas abertas e agricultura", "Alta densidade populacional", "Tecnologia avançada"],
    answer: 1
  },
  {
    question: "Qual é uma característica comum da vida urbana?",
    options: ["Tradições antigas", "Muitas plantações", "Comércio e serviços diversificados", "Calmaria e silêncio"],
    answer: 2
  },
  {
    question: "Como as cidades afetam o meio ambiente?",
    options: ["Aumentam a biodiversidade", "Causam poluição e desmatamento", "São ecossistemas equilibrados", "Nenhuma das alternativas"],
    answer: 1
  },
  {
    question: "Qual é o principal fator que atrai as pessoas para as cidades?",
    options: ["A tranquilidade", "Oportunidades de trabalho", "Contato com a natureza", "Vida no campo"],
    answer: 1
  },
  {
    question: "O que é mais comum no campo?",
    options: ["Edifícios altos", "Fazendas e plantações", "Muitas lojas", "Transporte público abundante"],
    answer: 1
  },
  {
    question: "A vida nas cidades é geralmente:",
    options: ["Mais silenciosa e tranquila", "Mais movimentada e agitada", "Mais dependente da natureza", "Mais focada na agricultura"],
    answer: 1
  },
  {
    question: "Quais são os desafios principais do campo?",
    options: ["Excesso de luz artificial", "Falta de recursos naturais", "Falta de infraestrutura e acesso a serviços", "Superpopulação"],
    answer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;
let isAnswerSelected = false;
let selectedAnswer = -1;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(200);

  // Título do jogo
  textSize(32);
  text("Quiz: Campo vs Cidade", width / 2, 50);

  // Pergunta atual
  textSize(24);
  text(questions[currentQuestionIndex].question, width / 2, 100);

  // Opções de resposta
  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    fill(selectedAnswer === i ? "lightblue" : "white");
    rect(100, 150 + i * 60, 400, 50, 10);
    fill(0);
    textSize(20);
    text(questions[currentQuestionIndex].options[i], width / 2, 175 + i * 60);
  }

  // Feedback de resposta
  if (isAnswerSelected) {
    textSize(20);
    fill(0);
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      text("Resposta correta!", width / 2, height - 50);
    } else {
      text("Resposta errada.", width / 2, height - 50);
    }
  }

  // Tela final
  if (currentQuestionIndex >= questions.length) {
    textSize(24);
    text(`Você fez ${score} de ${questions.length} pontos!`, width / 2, height / 2);
    textSize(20);
    text("Clique para reiniciar.", width / 2, height / 2 + 40);
  }
}

function mousePressed() {
  if (currentQuestionIndex >= questions.length) {
    // Reinicia o jogo
    score = 0;
    currentQuestionIndex = 0;
    isAnswerSelected = false;
    selectedAnswer = -1;
    return;
  }

  // Verifica qual opção foi clicada
  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    if (mouseX > 100 && mouseX < 500 && mouseY > 150 + i * 60 && mouseY < 200 + i * 60) {
      selectedAnswer = i;
      isAnswerSelected = true;
      if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
      }
      setTimeout(nextQuestion, 1000);
    }
  }
}

function nextQuestion() {
  isAnswerSelected = false;
  selectedAnswer = -1;
  currentQuestionIndex++;
}
