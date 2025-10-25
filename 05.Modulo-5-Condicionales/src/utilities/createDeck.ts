const suits = ["oro", "copa", "espada", "bastos"];

const ranks = [
	{ name: "1", value: 1 },
	{ name: "2", value: 2 },
	{ name: "3", value: 3 },
	{ name: "4", value: 4 },
	{ name: "5", value: 5 },
	{ name: "6", value: 6 },
	{ name: "7", value: 7 },
	{ name: "10", value: 0.5 },
	{ name: "11", value: 0.5 },
	{ name: "12", value: 0.5 },
];

export const createDeck = () => {
	const deck = [];

	for (const suit of suits) {
		for (const rank of ranks) {
			deck.push({
				name: rank.name,
				value: rank.value,
				suit: suit,
			});
		}
	}

	return deck;
};




