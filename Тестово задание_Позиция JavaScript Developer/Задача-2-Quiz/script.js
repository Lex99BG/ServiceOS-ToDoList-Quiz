let quizArray = [
    {
        question: "Какво представлява теста на Тюринг",
        answers: [
            'Тест дали машините могат да общуват на човешки език',
            'Тест за забавление предназначен за интелигентни хора',
            'Тест дали човек ще може да разпознае дали общува с изкуствен интелект или с друг човек',
            'Тест за изследване на комуникацията между чат-бот и човек'
        ],
        correctAnswer: '2'
    },
    {
        question: "Съвременната гледна точка към изкуствения интелект (Russell&Norvig) е насочена към създаване на машини с:",
        answers: [
           'Рационални действия',
           'Човешко действие',
           'Човешко мислене',
           'Рационално мислене'
        ],
        correctAnswer: '0'
    },
    {
        question: "За кой тип околна среда е най-лесно да се създадат системи с изкуствен интелект?",
        answers: [
            'Стационарна, стохастична и напълно определена среда',
            'Стационарна, детерминистична и напълно определена среда',
            'Епизодична и частично наблюдаема',
            'Динамична, последователна и частично наблюдаема'
        ],
        correctAnswer: '1'
    },
    {
        question: "Кои са стандартните (вградени) C++ типове данни?",
        answers: [
            'int, char, float, double, vector',
            'int, char, float, double, array',
            'bool, int, char, string, float, double, struct',
            'bool, int, char, float, double'
        ],
        correctAnswer: '3'
    },
    {
        question: "Кой тест от изброените е метод на бялата кутия?",
        answers: [
            'Тест на минималното покритие',
            'Всички споменати',
            'Тест на граничните стойности',
            'Тест на еквивалентните класове'
        ],
        correctAnswer: '0'
    },
  ];

const questionDiv = document.querySelector('.questions');
const answersDiv = document.querySelector('.answers');
const resultDiv = document.querySelector('.result');

const previousButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');
const restartButton = document.querySelector('.restart_btn');

let currentQuestion = 0;
let userAnswers = [];
let correctAnswers = 0;
  

function showQuestion() {
  const question = quizArray[currentQuestion];
  questionDiv.innerHTML = `<h2>${question.question}</h2>`;
  answersDiv.innerHTML = '';

  restartButton.style.display = 'none'; 
  resultDiv.style.display = 'none';

  for (let i = 0; i < question.answers.length; i++) {
    const option = document.createElement('button');
    option.textContent = question.answers[i];
    option.addEventListener('click', selectAnswer);
    answersDiv.appendChild(option);
  }
  
  if (userAnswers[currentQuestion] !== undefined) {
      const selectedOptionIndex = parseInt(userAnswers[currentQuestion]);
  
      
      const answerOptions = Array.from(answersDiv.children);
      answerOptions.forEach((option, index) => {
        option.disabled = true;
  
        
        if (index === selectedOptionIndex) {
          option.style.backgroundColor = 'lightcoral';
        }
      });
    }

  if (currentQuestion === 0) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (currentQuestion === quizArray.length - 1) {
    nextButton.textContent = 'Край';
  } else {
    nextButton.textContent = 'Напред';
  }
}
  

function selectAnswer(event) {
  const selectedOption = event.target;
  const question = quizArray[currentQuestion];
  const answerIndex = Array.from(answersDiv.children).indexOf(selectedOption);

  userAnswers[currentQuestion] = answerIndex.toString();

  for (let i = 0; i < answersDiv.children.length; i++) {
    answersDiv.children[i].disabled = true;
  }

  if (userAnswers[currentQuestion] === question.correctAnswer) {
    selectedOption.style.backgroundColor = 'lightgreen';
    correctAnswers++;
  } else {
    selectedOption.style.backgroundColor = 'lightcoral';
    answersDiv.children[question.correctAnswer].style.backgroundColor = 'lightgreen';
  }

  if (currentQuestion === quizArray.length - 1) {
    showResult();
  }
}
  
function showResult() {
  questionDiv.style.display = 'none';
  answersDiv.style.display = 'none';
  resultDiv.textContent = `Резултат: ${correctAnswers} от ${quizArray.length}`;
  resultDiv.style.display = 'block';
  previousButton.style.display = 'none';
  nextButton.style.display = 'none';
  restartButton.style.display = 'block';
}
  
function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  correctAnswers = 0;
  questionDiv.style.display = 'block';
  answersDiv.removeAttribute('style');
  resultDiv.style.display = 'none';
  previousButton.style.display = 'inline-block';
  nextButton.style.display = 'inline-block';
  restartButton.style.display = 'none';
  showQuestion();
}
  
previousButton.addEventListener('click', () => {
  currentQuestion--;
  showQuestion();
});
  
nextButton.addEventListener('click', () => {
  currentQuestion++;
  showQuestion();
});
  
restartButton.addEventListener('click', restartQuiz);
showQuestion();  