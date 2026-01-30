import { gameState } from "../state/gameState";
import { createDeck } from "../utilities/createDeck";

export const startGame = (): void => {
	gameState.score = 0;
	gameState.roundTotal = 0;
	gameState.gamePhase = "playing";
	gameState.deck = createDeck().sort(() => Math.random() - 0.5);
};
