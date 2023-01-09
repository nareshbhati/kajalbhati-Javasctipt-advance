'use strict';
const score1E = document.querySelector('#score--0');
const score2E = document.getElementById('score--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const current1E = document.getElementById('current--0');
const current2E = document.getElementById('current--1');
const player1E = document.querySelector('.player--0');
const player2E = document.querySelector('.player--1');

// all set to zero
let playing = true;
score1E.textContent = 0;
score2E.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const diceE = document.querySelector('.dice');
diceE.classList.add('hidden');
// switching of player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1E.classList.toggle('player--active');
  player2E.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  //rolling a dice
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // displaying dice
    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current1E.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceE.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', function () {
  playing = true;
  score1E.textContent = 0;
  score2E.textContent = 0;
  current1E.textContent = 0;
  current2E.textContent = 0;
  player1E.classList.add('player--active');
  player2E.classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
