import { Tracker } from "./utilities/Tracker";

export const numberTracker: Tracker = {
	currentNumber: 1,
	nextNumber(): number {
		return (this.currentNumber = ++this.currentNumber);
	},
	previousNumber(): number {
		return (this.currentNumber = --this.currentNumber);
	},
	insertNumber(newNumber: number): number {
		return (this.currentNumber = newNumber);
	},

	resetNumberTracker(): number {
		return (this.currentNumber = 0);
	},
};
