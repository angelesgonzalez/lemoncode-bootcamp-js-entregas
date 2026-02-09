export const bindContinueRound = (handler: () => void) => {
	const button = document.getElementById("continueRound");

	button?.addEventListener("click", handler);
};
