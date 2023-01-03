'use strict';
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumber = 10;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message;
  //   console.log(guess);
  if (!guess) {
    message = 'no input!';
  } else if (guess === secretNumber) {
    message = 'correct Number!';
    highscore = score;
    document.querySelector('.number').textContent = guess;
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '#30 rem';
  } else if (guess > secretNumber) {
    if (score >= 1) {
      message = 'Too high!';
      score--;
    } else {
      message = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score >= 1) {
      message = 'Too low!';
      score--;
    } else {
      message = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  document.querySelector('.message').textContent = message;
  //   console.log(highscore, score);
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
});
