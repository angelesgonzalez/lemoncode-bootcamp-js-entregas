import { GameState } from "../state/gameState";
import { selectACard } from "../utilities/selectAcard";
import { checkGameOver } from "./checkGameOver";
import { renderScore } from "../ui/renderScore";
import { renderGameOver } from "../ui/renderGameOver";
import { renderCard } from "../ui/renderCard";

export const onDrawnCard = (gameState: GameState) => {
	const card = selectACard(gameState.deck)!;

	gameState.drawnCards.push(card);
	gameState.roundTotal += card.value;

	const gameOver = checkGameOver(gameState.roundTotal, gameState.deck);
	renderCard(gameState);

	if (gameOver.gameOver) {
		gameState.gamePhase = "gameOver";
		renderGameOver(gameOver.reason, gameState.roundTotal, gameState.score);
	} else {
		renderScore(gameState);
	}
};
