export const renderRoundResults = (
	message: string,
	pointsToAdd: number,
	score: number,
) => {
	const gameContainer = document.getElementById(
		"gameContainer",
	) as HTMLDivElement;

	const roundContainer = document.getElementById(
		"roundContainer",
	) as HTMLDivElement;

	const roundMessageContainer = document.getElementById(
		"roundMessage",
	) as HTMLBodyElement;

	const pointsToAddContainer = document.getElementById(
		"pointsToAdd",
	) as HTMLBodyElement;
	const currentScoreContainer = document.getElementById("currentScore");

	if (roundMessageContainer) {
		roundMessageContainer.textContent = `${message}`;
	}

	if (pointsToAddContainer) {
		pointsToAddContainer.textContent = `${pointsToAdd}`;
	}

	if (currentScoreContainer) {
		currentScoreContainer.textContent = `${score}`;
	}

	if (gameContainer) {
		gameContainer.classList.add("hidden");
	}

	if (roundContainer) {
		roundContainer.classList.remove("hidden");
	}
};
