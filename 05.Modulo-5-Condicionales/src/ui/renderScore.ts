import { GameState } from "../state/gameState";

export const renderScore = ({ score, roundTotal, deck }: GameState) => {
	const deckCounter = document.getElementById("deckCounter") as HTMLSpanElement;
	const scoreCounter = document.getElementById(
		"scoreCounter",
	) as HTMLSpanElement;
	const roundTotalCounter = document.getElementById(
		"roundTotalCounter",
	) as HTMLSpanElement;

	if (deckCounter) {
		deckCounter.textContent = `${deck.length}`;
	}

	if (scoreCounter) {
		scoreCounter.textContent = `${score}`;
	}

	if (roundTotalCounter) {
		roundTotalCounter.textContent = `${roundTotal}`;
	}
};
