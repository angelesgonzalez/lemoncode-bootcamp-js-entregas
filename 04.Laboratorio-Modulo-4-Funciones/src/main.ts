import "./style.css";

interface numberTracker {
	currentNumber: number;
	nextNumber(): number;
	previousNumber(): number;
	insertNumber(arg0: number): number;
	resetNumberTracker(): number;
}

const numberTracker: numberTracker = {
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

const editCurrentNumber = (currentNumber: number): string =>
	currentNumber.toString().padStart(2, "0");

const showCurrentNumber = (numberTracker: numberTracker) => {
	const currentNumberEdited = editCurrentNumber(numberTracker.currentNumber);

	const currentNumberDOM = document.getElementById("numberTurn");

	if (currentNumberDOM) {
		currentNumberDOM.innerText = currentNumberEdited;
	}
};

const updateNumber = (userValue: number, tracker: numberTracker) => {
	tracker.insertNumber(userValue);
};

document.addEventListener("DOMContentLoaded", () => {
	showCurrentNumber(numberTracker);

	const nextNumberBtn = document.getElementById("nextNumber");
	const previousNumberBtn = document.getElementById("previousNumber");
	const resetNumberBtn = document.getElementById("resetNumber");
	const showInsertBtn = document.getElementById("showInsert");

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

	// const hideHTMLelement = (element: HTMLElement) => {
	// 	element.classList.add("hidden");
	// };

	const showOrHideElement = (element: HTMLElement) => {
		element.classList.toggle("hidden");
	};

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
					updateNumber(+userValue, numberTracker);
					showCurrentNumber(numberTracker);
					showOrHideElement(newNumberForm);
				}
			});
		}
	});
});
