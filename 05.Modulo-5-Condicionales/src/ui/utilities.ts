export const updateHTML = (element: HTMLElement, message: string) => {
	element.innerText = `${message}`;
};

export const restartCards = () => {
	const cardsContainer = document.getElementById(
		"cards-container",
	) as HTMLDivElement;

	cardsContainer.innerHTML = "";

	const img = document.createElement("img");
	img.src = "/public/assets/card-cover.jpg";
	img.alt = "Cover";

	cardsContainer.appendChild(img);
};
