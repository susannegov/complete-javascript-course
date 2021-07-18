'use strict';

// Set default game mode
let scores, activePlayer, current, currentScore, playing, dice;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  current = 0;
  currentScore = 0;
  playing = true;
  dice = document.querySelector('.dice');
  dice.classList.add('hidden');
  document.querySelectorAll('.score')[0].textContent = 0;
  document.querySelectorAll('.score')[1].textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

init();

// function to switch player
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer === 1 ? 0 : 1;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

// Button Roll
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    current = Math.floor(Math.random() * 6) + 1;
    dice.setAttribute('src', `dice-${current}.png`);
    if (current !== 1) {
      currentScore += current;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Button
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// New Game Button
document.querySelector('.btn--new').addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  init();
});

// user reset game
// set all scores to game
// set player 1 as starting player
