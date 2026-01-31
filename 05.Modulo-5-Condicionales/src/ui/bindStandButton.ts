export const bindStandButton = (handler: () => void) => {
	const button = document.getElementById("standBtn");

	button?.addEventListener("click", handler);
};
