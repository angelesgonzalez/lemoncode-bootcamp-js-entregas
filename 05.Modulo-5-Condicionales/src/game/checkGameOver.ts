import { Card } from "../utilities/Card";

interface GameOverStatus {
	gameOver: boolean;
	reason: string;
}

export const checkGameOver = (
	roundTotal: number,
	deck: Card[],
): GameOverStatus => {
	if (roundTotal > 7.5) {
		return { gameOver: true, reason: "Te pasaste. El juego se ha terminado." };
	}

	if (deck.length === 0) {
		return { gameOver: true, reason: "No quedan cartas. Comienza otro juego." };
	}

	return { gameOver: false, reason: "" };
};
