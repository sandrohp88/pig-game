/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0-> First Player, 1 -> Second Player
// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

let score_0 = document.getElementById("score-0");
score_0.textContent = "0";
let score_1 = document.getElementById("score-1");
score_1.textContent = "0";
let current_0 = document.getElementById("current-0");
current_0.textContent = "0";
let current_1 = document.getElementById("current-1");
current_1.textContent = "0";

// document.getElementById("current-" + activePlayer).textContent = dice;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  //1. Random number
  let dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //3. Update de round score IF the rolled number is NOT 1
  if (dice !== 1) {
    // Add score
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //Next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    current_0.textContent = "0";
    current_1.textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }
});
