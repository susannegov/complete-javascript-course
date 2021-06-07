/*
GAME RULES:

- The game has 2 players, playing in rounds

- In each turn, a player rolls a dice as many times as he whishes.
Each result get added to his ROUND score

- BUT, if the player rolls a 1, all his ROUND score gets lost.
After that, it's the next player's turn

- The player can choose to 'Hold',
which means that his ROUND score gets added to his GLOBAL score.
After that, it's the next player's turn

- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, dice6, winScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    // Random number generate
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    // Display Results
    var diceDOM = document.querySelector('.dice');
    var dice1DOM = document.querySelector('.dice1');
    diceDOM.style.display = 'block';
    dice1DOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    dice1DOM.src = 'dice-' + dice1 + '.png';
    // Removes score if player rolls two 6s
    if (dice == 6 || dice1 == 6) {
      if (dice6) {
        scores[activePlayer] = 0;
        nextPlayer();
      }
      dice6 = true;
    } else {
      dice6 = false;
    }
    //Update round score if rolled number is not 1
    if (dice !== 1 || dice1 !== 1) {
      // Add score
      roundScore += dice + dice1;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying){
    //Add current score to Hold
    scores[activePlayer] += roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player wont the game
    if (scores[activePlayer] >= winScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  dice6 = false;
  winScore = 100;
  document.querySelector('.btn-submit').addEventListener('click', function() {
    winScore = document.getElementById('win').value;
  });

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

/*
1. A player loses their entire score when they roll two 6 in a row. After that,
it's the next player turn.
2. Add input field to HTML where players can set the winning score, so they can
change the predefined score of 100.
3. Add another dice to the game, so that there is two dices now.
*/
