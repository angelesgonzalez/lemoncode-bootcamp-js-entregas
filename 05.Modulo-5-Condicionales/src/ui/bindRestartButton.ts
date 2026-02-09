export const bindRestartButton = (handler: () => void) => {
	const button = document.getElementById("restartGameBtn");

	button?.addEventListener("click", handler);
};
