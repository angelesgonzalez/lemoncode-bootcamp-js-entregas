
export const bindStartButton = (handler: () => void) => {
	const button = document.getElementById("startGameBtn");

	button?.addEventListener("click", handler);
};
