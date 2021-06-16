let id = 1;
let nextButton = document.querySelector('.next');
function loadQuestion() {
  document.getElementById('1').classList.add('show');
}

loadQuestion();

// move to next question when click next
nextButton.addEventListener('click', (e) => {
  goToNext();
});

function goToNext() {
  document.getElementById(id).classList.remove('show');
  id = id + 1;
  if (id > 3) id = 1;
  document.getElementById(id).classList.add('show');
}
