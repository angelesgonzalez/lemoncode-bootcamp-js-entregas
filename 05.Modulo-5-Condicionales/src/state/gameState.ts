import { Card } from "../utilities/Card";
export type GamePhase = "playing" | "gameOver";

export const gameState = {
	score: 0,
	roundTotal: 0,
	deck: [] as Card[],
	gamePhase: "playing" as GamePhase,
};
