import { GameState } from "../state/gameState";

export const renderCard = ({ drawnCards }: GameState) => {
	const drawnCard = drawnCards[drawnCards.length - 1];
	if (!drawnCard) return;

	const cardImg = document.createElement("img") as HTMLImageElement;
	cardImg.src = `public/assets/card-${drawnCard.suit}-${drawnCard.name}.jpg`;
	cardImg.alt = `${drawnCard.name} de ${drawnCard.suit}`;
	cardImg.classList.add("card-image");

	const cardsContainer = document.getElementById(
		"cards-container",
	) as HTMLDivElement;
	cardsContainer.appendChild(cardImg);
};
