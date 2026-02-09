import { GameState } from "../state/gameState";
import { checkRoundResult } from "./checkRoundResult";
import { renderRoundResults } from "../ui/renderRoundResult";

export const onStand = (gameState: GameState) => {
	const roundResolution = checkRoundResult(
		gameState.roundTotal,
		gameState.deck,
	);

	gameState.pastRound = roundResolution.pointsToAdd;

	gameState.score += roundResolution.pointsToAdd;

	gameState.roundTotal = 0;

	renderRoundResults(
		roundResolution.message,
		roundResolution.pointsToAdd,
		gameState.score,
	);
};
