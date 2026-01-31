export const renderStartGame = () => {
	const gameContainer = document.getElementById(
		"gameContainer",
	) as HTMLDivElement;
	const gameStartContainer = document.getElementById(
		"gameStartContainer",
	) as HTMLDivElement;

	if (gameContainer && gameStartContainer) {
		gameContainer.classList.remove("hidden");
		gameStartContainer.classList.add("hidden");
	}
};
