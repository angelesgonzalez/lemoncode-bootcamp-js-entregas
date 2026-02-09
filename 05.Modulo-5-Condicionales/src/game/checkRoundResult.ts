import { checkGameOver } from "./checkGameOver";
import { Card } from "../utilities/Card";

export type RoundResolution = {
	pointsToAdd: number;
	message: string;
	gameOver: boolean;
};

export const checkRoundResult = (
	roundTotal: number,
	deck: Card[],
): RoundResolution => {
	const gameOverStatus = checkGameOver(roundTotal, deck);

	if (gameOverStatus.gameOver) {
		return {
			pointsToAdd: 0,
			message: gameOverStatus.reason,
			gameOver: true,
		};
	}

	if (roundTotal <= 4) {
		return {
			pointsToAdd: 0,
			message: "Has sido muy conservador.",
			gameOver: false,
		};
	}

	if (roundTotal === 5) {
		return {
			pointsToAdd: 0,
			message: "Te ha entrado el canguelo, ¿eh?",
			gameOver: false,
		};
	}

	if (roundTotal === 6 || roundTotal === 7) {
		return {
			pointsToAdd: roundTotal,
			message: `Casi casi... Sumaste ${roundTotal} puntos.`,
			gameOver: false,
		};
	}

	return {
		pointsToAdd: roundTotal,
		message: "¡Lo has clavado! ¡Enhorabuena!",
		gameOver: false,
	};
};
