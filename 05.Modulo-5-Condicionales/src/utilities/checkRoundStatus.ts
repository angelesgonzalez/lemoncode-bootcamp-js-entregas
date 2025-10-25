import { GameOverStatus, checkGameOver } from "./checkGameOver";
import { Card } from "./Card";

export const checkRoundStatus = (
	isGameOver: GameOverStatus,
	isPlayerStanding: boolean,
	roundTotal: number,
	score: number,
	deck: Array<Card>
) => {
	isGameOver = checkGameOver(roundTotal, deck);

	if (isGameOver.gameOver) {
		return isGameOver.reason;
	}

	if (isPlayerStanding) {
		if (roundTotal >= 6 && roundTotal < 7.5) {
			score += roundTotal;
			return `Casi casi... Sumaste ${roundTotal} puntos.`;
		}

		if (roundTotal >= 5) {
			return "Te ha entrado el canguelo, ¿eh? No sumas puntos. ";
		}

		if (roundTotal < 4) {
			return "Has sido muy conservador. No sumas puntos.";
		}
	} else {
		return null;
	}
};
