import { Tracker } from "./Tracker";

export const updateNumber = (userValue: number, tracker: Tracker) => {
	tracker.insertNumber(userValue);
};
