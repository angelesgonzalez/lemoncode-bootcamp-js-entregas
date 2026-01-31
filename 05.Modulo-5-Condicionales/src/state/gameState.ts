import { Card } from "../utilities/Card";

export type GamePhase = "playing" | "gameOver";

export type GameState = {
	score: number;
	roundTotal: number;
	deck: Card[];
	gamePhase: GamePhase;
	drawnCards: Card[];
};

export const gameState: GameState = {
	score: 0,
	roundTotal: 0,
	deck: [],
	gamePhase: "playing",
	drawnCards: [],
};
