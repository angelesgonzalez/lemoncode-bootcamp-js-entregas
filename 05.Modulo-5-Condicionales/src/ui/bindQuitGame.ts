export const bindQuitGame = (handler: () => void) => {
	const button = document.getElementById("quitGame");

	button?.addEventListener("click", handler);
};
