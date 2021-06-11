'use strict';

// guess my number between 1-20
// use .querySelector to select elements in css .element
// use .addEventListener('click', function()) after query selector to determine what happens when element click

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// this is random number
function secretNumberGenerator() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = secretNumberGenerator();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// this is number user guesses
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input
  if (!guess) {
    displayMessage('No number!');
  } else if (score === 1 || guess === secretNumber) {
    // when win or lose
    let end = score > 1 ? 'win' : 'lose';
    if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      highscore = Math.max(score, highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
    displayMessage(`You ${end}!`);
  } else {
    // when wrong guess
    guess > secretNumber
      ? displayMessage('Too high')
      : displayMessage('Too low');
    score--;
  }
  document.querySelector('.score').textContent = score;
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1.Select the element with the 'again'class and attach a click event handler
2.In the handler function, restore initial values of the 'score' and 'secretNumber'variables
3.Restore the initial conditions of the message, number, score and guess input fields
4.Also restore the original background color (#222) and number width (15rem)GOOD LUCK 😀*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = secretNumberGenerator();
  score = 20;

  const selections = {
    '.message': 'Start guessing...',
    '.number': '?',
    '.score': score,
  };
  for (let i in selections) {
    document.querySelector(i).textContent = selections[i];
  }
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
