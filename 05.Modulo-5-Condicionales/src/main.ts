import "./style.css";

import { createDeck } from "./utilities/createDeck";

import { checkGameOver } from "./utilities/checkGameOver";

import { selectACard } from "./utilities/selectAcard";

const deck = createDeck().sort(() => Math.random() - 0.5);
let score = 0;
let isPlayerStanding = false;
let roundTotal = 0;
let isGameOver = checkGameOver(score, deck);


/*

// isGameOver is true when roundTotal > 7.5 or deck.length === 0 
if isGameOver is false and isPlayerStanding is true, evaluate roundTotal and assign score accordingly. roundTotal>= 6, score +=roundTotal. Update message based on roundTotal value. 

if isGameOver is false and isPlayerStanding is false, player can keep drawing cards. 



 */

/*
if (roundTotal > 7.5) {
  message = "Te pasaste. Fin de la ronda.";
  loseRound(); score = 0. 
}

else if (roundTotal === 7.5) {
  message = "¡Lo has clavado! ¡Enhorabuena!";
  winRound();
}

else if (playerStands) {
  if (roundTotal < 4) message = "Has sido muy conservador."; -> score = 0. 
  else if (roundTotal === 5) message = "Te ha entrado el canguelo, ¿eh?"; score = 0. 
  else if (roundTotal >= 6 && roundTotal < 7.5) message = "Casi casi..."; score =+ roundTotal. 
  else if (roundTotal === 7.5) message = "¡Lo has clavado! ¡Enhorabuena!"; score =+ roundTotal. 
}

if (deck.length === 0) {
  message = "No quedan cartas. Fin del juego.";
  endGame();
}

*/
