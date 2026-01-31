export const bindStartButton = (handler: () => void) => {
	const button = document.getElementById("drawCardBtn");

	button?.addEventListener("click", handler);
};
