export const validateInput = (num: any, tracker: NumberTracker) => {
	if (isNaN(num)) {
		return "Please enter a valid number.";
	}

	if (tracker.currentNumber === num) {
		return "Please, enter a different number.";
	}

	return false;
};
