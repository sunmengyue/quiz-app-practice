let id = 1;
let idx = 0;
let finalScore = 100;
const nextButton = document.querySelector('.next');
const correctAnswers = ['Shopcommerce', 'All the above', 'All the above'];
const totalScore = document.querySelector('.total_scores');
const totalScoreContent = document.querySelector('.total_scores span');

const firstInputGroup = document.querySelectorAll('#\\31  input');
const secondInputGroup = document.querySelectorAll('#\\32  input');
const thirdInputGroup = document.querySelectorAll('#\\33  input');

function loadQuestion() {
  document.getElementById('1').classList.add('show');
}

loadQuestion();

//Check Answer
function checkAnswer(id, idx) {
  let answers = document.querySelectorAll(`#\\3${id}  input`);
  console.log(answers);
  for (let answer of answers) {
    if (answer.checked) {
      if (answer.value !== correctAnswers[idx]) {
        finalScore -= Math.floor((1 / 3) * 100);
      }
    }
  }
}

// move to next question when click next
nextButton.addEventListener('click', (e) => {
  goToNext();
  console.log(finalScore);
});

function goToNext() {
  checkAnswer(id, idx);
  document.getElementById(id).classList.remove('show');
  id++;
  idx++;
  if (id == 4) {
    totalScore.classList.add('show');
    totalScoreContent.innerText = finalScore;
  } else if (id > 4 || idx > 2) {
    id = 1;
    idx = -1;
  }
  document.getElementById(id).classList.add('show');
}
