import { Card } from "./Card";

export const selectACard = (deck: Array<Card>) => {
	const card = deck.pop();
	return card;
};
