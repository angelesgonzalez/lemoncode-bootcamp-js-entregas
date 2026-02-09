export const renderInitialScreen = () => {
	const initialScreen = document.getElementById(
		"gameStartContainer",
	) as HTMLDivElement;

	const roundContainer = document.getElementById(
		"roundContainer",
	) as HTMLDivElement;

	if (roundContainer) {
		roundContainer.classList.add("hidden");
	}

	if (initialScreen) {
		initialScreen.classList.remove("hidden");
	}
};
