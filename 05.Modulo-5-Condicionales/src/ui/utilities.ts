export const updateHTML = (element: HTMLElement, message: string) => {
	element.innerText = `${message}`;
};

export const restartCards = () => {
	const cardsContainer = document.getElementById(
		"cards-container",
	) as HTMLDivElement;

	cardsContainer.innerHTML = "";

	const img = document.createElement("img");
	img.src = "/assets/card-cover.jpg";
	img.alt = "Cover";
	img.classList.add("card-image");

	cardsContainer.appendChild(img);
};
