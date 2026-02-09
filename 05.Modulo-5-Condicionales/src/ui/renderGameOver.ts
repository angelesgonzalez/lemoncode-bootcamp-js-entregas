export const renderGameOver = (
	reason: string,
	roundTotal: number,
	score: number,
) => {
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

	if (gameContainer) {
		gameContainer.classList.add("hidden");
	}

	if (gameOverContainer) {
		gameOverContainer.classList.remove("hidden");
	}
};
