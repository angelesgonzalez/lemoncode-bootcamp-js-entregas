import { Card } from "../utilities/Card";

export type GamePhase = "playing" | "gameOver";

export const gameState: {
	score: number;
	roundTotal: number;
	deck: Card[];
	gamePhase: GamePhase;
	drawnCards: Card[];
} = {
	score: 0,
	roundTotal: 0,
	deck: [],
	gamePhase: "playing",
	drawnCards: [],
};
