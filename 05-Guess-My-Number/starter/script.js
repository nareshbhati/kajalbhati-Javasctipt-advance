'use strict';
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumber = 10;
let score = 20;
let highscore = 0;
let message;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = message;
  //   console.log(guess);
  if (!guess) {
    message = 'no input!';
  } else if (guess === secretNumber) {
    message = 'correct Number!';
    // highscore = score;
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '#30 rem';
    // if (score < highscore) {
    //   document.querySelector('.highscore').textContent = highscore;
    // }
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      message = guess > secretNumber ? 'too high' : 'too low';
      score--;
      document.querryselector('.score').textcontent = score;
    } else {
      message = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score >= 1) {
  //     message = 'Too high!';
  //     score--;
  //     document.querryselector('.score').textcontent = score;
  //   } else {
  //     message = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score >= 1) {
  //     message = 'Too low!';
  //     score--;
  //     document.querryselector('.score').textcontent = score;
  //   } else {
  //     message = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // document.querySelector('.message').textContent = message;
  console.log(highscore, score);
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
});
// again  button #challenge1
document.querySelector('.again').addEventListener('click', function () {
  const score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '#15 rem';
  document.querySelector('.guess').value = 'null';
  document.querySelector('.message').textContent = 'start guessing';
});
