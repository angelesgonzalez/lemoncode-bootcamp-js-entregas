import "./style.css";

const ticket = {
	total: 120,
	drinks: 18,
	friends: 6,
	totalPeople: 6 + 1,
};

const totalToPay = Number(
	((ticket.total - ticket.drinks) / ticket.totalPeople).toFixed(2)
);

const birthdayTotal = Number((totalToPay + ticket.drinks).toFixed(2));

console.log(
	`Each friend has to pay ${totalToPay}. The birthday person pays: ${birthdayTotal}`
);
