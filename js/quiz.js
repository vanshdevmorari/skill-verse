const quiz = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who invented the lightbulb?",
    options: ["Einstein", "Newton", "Edison", "Tesla"],
    answer: "Edison"
  }
];

let current = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quiz[current].answer;
  if (selected === correct) {
    alert("Correct! ✅");
    current++;
    if (current < quiz.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz-box").innerHTML = "<h2>🎉 You completed the quiz!</h2>";
    }
  } else {
    alert("Wrong! Try again ❌");
  }
}

function exitQuiz() {
  document.getElementById("quiz-box").innerHTML = "<h2>🚪 You exited the quiz.</h2>";
}

// Load first question
window.onload = loadQuestion;
