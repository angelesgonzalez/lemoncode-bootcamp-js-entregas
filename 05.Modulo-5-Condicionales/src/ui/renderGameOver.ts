export const renderGameOver = (
	reason: string,
	roundTotal: number,
	score: number,
) => {
	//ocultar gameContainer
	//ensenar gameOverContainer
	//ensenar roundTotal
	//ensenar score total

	const gameContainer = document.getElementById(
		"gameContainer",
	) as HTMLDivElement;
	const gameOverContainer = document.getElementById(
		"gameOverContainer",
	) as HTMLDivElement;

	const gameOverReason = document.getElementById(
		"gameOverReason",
	) as HTMLBodyElement;
	const lastRoud = document.getElementById("lastRound") as HTMLBodyElement;
	const finalScore = document.getElementById("finalScore") as HTMLBodyElement;

	if (gameOverReason) {
		gameOverReason.textContent = `${reason}`;
	}
	if (lastRoud) {
		lastRoud.textContent = `${roundTotal}`;
	}

	if (finalScore) {
		finalScore.textContent = `${score}`;
	}

	if (gameContainer && gameOverContainer) {
		gameContainer.classList.add("hidden");
		gameOverContainer.classList.remove("hidden");
	}
};
