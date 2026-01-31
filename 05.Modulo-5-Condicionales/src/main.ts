import "./style.css";
import { bindStartButton } from "./ui/bindStartButton";
import { startGame } from "./game/startGame";
import { renderStartGame } from "./ui/renderStartGame";
import { renderScore } from "./ui/renderScore";
import { gameState } from "./state/gameState";
import { bindDrawnButton } from "./ui/bindDrawButton";
import { onDrawnCard } from "./game/onDrawCard";

bindStartButton(() => {
	startGame();
	renderStartGame();
	renderScore(gameState);
});

bindDrawnButton(() => {
	onDrawnCard(gameState);
});
