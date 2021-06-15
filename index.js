let id = 1;
let button = document.querySelector('button');
function loadQuestion() {
  document.getElementById('1').classList.add('show');
}

loadQuestion();

button.addEventListener('click', (e) => {
  goToNext();
});

function goToNext() {
  document.getElementById(id).classList.remove('show');
  id = id + 1;
  if (id > 3) id = 1;
  document.getElementById(id).classList.add('show');
}
