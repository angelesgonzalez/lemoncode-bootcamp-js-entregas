import "./style.css";
import { bindStartButton } from "./ui/bindStartButton";
import { startGame } from "./game/startGame";
import { renderStartGame } from "./ui/renderStartGame";
import { renderScore } from "./ui/renderScore";
import { gameState } from "./state/gameState";
import { bindDrawnButton } from "./ui/bindDrawButton";
import { bindRestartButton } from "./ui/bindRestartButton";
import { onDrawnCard } from "./game/onDrawCard";
import { bindStandButton } from "./ui/bindStandButton";
import { onStand } from "./game/onStand";
import { bindContinueRound } from "./ui/bindContinueRound";
import { bindQuitGame } from "./ui/bindQuitGame";
import { resetGameState } from "./game/resetGameState";
import { renderInitialScreen } from "./ui/renderInitialScreen";

bindStartButton(() => {
	startGame();
	renderStartGame();
	renderScore(gameState);
});

bindDrawnButton(() => {
	onDrawnCard(gameState);
});

bindStandButton(() => {
	onStand(gameState);
});

bindContinueRound(() => {
	renderScore(gameState);
	renderStartGame();
});

bindRestartButton(() => {
	startGame();
	renderStartGame();
	renderScore(gameState);
});

bindQuitGame(() => {
	resetGameState();
	renderInitialScreen();
});
