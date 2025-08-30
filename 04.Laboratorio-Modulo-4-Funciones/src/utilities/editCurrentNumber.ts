

export const editCurrentNumber = (currentNumber: number): string =>
	currentNumber.toString().padStart(2, "0");
