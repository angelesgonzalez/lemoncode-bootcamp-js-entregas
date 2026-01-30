export const updateHTML = (element: HTMLElement, message: string) => {
	element.innerText = `${message}`;
};

/*

When clicking on "me planto boton" -> triggerStanding 
triggerStanding -> calls -> checkRoundStatus.ts amd checkRoundStatus check if is gameOver 
if checkRoundStatus devuelve un string -> show string on the screen 
if checkRoudnStatus devuelve un null -> hacer nada.




After clicking plantarse, the game should check if the player has won or lost based on the dealer's total. 

if the game is over, html should show the reason, final score, and a button to restart the game. 

if the game is not over, html should show the current score, the message of the round status, and a button to continue playing. 

everything user click on give me a card, a new card should be drawn from the deck, imgSrc = `card-${deck.suits}-${ranks.name}` and then
*/
