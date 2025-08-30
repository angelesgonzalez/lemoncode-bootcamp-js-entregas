export interface Tracker {
	currentNumber: number;
	nextNumber(): number;
	previousNumber(): number;
	insertNumber(arg0: number): number;
	resetNumberTracker(): number;
}
