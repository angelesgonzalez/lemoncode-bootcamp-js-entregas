import "./style.css";

import { createDeck } from "./utilities/createDeck";

import { selectACard } from "./utilities/selectAcard";

let score = 0;
let gameOver = false;
let roundTotal = 0;
const deck = createDeck().sort(() => Math.random() - 0.5);





/*
Condiciones del juego:
Si total > 7.5 → pierde
Si total = 7.5 → gana automáticamente
Si total < 7.5 → puede seguir jugando
Si total >= 7 → se pregunta “¿seguro que quieres seguir?”
Si deck.length === 0 -> No quedan cartas. Fin del juego. 

*/