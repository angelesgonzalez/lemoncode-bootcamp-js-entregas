export const bindDrawnButton = (handler: () => void) => {
	const button = document.getElementById("drawCardBtn");

	button?.addEventListener("click", handler);


};
