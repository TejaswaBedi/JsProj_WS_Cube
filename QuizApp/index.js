const questions = [
  {
    que: "Which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "Which year was JavaScript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "What does CSS stand for ?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboat Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let correct = 0,
  wrong = 0;
const quesBox = document.querySelector("h2");
const optionInputs = document.querySelectorAll(".options");

const reset = () => {
  optionInputs.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
};

const end = () => {
  document.getElementById("box").innerHTML = `<div style='text-align:center'>
  <h3>Thank you for playing the quiz.</h3>
  <h2>${correct} / ${total} are correct.</h2></div>`;
};

const loadQuestion = () => {
  if (index == total) {
    return end();
  }
  reset();
  const data = questions[index];
  quesBox.innerHTML = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

loadQuestion();
