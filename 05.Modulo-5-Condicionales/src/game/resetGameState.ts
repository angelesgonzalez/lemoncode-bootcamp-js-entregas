import { gameState } from "../state/gameState";

export const resetGameState = (): void => {
	gameState.score = 0;
	gameState.roundTotal = 0;
	gameState.gamePhase = "playing";
	gameState.pastRound = 0;
	gameState.deck = [];
	gameState.drawnCards = [];
};
