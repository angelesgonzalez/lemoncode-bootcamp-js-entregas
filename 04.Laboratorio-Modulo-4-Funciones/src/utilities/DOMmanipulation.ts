import { Tracker } from "./Tracker";
import { editCurrentNumber } from "./editCurrentNumber";

export const updateHTML = (element: HTMLElement, message: string) => {
	element.innerText = `${message}`;
};

export const showOrHideElement = (element: HTMLElement) => {
	element.classList.toggle("hidden");
};

export const showCurrentNumber = (numberTracker: Tracker) => {
	const currentNumberEdited = editCurrentNumber(numberTracker.currentNumber);

	const currentNumberDOM = document.getElementById("numberTurn");

	if (currentNumberDOM) {
		currentNumberDOM.innerText = currentNumberEdited;
	}
};
