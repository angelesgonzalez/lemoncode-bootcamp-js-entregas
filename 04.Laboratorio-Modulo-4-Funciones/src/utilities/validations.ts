import { Tracker } from "./Tracker";

export const validateInput = (num: any, tracker: Tracker) => {
	const numericValue = Number(num);

	if (isNaN(numericValue) || !isFinite(numericValue)) {
		return "Please enter a valid number.";
	}

	if (tracker.currentNumber === numericValue) {
		return "Please, enter a different number.";
	}

	if (numericValue <= 0) {
		return "Please, enter a number higher than 0";
	}

	return null;
};
