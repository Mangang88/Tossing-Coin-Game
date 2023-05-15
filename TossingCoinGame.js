const score = {
  wins: 0,
  losses: 0
};
const result = document.querySelector('.result');
const headButton = document.getElementById('headButton');
const tailButton = document.getElementById('tailButton');
const headResult = document.getElementById('headResult');
const tailResult = document.getElementById('tailResult');
const scoreElement = document.getElementById('score');

headButton.addEventListener('click',() => {
  const guess = Math.random();
  if(guess < 0.5) {
    result.value = 'Head';
    score.wins++;
    headResult.innerText = 'you chose head';
  } else {
    result.value = 'Tail';
    score.losses++
    headResult.innerText = 'you chose tail';
  }
  updateScore();
});

tailButton.addEventListener('click',() => {
  const guess = Math.random();
  if(guess > 0.5) {
    result.value = 'Tail';
    score.wins++;
    tailResult.innerText = 'you chose Tail';
  } else {
    result.value = 'Head';
    score.losses++;
    tailResult.innerText = 'you chose Head';
  }
  updateScore();
});
function updateScore() {
  scoreElement.innerText = `score: wins- ${score.wins}, losses- ${score.losses}`;
}