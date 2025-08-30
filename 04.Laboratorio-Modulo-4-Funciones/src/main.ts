import "./style.css";

import { Tracker } from "./utilities/Tracker";
import { updateNumber } from "./utilities/updateNumber";
import { validateInput } from "./utilities/validations";
import {
	updateHTML,
	showOrHideElement,
	showCurrentNumber,
} from "./utilities/DOMmanipulation";

const numberTracker: Tracker = {
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

document.addEventListener("DOMContentLoaded", () => {
	showCurrentNumber(numberTracker);

	const nextNumberBtn = document.getElementById("nextNumber") as HTMLElement;
	const previousNumberBtn = document.getElementById(
		"previousNumber"
	) as HTMLElement;
	const resetNumberBtn = document.getElementById("resetNumber") as HTMLElement;
	const showInsertBtn = document.getElementById("showInsert") as HTMLElement;
	const errorDiv = document.getElementById("error") as HTMLElement;

	nextNumberBtn?.addEventListener("click", () => {
		numberTracker.nextNumber();
		showCurrentNumber(numberTracker);
	});

	previousNumberBtn?.addEventListener("click", () => {
		if (numberTracker.currentNumber != 0) {
			numberTracker.previousNumber();
			showCurrentNumber(numberTracker);
		}
	});

	resetNumberBtn?.addEventListener("click", () => {
		if (numberTracker.currentNumber != 0) {
			numberTracker.resetNumberTracker();
			showCurrentNumber(numberTracker);
		}
	});

	showInsertBtn?.addEventListener("click", () => {
		const newNumberForm = document.getElementById("newNumberForm");

		if (newNumberForm) {
			showOrHideElement(newNumberForm);

			newNumberForm.addEventListener("submit", (event) => {
				event.preventDefault();
				const inputElement = document.getElementById(
					"newNumber"
				) as HTMLInputElement | null;
				
                if (inputElement) {
					const userValue = inputElement.value;
					const errorMessage = validateInput(userValue, numberTracker);

					if (!errorMessage) {
						updateNumber(+userValue, numberTracker);
						showCurrentNumber(numberTracker);
						showOrHideElement(newNumberForm);
					} else {
						showOrHideElement(errorDiv);
						errorDiv.style.display = "block";
						updateHTML(errorDiv, errorMessage);
					}
				}
			});
		}
	});
});
