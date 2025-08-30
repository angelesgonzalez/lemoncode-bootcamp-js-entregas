import "./style.css";

import { numberTracker } from "./numberTracker";
import { validateInput } from "./utilities/validations";
import {
	updateHTML,
	showOrHideElement,
	showCurrentNumber,
} from "./utilities/DOMmanipulation";

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
						numberTracker.insertNumber(+userValue);
						showCurrentNumber(numberTracker);
						showOrHideElement(newNumberForm);
						inputElement.value = "";
						updateHTML(errorDiv, "");
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
