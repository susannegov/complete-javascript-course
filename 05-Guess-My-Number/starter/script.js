'use strict';

// guess my number between 1-20
// use .querySelector to select elements in css .element
// use .addEventListener('click', function()) after query selector to determine what happens when element click

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// this is random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// this is number user guesses
const guess = Number(document.querySelector('.guess').value);
let message = document.querySelector('.message').textContent;
function numberMessage(guess, secretNumber) {
  if (!guess) {
    message = 'No number!';
  } else if (guess > secretNumber) {
    message = 'Too high!';
  } else if (guess < secretNumber) {
    message = 'Too low!';
  } else {
    message = 'You win!';
  }
}

//document.querySelector('.number').textContent = number;

document
  .querySelector('.check')
  .addEventListener('click', numberMessage(guess, secretNumber));
