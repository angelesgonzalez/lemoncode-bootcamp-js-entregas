import { Card } from "../utilities/Card";

export type GamePhase = "playing" | "gameOver";

export type GameState = {
	score: number;
	roundTotal: number;
	pastRound: number;
	deck: Card[];
	gamePhase: GamePhase;
	drawnCards: Card[];
};

export const gameState: GameState = {
	score: 0,
	roundTotal: 0,
	deck: [],
	pastRound: 0,
	gamePhase: "playing",
	drawnCards: [],
};
