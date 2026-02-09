import { restartCards } from "./utilities";

export const renderStartGame = () => {
	const gameContainer = document.getElementById(
		"gameContainer",
	) as HTMLDivElement;
	const gameStartContainer = document.getElementById(
		"gameStartContainer",
	) as HTMLDivElement;

	const gameOverContainer = document.getElementById(
		"gameOverContainer",
	) as HTMLDivElement;

	const roundContainer = document.getElementById(
		"roundContainer",
	) as HTMLDivElement;

	if (gameOverContainer) {
		gameOverContainer.classList.add("hidden");
	}

	if (roundContainer) {
		roundContainer.classList.add("hidden");
	}

	if (gameStartContainer) {
		gameStartContainer.classList.add("hidden");
	}

	restartCards();

	if (gameContainer) {
		gameContainer.classList.remove("hidden");
	}
};
