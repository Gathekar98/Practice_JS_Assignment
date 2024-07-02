const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
  {
    question: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of Above",
    correct: "a",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both a & b",
    d: "None of Above",
    correct: "c",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "Both a & b",
    d: "None of Above",
    correct: "c",
  },
];

let index = 0;
let total = quizData.length;
let right = 0,
  wrong = 0;
const queBox = document.getElementById("question-box");
const optionInput = document.querySelectorAll(".options");
const loadQuestions = () => {
    if(index===total){
        return endQuiz();
    }
    reset();
  const data = quizData[index];
  queBox.innerText = `${index + 1}. ${data.question}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
  // console.log(data);
};
const  submitQuiz = () => {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestions();
  return;
};

const getAnswer = () => {
    let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    } 
  });
  return answer;
};

const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz= ()=>{
    if(right>(total/2)){
        
    document.getElementById('quiz-container').innerHTML =`<div class='quiz-container' style='text-align:center; background-color: #8df1dd; '>
    <h1>🎉🎉You Win🎉🎉</h1>
    <h3>thankyu for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>`;
    }
    else{
    
    document.getElementById('quiz-container').innerHTML =`<div class='quiz-container result' style='text-align:center; background-color: #8df1dd; '>
<h1>☹️You Lose☹️</h1>
    <h3><--------thankyu for playing the quiz--------></h3>
    <h2> ${right} / ${total} are corret </h2>
    </div>`;
    }
    
}
loadQuestions();
