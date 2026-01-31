import "./style.css";
import { bindStartButton } from "./ui/bindStartButton";
import { startGame } from "./game/startGame";
import { renderStartGame } from "./ui/renderStartGame";

bindStartButton(() => {
	startGame();
	renderStartGame();
});
