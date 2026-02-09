import { Card } from "./Card";

export const selectACard = (deck: Card[]) => {
	const card = deck.pop();
	return card;
};
