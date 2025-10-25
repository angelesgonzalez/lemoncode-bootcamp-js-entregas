import { Card } from "./Card";

export interface GameOverStatus {
    gameOver: boolean;
    reason?: string;
}

export const checkGameOver = (roundTotal: number, deck: Array<Card>) => {
	if (roundTotal > 7.5) {
		return { gameOver: true, reason: "Te pasaste. El juego se ha terminado." };
	} else if (deck.length === 0) {
		return { gameOver: true, reason: "No quedan cartas. Comienza otro juego." };
	} else {
		return { gameOver: false };
	}
};
